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
    <div className="mt-20">
      <div className="grid grid-cols-3 gap-10">
        {books.map((book, index) => (
          <Book key={index} book={book} />
        ))}
      </div>
      <h2>Hello</h2>
    </div>
  );
};

export default Books;
