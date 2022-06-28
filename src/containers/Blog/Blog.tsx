import { Routes, Route } from "react-router";
import { Navbar } from "../../components/Navbar/Navbar";
import { PageNotFound } from "../../components/PageNotFound/PageNotFound";
import { FullPost } from "../FullPost/FullPost";
import { NewPost } from "../NewPost/NewPost";
import { Posts } from "../Posts/Posts";

export const Blog = () => (
  <div className="Blog">
    <Routes>
      <Route path="/" element={<Navbar />}>
        <Route index element={<Posts />} />
        <Route path="/create-post" element={<NewPost />} />
        <Route path="/:postID" element={<FullPost />} />
      </Route>
      <Route path="*" element={<PageNotFound />}></Route>
    </Routes>
  </div>
);
