import prisma from './prisma';

export async function getZones() {
  try {
    return prisma.ZonaType.findMany();
  } catch (error) {
    console.error(error);
    throw new Error(error);
  }
}

export async function getFamilyType() {
  try {
    return prisma.FamiliaType.findMany();
  } catch (error) {
    console.error(error);
    throw new Error(error);
  }
}

export async function getHouseType() {
  try {
    return prisma.HogarType.findMany();
  } catch (error) {
    console.error(error);
    throw new Error(error);
  }
}
