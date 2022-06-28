import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Loading } from "../../components/Loading/Loading";
import { Post } from "../../components/Post/Post";

export const Posts = () => {
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

  const setSateFromServerData = async () => {
    const data = await getData();
    setPost(data);
    setTimeout(() => setLoading(false), 500);
  };

  // states
  const [getShowMore, setShowMore] = useState(false);
  const [getPost, setPost] = useState([]);
  const [getLoading, setLoading] = useState(true);

  useEffect(() => {
    (async () => await setSateFromServerData())();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  dataArray = getShowMore ? getPost : getPost.slice(0, 4);
  return (
    <section>
      <Loading display={getLoading} />
      <section className="Posts">
        {dataArray.map((singularData) => (
          <Link key={singularData.id} to={`/${singularData.id}`}>
            <Post
              title={singularData.title}
              author={singularData.author}
              id={singularData.id}
            />
          </Link>
        ))}
        <br />
      </section>{" "}
      <section className="showMore">
        <p onClick={() => setShowMore(!getShowMore)}>
          {getShowMore ? "show less..." : "show more..."}
        </p>
      </section>
    </section>
  );
};
