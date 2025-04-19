import React from "react";
import { useLoaderData, useParams } from "react-router";
import { addToStoredLocal } from "../../utility/addToLS";

const BookDetails = () => {
  const data = useLoaderData();
  const { id } = useParams();
  console.log(data, id);
  const singleData = data.find((book) => book.bookId === parseInt(id));
  const { image, review } = singleData || {};

  const handleMarkAsRead = (id) => {
    addToStoredLocal(id);
  };

  return (
    <div className="card lg:card-side bg-base-100 shadow-sm">
      <div className="w-1/2">
        <img src={image} alt="" className="h-62 mx-auto" />
      </div>
      <div className="card-body w-1/2">
        <p className="card-title">
          <small>{review}</small>
        </p>
        <div className="card-actions justify-end">
          <button
            className="btn btn-primary"
            onClick={() => handleMarkAsRead(parseInt(id))}
          >
            Add to wishlist
          </button>
          <button className="btn btn-primary">Mark as Read</button>
        </div>
      </div>
    </div>
  );
};

export default BookDetails;
