import {PrismaClient, Author} from "@prisma/client";
import { NextApiRequest, NextApiResponse} from "next";

const prisma = new PrismaClient();

const handler = async function(
  _req: NextApiRequest,
  res: NextApiResponse<Author[]>
){
 const authors = await prisma.author.findMany()
 res.status(200).json(authors)
}

export default handler
