import React, { useState } from "react";
import { Post } from "../../components/Post/Post";
import { FullPost } from "../../components/FullPost/FullPost";
import { NewPost } from "../../components/NewPost/NewPost";
import axios from "axios";
import { useEffect } from "react";
import "./Blog.css";

export const Blog = () => {
  const getData = async () => {
    try {
      const config = {
        method: "GET",
        url: "https://jsonplaceholder.typicode.com/posts",
      };
      const { data } = await axios(config);
      return data;
    } catch (e) {
      throw e;
    }
  };

  const [getPost, setPost] = useState([]);

  const setSateFromServerData = async () => {
    const data = await getData();
    setPost(data);
  };
  useEffect(() => {
    (async () => await setSateFromServerData())();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <div>
      <section className="Posts">
        {getPost.map((singularData) => (
          <Post key={singularData.id} title={singularData.title} />
        ))}
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
