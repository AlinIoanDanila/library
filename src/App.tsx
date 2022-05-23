import { useState } from "react";

import { BookProps } from "./utility/types";
import AddBook from "./components/AddBook";
import ViewBooks from "./components/ViewBooks";
import ReturnBook from "./components/ReturnBook";

const initialState = [
  {
    title: "Title1",
    author: "Author1",
    ISBN: 123,
    price: 10,
    numberOfBooks: 1,
  },
  {
    title: "Title2",
    author: "Author2",
    ISBN: 145,
    price: 15,
    numberOfBooks: 5,
  },
  {
    title: "Title3",
    author: "Author3",
    ISBN: 523,
    price: 20,
    numberOfBooks: 1,
  },
];

const TestData = [
  {
    title: "Title1",
    author: "Author1",
    ISBN: 123,
    price: 100,
    numberOfBooks: 1,
    returnDate: 1651734715575,
  },
];

const App = () => {
  const [availableBooks, setAvailableBooks] = useState<BookProps[]>(initialState);
  const [borrowedBooks, setBorrowedBooks] = useState<BookProps[]>(TestData);
  const [view, setView] = useState<string>("add");

  return (
    <div className="w-screen h-screen flex bg-red-50">
      <article className="w-1/4 h-full bg-white">
        <div className="flex justify-center mb-4">
          <h1 className="m-3 font-semibold text-3xl">Library</h1>
        </div>
        <section className="flex flex-col gap-2 items-start px-3">
          <button
            onClick={() => setView("add")}
            className="my-1 py-1 px-3 w-full text-left text-white rounded-md bg-gray-700 border-2 border-gray-700 hover:bg-white hover:text-gray-700"
          >
            Add book
          </button>
          <button
            onClick={() => setView("view")}
            className="my-1 py-1 px-3 w-full text-left text-white rounded-md bg-gray-700 border-2 border-gray-700 hover:bg-white hover:text-gray-700"
          >
            View and borrow available books
          </button>
          <button
            onClick={() => setView("return")}
            className="my-1 py-1 px-3 w-full text-left text-white rounded-md bg-gray-700 border-2 border-gray-700 hover:bg-white hover:text-gray-700"
          >
            View and return books
          </button>
        </section>
      </article>

      <section className="flex w-full items-center justify-center">
        {view === "add" ? <AddBook availableBooks={availableBooks} setAvailableBooks={setAvailableBooks} /> : null}
        {view === "view" ? (
          <ViewBooks
            availableBooks={availableBooks}
            setAvailableBooks={setAvailableBooks}
            borrowedBooks={borrowedBooks}
            setBorrowedBooks={setBorrowedBooks}
          />
        ) : null}
        {view === "return" ? (
          <ReturnBook
            availableBooks={availableBooks}
            setAvailableBooks={setAvailableBooks}
            borrowedBooks={borrowedBooks}
            setBorrowedBooks={setBorrowedBooks}
          />
        ) : null}
      </section>
    </div>
  );
};

export default App;
