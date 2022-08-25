import { useQuery } from "react-query";
import { BookWithAuthor } from "../../types/common";

export const useBooks = (): { books: BookWithAuthor[]; isLoading: boolean } => {
  const fetchBooks = async () => {
    const response = await fetch("/api/books");
    return await response.json();
  };

  const {
    data: books,
    isLoading,
    error,
  } = useQuery<BookWithAuthor[], Error>("books", fetchBooks);

  if (error) console.error(error);

  return { books: books || [], isLoading };
};
