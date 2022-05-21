import { FormEvent, useState } from "react";

import Input from "./components/Input";
import Book from "./components/Book";
import { checkBook, getFormObject } from "./utility/books";

import { BookProp } from "./utility/types";

const App = () => {
  const [data, setData] = useState({
    title: "",
    isbn: "",
    author: "",
    price: "",
  });
  const [availableBooks, setAvailableBooks] = useState<BookProp[]>([]);

  const handleChange = (name: any, value: any) => {
    setData((data) => ({
      ...data,
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
    } else setAvailableBooks((books) => [...books, { ...newBook, numberOfBooks: 1 }]);
  };

  console.log(availableBooks);

  return (
    <div className="w-screen h-screen flex items-center justify-center bg-red-50">
      <form
        onSubmit={(e) => handleSubmit(e)}
        className="flex flex-col p-4 gap-3 w-fit h-fit bg-white rounded-md shadow-md"
      >
        <h3>Add book</h3>
        <Input value={data.title} handleValue={handleChange} label="Title" />
        <Input value={data.author} handleValue={handleChange} label="Author" />
        <Input value={data.isbn} handleValue={handleChange} label="ISBN" inputType="number" />
        <Input value={data.price} handleValue={handleChange} label="Price" inputType="number" />
        <button
          className="w-30 mb-2 self-center w-1/2 h-8 border-2 border-slate-600 text-slate-600 font-semibold hover:bg-slate-600 hover:text-white text-lg rounded-sm"
          type="submit"
        >
          Submit
        </button>
      </form>

      <div>
        <>
          <h3>Books</h3>
          {availableBooks
            ? availableBooks.map((book) => (
                <Book
                  title={book.title}
                  author={book.author}
                  ISBN={book.ISBN}
                  price={book.price}
                  numberOfBooks={book.numberOfBooks}
                />
              ))
            : null}
        </>
      </div>
    </div>
  );
};

export default App;
