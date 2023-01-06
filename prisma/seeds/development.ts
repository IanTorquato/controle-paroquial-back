import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  const priest1 = await prisma.priest.create({
    data: { name: 'Vanderlei' },
  });

  const priest2 = await prisma.priest.create({
    data: { name: 'Nilo' },
  });

  const parish = await prisma.parish.create({
    data: { name: 'Paróquia Sagrado Coração de Jesus', location: 'Gravatal', adminPriestId: priest1.id },
  });

  const communities = await prisma.community.createMany({
    data: [
      { name: 'Centro', parishId: parish.id },
      { name: 'Lomba', parishId: parish.id },
    ],
  });

  console.log({ priests: [priest1, priest2], parishes: [parish], communities });
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);

    await prisma.$disconnect();

    process.exit(1);
  });
