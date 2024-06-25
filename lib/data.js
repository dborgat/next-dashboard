import prisma from './prisma';

export async function getZones() {
  try {
    return prisma.zoneType.findMany({
      include: {
        users: true,
      },
    });
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

export async function getUser(id) {
  try {
    return prisma.user.findUnique({
      where: {
        id: id,
      },
      include: {
        rescataditos: true,
      },
    });
  } catch (error) {
    console.error(error);
    throw new Error(error);
  }
}

export async function getRoles() {
  try {
    return prisma.role.findMany();
  } catch (error) {
    console.error(error);
    throw new Error(error);
  }
}

export async function getRescues() {
  try {
    return prisma.rescue.findMany({
      include: {
        zone: true,
        rescataditos: true,
      },
    });
  } catch (error) {
    console.error(error);
    throw new Error(error);
  }
}

export async function getAnimalTypes() {
  try {
    return prisma.animalType.findMany();
  } catch (error) {
    console.error(error);
    throw new Error(error);
  }
}