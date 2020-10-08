import React, { useContext } from "react";
import { BookContext } from "../context/BookContext";
import { BookDetails } from "./BookDetails";

export const BookList: React.FC = () => {
  const { books } = useContext(BookContext);
  return books?.length ? (
    <div className="book-list">
      <ul>
        {books.map((book) => {
          return <BookDetails book={book} key={book.id} />;
        })}
      </ul>
    </div>
  ) : (
    <div className="empty">You have no books to read. Loads of free time.</div>
  );
};
