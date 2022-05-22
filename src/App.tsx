import { useState } from "react";
import AddBook from "./components/AddBook";
import ViewBooks from "./components/ViewBooks";

import { BookProps } from "./utility/types";

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

const App = () => {
  const [availableBooks, setAvailableBooks] = useState<BookProps[]>(initialState);
  const [borrowedBooks, setBorrowedBooks] = useState<BookProps[]>([]);

  console.log(borrowedBooks);

  return (
    <div className="w-screen h-screen flex items-center  bg-red-50">
      <AddBook availableBooks={availableBooks} setAvailableBooks={setAvailableBooks} />
      <ViewBooks
        availableBooks={availableBooks}
        setAvailableBooks={setAvailableBooks}
        borrowedBooks={borrowedBooks}
        setBorrowedBooks={setBorrowedBooks}
      />
    </div>
  );
};

export default App;
