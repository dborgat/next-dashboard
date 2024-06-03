// scripts/seed.js
const prisma = require('../lib/prisma');

async function main() {
  await prisma.zonaType.createMany({
    data: [
      { name: 'Zona Norte 1' },
      { name: 'Zona Norte 2' },
      { name: 'Zona Norte 3' },
      { name: 'Zona Oeste 1' },
      { name: 'Zona Oeste 2' },
      { name: 'Zona CABA' },
      { name: 'Zona Sur 1' },
      { name: 'Zona Sur 2' },
    ],
  });

  await prisma.familiaType.createMany({
    data: [
      { type: 'Una persona' },
      { type: 'Conviviendo con una o mas personas' },
    ],
  });

  await prisma.hogarType.createMany({
    data: [
      { type: 'Casa sin patio' },
      { type: 'Casa con patio' },
      { type: 'Departamento monoambiente' },
      { type: 'Departamento 2 ambientes' },
      { type: 'Departamento +2 ambientes' },
      { type: 'Duplex' },
      { type: 'Triplex' },
    ],
  });

  await prisma.role.createMany({
    data: [
      { type: 'default' },
      { type: 'admin' },
      { type: 'heroe' },
      { type: 'transitante' },
    ],
  });
}

main()
  .catch((e) => console.error(e))
  .finally(async () => {
    await prisma.$disconnect();
  });
