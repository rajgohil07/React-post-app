import axios, { AxiosRequestConfig } from "axios";
import { useEffect, useState } from "react";
import { Loading } from "../Loading/Loading";

export const FullPost = ({ selectedID }: { selectedID: number }) => {
  const [getTitle, seTitle] = useState("");
  const [getContent, seContent] = useState("");
  const [getLoading, setLoading] = useState(true);

  const fetchPostByIDAnsChangeState = async (ID: number) => {
    try {
      const config: AxiosRequestConfig = {
        method: "GET",
        url: `https://jsonplaceholder.typicode.com/posts/${ID}`,
      };
      const { data } = await axios(config);
      const { title, body } = data;
      // set state
      seTitle(title);
      seContent(body);
      setLoading(false);
      return data;
    } catch (e) {
      throw e;
    }
  };

  useEffect(() => {
    setLoading(true);
    if (selectedID) {
      (async () => await fetchPostByIDAnsChangeState(selectedID))();
    }
  }, [selectedID]);

  let post = <p style={{ textAlign: "center" }}>Please select a Post!</p>;
  if (selectedID) {
    post = (
      <div>
        <Loading display={getLoading} />
        <div className="FullPost">
          <h1>{getTitle}</h1>
          <p>{getContent}</p>
          <div className="Edit">
            <button className="Delete">Delete</button>
          </div>
        </div>
      </div>
    );
  }
  return post;
};