import axios, { AxiosRequestConfig, AxiosResponse } from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import { Loading } from "../../components/Loading/Loading";

export const FullPost = () => {
  const [getTitle, seTitle] = useState("");
  const [getContent, seContent] = useState("");
  const [getLoading, setLoading] = useState(true);
  const [getIsPostDeleted, setIsPostDeleted] = useState(false);
  const [isDeleteOperationCompleted, setIsDeleteOperationCompleted] =
    useState(true);

  const { postID: selectedID } = useParams();

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
        url: `https://jsonplaceholder.typicode.com/posts/${Number(selectedID)}`,
      };
      const response: AxiosResponse = await axios(config);
      setIsPostDeleted(true);
      setIsDeleteOperationCompleted(false);
      setLoading(false);
      return response;
    } catch (e) {
      throw e;
    }
  };

  useEffect(() => {
    setLoading(true);
    if (selectedID) {
      (async () => await fetchPostByIDAnsChangeState(Number(selectedID)))();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedID]);

  let post = (
    <p style={{ textAlign: "center" }}>
      {getIsPostDeleted && "Your post has been deleted now! "} Please navigate
      to <Link to="/">homepage</Link> to show remaining posts.
    </p>
  );
  if (isDeleteOperationCompleted) {
    post = (
      <section>
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
      </section>
    );
  }
  return post;
};
