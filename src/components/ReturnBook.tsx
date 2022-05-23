import { BorrowReturnProps, BookProps } from "../utility/types";
import { calculateLateReturn } from "../utility/books";

const ReturnBook = ({ availableBooks, borrowedBooks, setAvailableBooks, setBorrowedBooks }: BorrowReturnProps) => {
  const handleReturn = (currentBook: BookProps) => {
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

  const getAmount = (item: BookProps) => {
    const value = calculateLateReturn(item.returnDate!, item.price);
    return value;
  };

  return (
    <table className="ml-10">
      <thead>
        <tr>
          <th>Title</th>
          <th>Author</th>
          <th>ISBN</th>
          <th>Amount</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        {borrowedBooks.map((book) => {
          return (
            <tr key={book.ISBN}>
              <td>{book.title}</td>
              <td>{book.author}</td>
              <td>{book.ISBN}</td>
              <td>{getAmount(book) === -1 ? "0" : getAmount(book)}</td>
              <button
                disabled={getAmount(book) === -1 ? true : false}
                onClick={() => getAmount(book)}
                className="my-2 mx-4 rounded px-2 text-white border-2 border-green-500 bg-green-500 hover:text-slate-500 hover:bg-white"
              >
                Return
              </button>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default ReturnBook;
