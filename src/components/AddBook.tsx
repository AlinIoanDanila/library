import { useState, FormEvent } from "react";

import Input from "./Input";
import { getFormObject, checkBook } from "../utility/books";
import { BookListProps } from "../utility/types";

const defaultFormState = {
  title: "",
  isbn: "",
  author: "",
  price: "",
};

const AddBook = (props: BookListProps) => {
  const { availableBooks, setAvailableBooks } = props;
  const [form, setForm] = useState(defaultFormState);

  const handleChange = (name: any, value: any) => {
    setForm((form) => ({
      ...form,
      [name]: value,
    }));
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const newBook = getFormObject(event);
    const availableBook = checkBook(availableBooks, newBook);

    if (availableBook) {
      const duplicatedIndex = availableBooks.findIndex(
        (book) => book.author === availableBook.author && book.ISBN === availableBook.ISBN
      );
      let newArr = [...availableBooks];
      newArr[duplicatedIndex] = { ...availableBook, numberOfBooks: availableBook.numberOfBooks + 1 };
      setAvailableBooks(newArr);
    } else {
      setAvailableBooks((books) => [...books, { ...newBook, numberOfBooks: 1 }]);
    }
  };

  return (
    <form
      onSubmit={(e) => handleSubmit(e)}
      className="flex flex-col p-4 gap-3 w-fit h-fit bg-white rounded-md shadow-md"
    >
      <h3>Add book</h3>
      <Input value={form.title} handleValue={handleChange} label="Title" />
      <Input value={form.author} handleValue={handleChange} label="Author" />
      <Input value={form.isbn} handleValue={handleChange} label="ISBN" inputType="number" />
      <Input value={form.price} handleValue={handleChange} label="Price" inputType="number" />
      <button
        className="w-30 mb-2 self-center w-1/2 h-8 border-2 border-slate-600 text-slate-600 font-semibold hover:bg-slate-600 hover:text-white text-lg rounded-sm"
        type="submit"
      >
        Submit
      </button>
    </form>
  );
};

export default AddBook;
