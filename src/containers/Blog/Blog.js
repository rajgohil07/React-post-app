import React, { useState } from "react";
import { Post } from "../../components/Post/Post";
import { FullPost } from "../../components/FullPost/FullPost";
import { NewPost } from "../../components/NewPost/NewPost";
import axios from "axios";
import { useEffect } from "react";
import "./Blog.css";

export const Blog = () => {
  let dataArray = [];
  const getData = async () => {
    try {
      let data = [];
      const config = {
        method: "GET",
        url: "https://jsonplaceholder.typicode.com/posts",
      };
      ({ data } = await axios(config));
      // get only 11 data from the server
      data = data.slice(0, 11);
      return data.map((singularPostData) => ({
        ...singularPostData,
        author: "Raj gohil",
      }));
    } catch (e) {
      throw e;
    }
  };

  // states
  const [getShowMore, setShowMore] = useState(false);
  const [getPost, setPost] = useState([]);

  const setSateFromServerData = async () => {
    const data = await getData();
    setPost(data);
  };

  useEffect(() => {
    (async () => await setSateFromServerData())();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  dataArray = getShowMore ? getPost : getPost.slice(0, 4);

  return (
    <div>
      <section className="Posts">
        {dataArray.map((singularData) => (
          <Post
            key={singularData.id}
            title={singularData.title}
            author={singularData.author}
          />
        ))}
        <br />
      </section>
      <section className="showMore">
        <p onClick={() => setShowMore(!getShowMore)}>
          {getShowMore ? "show less..." : "show more..."}
        </p>
      </section>
      <section>
        <FullPost />
      </section>
      <section>
        <NewPost />
      </section>
    </div>
  );
};
