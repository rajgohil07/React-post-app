import axios, { AxiosRequestConfig } from "axios";
import { useState } from "react";
import { Link } from "react-router-dom";
import { Loading } from "../../components/Loading/Loading";

export const NewPost = () => {
  const [getTitle, setTitle] = useState("");
  const [getContent, setContent] = useState("");
  const [getAuthor, setAuthor] = useState("Raj");
  const [getLoading, setLoading] = useState(false);
  const [isPostCreated, setIsPostCreated] = useState(false);

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
      setTitle("");
      setContent("");
      setIsPostCreated(true);
      setLoading(false);
      return response;
    } catch (e) {
      throw e;
    }
  };

  return (
    <section>
      <Loading display={getLoading} />
      <div className="NewPost">
        {isPostCreated ? (
          <div className="AdjustTextPadding">
            <h3>
              Congratulations! Please visit the <Link to="/">homepage</Link> to
              see your recently created post. If you'd rather not, please &nbsp;
              <span onClick={() => setIsPostCreated(false)}>click here</span>
              &nbsp; to add another post.
            </h3>
          </div>
        ) : (
          <>
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
              onClick={async () => await createPost()}
            >
              Add Post
            </button>
          </>
        )}
      </div>
    </section>
  );
};
