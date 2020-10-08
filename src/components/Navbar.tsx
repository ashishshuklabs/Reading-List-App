import React, { useContext } from "react";
import { BookContext } from "../context/BookContext";

export const Navbar = () => {
  const { books } = useContext(BookContext);
  return (
    <div className="navbar">
      <h1>Awesome Book Collection</h1>
      <p>You have {books?.length} books to get through, good luck with that.</p>
    </div>
  );
};
