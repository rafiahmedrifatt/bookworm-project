import React, { useEffect, useState } from "react";
import Book from "../Book/Book";

const Books = () => {
  const [books, setBooks] = useState([]);
  useEffect(() => {
    fetch("booksData.json")
      .then((res) => res.json())
      .then((data) => setBooks(data));
  });
  return (
    <div>
      <h1>Hello Ami books</h1>
      <div>
        {books.map((book) => (
          <Book book={book} />
        ))}
      </div>
    </div>
  );
};

export default Books;
