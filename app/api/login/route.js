import { NextResponse } from 'next/server';
import bcrypt from 'bcrypt';
import prisma from '../../../lib/prisma';
import jwt from 'jsonwebtoken';

const SECRET_KEY = process.env.SECRET_KEY_JWT || 'your-secret-key';

export async function POST(req) {
  const body = await req.json();
  const { email, password } = body;

  console.log(body, 'ppppppppp');
  if (!email || !password) {
    return NextResponse.json(
      { error: 'Email y contraseña son obligatorios' },
      { status: 400 }
    );
  }

  try {
    // Buscar usuario por email
    const user = await prisma.User.findUnique({
      where: { mail: email },
    });

    if (!user) {
      return NextResponse.json(
        { error: 'Email y contraseña son obligatorios' },
        { status: 401 }
      );
    }

    // Comparar contraseñas
    const isPasswordValid = await bcrypt.compare(password, user.password);

    if (!isPasswordValid) {
      return NextResponse.json(
        { error: 'Email o contraseña son incorrectos' },
        { status: 401 }
      );
    }

    // Generar token JWT
    const token = jwt.sign({ userId: user.id }, SECRET_KEY, {
      expiresIn: '1h',
    });
    console.log(token, 'token');
    console.log(user, 'user');

    return NextResponse.json({ token }, { status: 200 });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: 'Error iniciando sesión' },
      { status: 500 }
    );
  }
}
