export const Post = ({
  title,
  author,
  selectID,
  id,
}: {
  title: string;
  author: string;
  selectID: Function;
  id: number;
}) => (
  <div onClick={() => selectID(id)}>
    <article className="Post">
      <h1>{title}</h1>
      <div className="Info">
        <div className="Author">{author}</div>
      </div>
    </article>
  </div>
);
