import React from "react";
import { Link } from "react-router";

const Book = ({ singleBook }) => {
  const { bookId, category, image, publisher, rating, totalPages, review } =
    singleBook;
  return (
    <Link to={`/bookDetails/${bookId}`}>
      <div className="card bg-base-100 w-96 shadow-sm">
        <figure>
          <img src={image} alt="Shoes" className="h-60" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">
            Card Title
            <div className="badge badge-secondary">{totalPages}</div>
            <div className="badge badge-secondary">{rating}</div>
          </h2>
          <p>
            <small>{review}</small>
          </p>
          <div className="card-actions justify-end">
            <div className="badge badge-outline">{category}</div>
            <div className="badge badge-outline">{publisher}</div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Book;
