import React, { useContext } from "react";
import { BookContext } from "../context/BookContext";
import IBook from "../context/IBook";
interface IProps {
  book: IBook;
}
export const BookDetails: React.FC<IProps> = ({ book }) => {
  const { removeBook } = useContext(BookContext);
  return (
    <div>
      <li onClick={() => removeBook!(book.id)}>
        <div className="title">{book.title}</div>
        <div className="author">{book.author}</div>
      </li>
    </div>
  );
};
