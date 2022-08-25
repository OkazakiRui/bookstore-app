import { NextApiResponse } from "next";
import {Stripe} from "stripe";
import { stripeProductsList } from "./_utiles";

export default async function handler(
  res: NextApiResponse<Stripe.Response<Stripe.ApiList<Stripe.Product>>>
) {
  const products = await stripeProductsList();
  res.status(200).json(products);
}
