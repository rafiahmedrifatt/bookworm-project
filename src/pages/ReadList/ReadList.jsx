import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { getStoredBook } from "../../utility/addToLS";
import Books from "../Books/Books";
import Book from "../Book/Book";

const ReadList = () => {
  const [readList, setReadList] = useState([]);
  const [sort, setSort] = useState("");

  const data = useLoaderData();

  useEffect(() => {
    const storedBookData = getStoredBook();
    const myReadList = data.filter((book) =>
      storedBookData.includes(book.bookId)
    );
    setReadList(myReadList);
  }, []);

  const handleSort = (type) => {
    setSort(type);
    if (type === "pages") {
      const sortByPages = [...readList].sort(
        (a, b) => a.totalPages - b.totalPages
      );
      setReadList(sortByPages);
      console.log(readList);
    } else if (sort === "ratings") {
      const sortByRatings = [...readList].sort((a, b) => a.rating - b.rating);
      setReadList(sortByRatings);
    }
  };

  return (
    <div>
      <div className="dropdown">
        <div tabIndex={0} role="button" className="btn m-1">
          {sort ? sort : "Sort By"}
        </div>
        <ul
          tabIndex={0}
          className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm"
        >
          <li>
            <a onClick={() => handleSort("pages")}>Pages</a>
          </li>
          <li>
            <a onClick={() => handleSort("ratings")}>Ratings</a>
          </li>
        </ul>
      </div>

      <Tabs>
        <TabList>
          <Tab>books I read</Tab>
          <Tab>My WishList</Tab>
        </TabList>

        <TabPanel>
          <h2>Any content {readList.length}</h2>
        </TabPanel>
        <TabPanel>
          <div className="grid grid-cols-3 gap-10 mt-10">
            {readList.map((b, index) => (
              <Book key={index} singleBook={b} />
            ))}
          </div>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default ReadList;
