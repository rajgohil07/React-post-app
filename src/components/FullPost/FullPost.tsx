import axios, { AxiosRequestConfig, AxiosResponse } from "axios";
import { useEffect, useState } from "react";
import { Loading } from "../Loading/Loading";

export const FullPost = ({
  selectedID,
  changeSelectedID,
}: {
  selectedID: number;
  changeSelectedID: Function;
}) => {
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

  const deletePostByID = async () => {
    try {
      setLoading(true);
      const config: AxiosRequestConfig = {
        method: "DELETE",
        url: `https://jsonplaceholder.typicode.com/posts/${selectedID}`,
      };
      const response: AxiosResponse = await axios(config);
      changeSelectedID(0);
      setLoading(false);
      return response;
    } catch (e) {
      throw e;
    }
  };

  useEffect(() => {
    setLoading(true);
    if (selectedID) {
      (async () => await fetchPostByIDAnsChangeState(selectedID))();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
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
            <button onClick={deletePostByID} className="Delete">
              Delete
            </button>
          </div>
        </div>
      </div>
    );
  }
  return post;
};
