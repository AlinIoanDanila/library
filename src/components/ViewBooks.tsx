import { BorrowReturnProps, BookProps } from "../utility/types";

const ViewBooks = ({ availableBooks, setAvailableBooks, setBorrowedBooks }: BorrowReturnProps) => {
  const handleBurrow = (currentBook: BookProps) => {
    const borrowedBook: BookProps = {
      ...currentBook,
      returnDate: Date.now() + 14 * 24 * 60 * 60 * 1000,
      borrowed: true,
    };
    setBorrowedBooks((oldArray) => [...oldArray, borrowedBook]);

    const elem = availableBooks.findIndex((elem) => elem.ISBN === currentBook.ISBN);
    const updatedArray = [...availableBooks];
    updatedArray[elem] = { ...currentBook, numberOfBooks: currentBook.numberOfBooks - 1 };
    setAvailableBooks(updatedArray);
  };

  return (
    <table className="ml-10">
      <thead>
        <tr>
          <th>Title</th>
          <th>Author</th>
          <th>ISBN</th>
          <th>Price per book</th>
          <th>Nr of books</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        {availableBooks.map((book) => {
          return (
            <tr key={book.ISBN}>
              <td>{book.title}</td>
              <td>{book.author}</td>
              <td>{book.ISBN}</td>
              <td>{book.price}</td>
              <td>{book.numberOfBooks}</td>
              <button
                disabled={book.numberOfBooks <= 0 ? true : false}
                onClick={() => handleBurrow(book)}
                className="my-2 mx-4 rounded px-2 text-white border-2 disabled:bg-red-600 disabled:border-red-600 border-slate-500 bg-slate-500 hover:text-slate-500 hover:bg-white"
              >
                Borrow
              </button>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default ViewBooks;
