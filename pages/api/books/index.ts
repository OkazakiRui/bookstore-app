import { NextApiRequest, NextApiResponse } from "next";
import { prismaBookFindMany } from "../../../prisma/apis/books";
import { Book } from "../../../src/types/common";

const handler = async function (
  _req: NextApiRequest,
  res: NextApiResponse<Book[]>
) {
  const books = await prismaBookFindMany();
  res.status(200).json(books);
};

export default handler;
