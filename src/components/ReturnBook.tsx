import { BorrowReturnProps, BookProps } from "../utility/types";
import { calculateLateReturn } from "../utility/books";

const ReturnBook = ({ availableBooks, borrowedBooks, setAvailableBooks, setBorrowedBooks }: BorrowReturnProps) => {
  const handleReturn = (currentBook: BookProps) => {
    const itemIndex = availableBooks.findIndex((item) => item.ISBN === currentBook.ISBN);
    console.log(itemIndex);

    const updatedAvailableBooks = [...availableBooks];
    updatedAvailableBooks[itemIndex] = {
      ...currentBook,
      numberOfBooks: updatedAvailableBooks[itemIndex].numberOfBooks + 1,
      returnDate: undefined,
    };
    setAvailableBooks(updatedAvailableBooks);

    let updatedBorrowBooks = [...borrowedBooks];
    updatedBorrowBooks = [...borrowedBooks].filter((book, index) => index !== itemIndex);
    setBorrowedBooks(updatedBorrowBooks);
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
        {borrowedBooks.map((book, index) => {
          return (
            <tr key={`${book.ISBN}-${index}`}>
              <td>{book.title}</td>
              <td>{book.author}</td>
              <td>{book.ISBN}</td>
              <td>{getAmount(book) === -1 ? "0" : getAmount(book)}</td>
              <button
                onClick={() => handleReturn(book)}
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
