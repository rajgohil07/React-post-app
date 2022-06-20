import React, { useState } from "react";
import "./NewPost.css";

export const NewPost = () => {
  const [getTitle, setTitle] = useState("");
  const [getContent, setContent] = useState("");
  const [getAuthor, setAuthor] = useState("max");

  return (
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
        rows="4"
        value={getContent}
        onChange={(event) => setContent(event.target.value)}
      />
      <label>Author</label>
      <select
        value={getAuthor}
        onChange={(event) => setAuthor(event.target.value)}
      >
        <option value="Max">Max</option>
        <option value="Manu">Manu</option>
      </select>
      <button>Add Post</button>
    </div>
  );
};
