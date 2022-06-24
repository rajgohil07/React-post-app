import { useState } from "react";
import { FullPost } from "../FullPost/FullPost";
import { NewPost } from "../NewPost/NewPost";
import { Posts } from "../Posts/Posts";

export const Blog = () => {
  // states
  const [getSelectedID, setSelectedID] = useState(0);
  return (
    <div className="Blog">
      <header>
        <nav>
          <ul>
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/create-post">Create Post</a>
            </li>
          </ul>
        </nav>
      </header>
      <section>
        <Posts setSelectedID={setSelectedID} />
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
