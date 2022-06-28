export const Post = ({
  title,
  author,
  id,
}: {
  title: string;
  author: string;
  id: number;
}) => (
  <div>
    <article className="Post">
      <h1>{title}</h1>
      <div className="Info">
        <div className="Author">{author}</div>
      </div>
    </article>
  </div>
);
