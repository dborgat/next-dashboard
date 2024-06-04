import prisma from './prisma';

export async function getZones() {
  try {
    return prisma.zoneType.findMany();
  } catch (error) {
    console.error(error);
    throw new Error(error);
  }
}

export async function getFamilyType() {
  try {
    return prisma.familyType.findMany();
  } catch (error) {
    console.error(error);
    throw new Error(error);
  }
}

export async function getHouseType() {
  try {
    return prisma.houseType.findMany();
  } catch (error) {
    console.error(error);
    throw new Error(error);
  }
}
