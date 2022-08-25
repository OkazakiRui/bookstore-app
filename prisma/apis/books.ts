import { prisma } from "./prismaClient";

export const prismaBookFindMany = async () => {
  return await prisma.book.findMany({
    include: {
      author: true,
    },
  });
};
