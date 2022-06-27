import { useState } from "react";
import { Routes, Route } from "react-router";
import { Navbar } from "../../components/Navbar/Navbar";
import { PageNotFound } from "../../components/PageNotFound/PageNotFound";
import { FullPost } from "../FullPost/FullPost";
import { NewPost } from "../NewPost/NewPost";
import { Posts } from "../Posts/Posts";

export const Blog = () => {
  // states
  const [getSelectedID, setSelectedID] = useState(0);
  return (
    <div className="Blog">
      <Routes>
        <Route path="/" element={<Navbar />}>
          <Route index element={<Posts setSelectedID={setSelectedID} />} />
          <Route path="/create-post" element={<NewPost />} />
        </Route>
        <Route path="*" element={<PageNotFound />}></Route>
      </Routes>
      {/* <FullPost selectedID={getSelectedID} changeSelectedID={setSelectedID} /> */}
    </div>
  );
};
