import { PrismaClient, Book } from "@prisma/client";
import { NextApiRequest, NextApiResponse } from "next";

const prisma = new PrismaClient();

const handler = async function (
  _req: NextApiRequest,
  res: NextApiResponse<Book[]>
  
) {
  const books= await prisma.book.findMany();
  res.status(200).json(books);
};

export default handler;
