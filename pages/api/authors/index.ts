import { NextApiRequest, NextApiResponse } from "next";
import { prisma } from "../../../prisma/apis/prismaClient";
import { Author } from "../../../src/types/common";

const handler = async function (
  _req: NextApiRequest,
  res: NextApiResponse<Author[]>
) {
  const authors = await prisma.author.findMany();
  res.status(200).json(authors);
};

export default handler;
