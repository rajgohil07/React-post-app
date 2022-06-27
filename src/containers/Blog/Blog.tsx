import { useState } from "react";
import { Routes, Route } from "react-router";
import { Navbar } from "../../components/Navbar/Navbar";
import { FullPost } from "../FullPost/FullPost";
import { NewPost } from "../NewPost/NewPost";
import { Posts } from "../Posts/Posts";

export const Blog = () => {
  // states
  const [getSelectedID, setSelectedID] = useState(0);
  return (
    <div className="Blog">
      <Navbar />
      <Routes>
        <Route path="/" element={<Posts setSelectedID={setSelectedID} />} />
        <Route path="create-post" element={<NewPost />} />
      </Routes>
      {/* <FullPost selectedID={getSelectedID} changeSelectedID={setSelectedID} /> */}
    </div>
  );
};
