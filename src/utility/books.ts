import { FormEvent } from "react";
import { BookProps } from "./types";

export const getFormObject = (event: FormEvent<HTMLFormElement>) => {
  const { title, isbn, author, price } = event.target as typeof event.target & {
    title: { value: string };
    isbn: { value: number };
    author: { value: string };
    price: { value: number };
  };

  return {
    title: title.value,
    author: author.value,
    ISBN: isbn.value,
    price: price.value,
    numberOfBooks: 0,
  };
};

export const checkBook = (array: BookProps[], newBook: BookProps) => {
  const checkBookInArray = array.find(
    (book) => book.author === newBook.author && book.ISBN === newBook.ISBN && book.title === newBook.title
  );
  if (checkBookInArray === undefined) return false;
  return checkBookInArray;
};

export const calculateLateReturn = (returnDate: number, bookPrice: number) => {
  if (Date.now() < returnDate) {
    return -1;
  }
  const days = Math.ceil((Date.now() - returnDate) / (24 * 60 * 60 * 1000)) - 14;

  const price = (bookPrice / 100) * days;
  return price;
};
