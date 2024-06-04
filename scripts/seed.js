// scripts/seed.js
const prisma = require('../lib/prisma');

async function main() {
  await prisma.zoneType.createMany({
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

  await prisma.familyType.createMany({
    data: [
      { type: 'Una persona' },
      { type: 'Conviviendo con una o mas personas' },
    ],
  });

  await prisma.houseType.createMany({
    data: [
      { type: 'Depto / Casa sin patio / balcon' },
      { type: 'Depto / Casa con patio / balcon' },
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
