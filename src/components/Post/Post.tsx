import React from "react";

export const Post = ({ title, author }: { title: string; author: string }) => (
  <article className="Post">
    <h1>{title}</h1>
    <div className="Info">
      <div className="Author">{author}</div>
    </div>
  </article>
);
