import axios, { AxiosRequestConfig } from "axios";
import { useState } from "react";
import { Loading } from "../Loading/Loading";

export const NewPost = () => {
  const [getTitle, setTitle] = useState("");
  const [getContent, setContent] = useState("");
  const [getAuthor, setAuthor] = useState("Raj");
  const [getLoading, setLoading] = useState(false);

  const createPost = async () => {
    try {
      setLoading(true);
      const data = { title: getTitle, body: getContent, userId: 1 };
      const config: AxiosRequestConfig = {
        data,
        method: "POST",
        url: "https://jsonplaceholder.typicode.com/posts",
      };
      const { data: response } = await axios(config);
      setLoading(false);
      return response;
    } catch (e) {
      throw e;
    }
  };

  return (
    <div>
      <Loading display={getLoading} />
      <div className="NewPost">
        <h1>Add a Post</h1>
        <label>Title</label>
        <input
          type="text"
          value={getTitle}
          onChange={(event) => setTitle(event.target.value)}
        />
        <label>Content</label>
        <textarea
          rows={4}
          value={getContent}
          onChange={(event) => setContent(event.target.value)}
        />
        <label>Author</label>
        <select
          value={getAuthor}
          onChange={(event) => setAuthor(event.target.value)}
        >
          <option value="Raj">Raj</option>
          <option value="Manu">Manu</option>
        </select>
        <button
          className="disabledButton"
          disabled={!getContent || !getTitle}
          onClick={createPost}
        >
          Add Post
        </button>
      </div>
    </div>
  );
};
