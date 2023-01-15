import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  const priest1 = await prisma.priest.create({
    data: { name: 'Vanderlei Martins da Rosa', email: 'vandomr@hotmail.com', birthday: new Date('1956-12-04T15:00:00.000Z'), phone: '(48) 3642-2121' },
  });

  const priest2 = await prisma.priest.create({
    data: { name: 'Nilo Schilickmann', email: 'p.gravatal@diocesetb.org.br', birthday: new Date('1952-01-02T15:00:00.000Z'), phone: '(48) 3642-2121' },
  });

  const parish = await prisma.parish.create({
    data: {
      name: 'Paróquia Santuário Sagrado Coração de Jesus',
      location: 'Gravatal',
      adminPriestId: priest1.id,
      priests: { connect: [{ id: priest1.id }, { id: priest2.id }] },
    },
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
