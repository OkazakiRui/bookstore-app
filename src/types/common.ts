import { Book, Author, User } from "@prisma/client";
export type Book = Book;
export type Author = Author;
export type User = User;

export type BookWithAuthor = Book & { author: Author };
