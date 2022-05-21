import { BookProps } from "../utility/types";

const Book = (props: BookProps) => {
  return (
    <section className="flex gap-x-2 justify-between w-full h-10 bg-orange-500 text-white">
      <p>{props.title}</p>
      <p>{props.author}</p>
      <p>{props.price}</p>
      <p>{props.ISBN}</p>
      <p>{props.numberOfBooks}</p>
    </section>
  );
};

export default Book;
