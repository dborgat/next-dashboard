import { NextResponse } from 'next/server';
import bcrypt from 'bcrypt';
import prisma from '../../../lib/prisma';

export async function POST(req) {
  const body = await req.json();

  const { name, email, password, zone, familyType, houseType } = body;

  if (!name || !email || !password || !zone || !familyType || !houseType) {
    return NextResponse.json(
      { error: 'Todos los campos son obligatorios' },
      { status: 400 }
    );
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return NextResponse.json({ error: 'Email inválido' }, { status: 400 });
  }

  if (password.length < 6) {
    return NextResponse.json(
      { error: 'La contraseña debe tener al menos 6 caracteres' },
      { status: 400 }
    );
  }

  const hashedPassword = await bcrypt.hash(password, 10);

  try {
    const newUser = await prisma.User.create({
      data: {
        nombre: name,
        mail: email,
        password: hashedPassword,
        zona: {
          connect: { id: +zone },
        },
        familiaType: {
          connect: { id: +familyType },
        },
        hogarType: {
          connect: { id: +houseType },
        },
        rol: {
          connect: { id: 1 },
        },
      },
    });
    return NextResponse.json({ data: newUser, status: 201 });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: 'Error registrando el usuario' },
      { status: 500 }
    );
  }
}
