import React, { useEffect, useState } from "react";
import Book from "../Book/Book";

const Books = () => {
  const [books, setBooks] = useState([]);
  useEffect(() => {
    fetch("booksData.json")
      .then((res) => res.json())
      .then((data) => setBooks(data));
  }, []);
  return (
    <div>
      <h1>Hello Ami bookssss {books.length}</h1>
      <div>
        {books.map((book, index) => (
          <Book key={index} book={book} />
        ))}
      </div>
      <h2>Hello</h2>
    </div>
  );
};

export default Books;
