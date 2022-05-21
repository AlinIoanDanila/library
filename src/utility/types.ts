import { Dispatch, SetStateAction } from "react";

export type BookProps = {
  title: string;
  author: string;
  ISBN: number;
  price: number;
  burrowed?: boolean;
  numberOfBooks: number;
};

export type AvailableBooksProps = {
  availableBooks: BookProps[];
};

export type AddBookProps = {
  availableBooks: BookProps[];
  setAvailableBooks: Dispatch<SetStateAction<BookProps[]>>;
};

export type InputProps = {
  value: string | number;
  label: string;
  inputType?: string;
  handleValue: any;
};
