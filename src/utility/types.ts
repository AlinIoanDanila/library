import { Dispatch, SetStateAction } from "react";

export type BookProps = {
  title: string;
  author: string;
  ISBN: number;
  price: number;
  numberOfBooks: number;
  borrowed?: boolean | null;
  returnDate?: number;
};

export type BorrowReturnProps = {
  availableBooks: BookProps[];
  setAvailableBooks: Dispatch<SetStateAction<BookProps[]>>;
  borrowedBooks: BookProps[];
  setBorrowedBooks: Dispatch<SetStateAction<BookProps[]>>;
};

export type BookListProps = {
  availableBooks: BookProps[];
  setAvailableBooks: Dispatch<SetStateAction<BookProps[]>>;
};

export type InputProps = {
  value: string | number;
  label: string;
  inputType?: string;
  handleValue: any;
};
