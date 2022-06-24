import { useState } from "react";
import axios from "axios";
import { Post } from "../../components/Post/Post";
import { FullPost } from "../../components/FullPost/FullPost";
import { NewPost } from "../../components/NewPost/NewPost";
import { useEffect } from "react";
import { Loading } from "../../components/Loading/Loading";

export const Blog = () => {
  let dataArray: { id: number; author: string; title: string }[] = [];
  const getData = async () => {
    try {
      const config = {
        method: "GET",
        url: "https://jsonplaceholder.typicode.com/posts",
      };
      let { data } = await axios(config);
      // get only 11 data from the server
      data = data.slice(0, 11);
      return data.map((singularPostData: any) => ({
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
  const [getSelectedID, setSelectedID] = useState(0);
  const [getLoading, setLoading] = useState(true);

  const setSateFromServerData = async () => {
    const data = await getData();
    setPost(data);
    setTimeout(() => setLoading(false), 1000);
  };

  useEffect(() => {
    (async () => await setSateFromServerData())();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  dataArray = getShowMore ? getPost : getPost.slice(0, 4);

  return (
    <div>
      <Loading display={getLoading} />
      <section className="Posts">
        {dataArray.map((singularData) => (
          <Post
            key={singularData.id}
            title={singularData.title}
            author={singularData.author}
            selectID={setSelectedID}
            id={singularData.id}
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
        <FullPost selectedID={getSelectedID} changeSelectedID={setSelectedID} />
      </section>
      <section>
        <NewPost />
      </section>
    </div>
  );
};