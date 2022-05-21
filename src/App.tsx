import { useState } from "react";
import AddBook from "./components/AddBook";
import ViewBooks from "./components/ViewBooks";

import { BookProps } from "./utility/types";

const initialState = [
  {
    title: "Title",
    author: "Title",
    ISBN: 0,
    price: 0,
    numberOfBooks: 1,
  },
];

const App = () => {
  const [availableBooks, setAvailableBooks] = useState<BookProps[]>(initialState);

  return (
    <div className="w-screen h-screen flex items-center  bg-red-50">
      <AddBook availableBooks={availableBooks} setAvailableBooks={setAvailableBooks} />
      <ViewBooks availableBooks={availableBooks} />
    </div>
  );
};

export default App;
