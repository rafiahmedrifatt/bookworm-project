import React from "react";
import bookImg from "../../assets/books.jpg";

const Banner = () => {
  return (
    <div className="flex justify-around items-center">
      <div>
        <h1>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illo ad quos
        </h1>
        <button className="btn btn-primary">YOYO</button>
      </div>
      <div>
        <img src={bookImg} className="w-3-12" alt="" srcset="" />
      </div>
    </div>
  );
};

export default Banner;
