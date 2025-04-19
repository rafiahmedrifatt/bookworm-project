import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { getStoredBook } from "../../utility/addToLS";
import Books from "../Books/Books";
import Book from "../Book/Book";

const ReadList = () => {
  const [readList, setReadList] = useState([]);

  const data = useLoaderData();

  useEffect(() => {
    const storedBookData = getStoredBook();
    const myReadList = data.filter((book) =>
      storedBookData.includes(book.bookId)
    );
    setReadList(myReadList);
  }, []);

  return (
    <div>
      <div className="dropdown">
        <div tabIndex={0} role="button" className="btn m-1">
          Click
        </div>
        <ul
          tabIndex={0}
          className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm"
        >
          <li>
            <a>Item 1</a>
          </li>
          <li>
            <a>Item 2</a>
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
