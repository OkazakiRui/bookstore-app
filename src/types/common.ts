export type Book = {
  id: number;
  stripe_product_id?: string;
  stripe_proce_id?: string;
  title: string;
  description: string;
  authorId: number;
  price: number;
};

export type Author = {
  id: number;
  name: string;
};

export type User = {
  uid: string;
  stripe_customer_id?: string;
  name: string;
  email: string;
  plan: "free" | "pro";
};
