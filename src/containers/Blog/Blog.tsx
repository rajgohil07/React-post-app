import { useState } from "react";
import { Routes, Route } from "react-router";
import { FullPost } from "../FullPost/FullPost";
import { NewPost } from "../NewPost/NewPost";
import { Posts } from "../Posts/Posts";

export const Blog = () => {
  // states
  const [getSelectedID, setSelectedID] = useState(0);
  return (
    <div className="Blog">
      <header>
        <nav>
          <ul>
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/create-post">Create Post</a>
            </li>
          </ul>
        </nav>
      </header>
      <Routes>
        <Route path="/" element={<Posts setSelectedID={setSelectedID} />} />
        <Route path="create-post" element={<NewPost />} />
      </Routes>
      {/* <FullPost selectedID={getSelectedID} changeSelectedID={setSelectedID} /> */}
    </div>
  );
};
