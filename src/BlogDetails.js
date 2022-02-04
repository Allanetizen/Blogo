import { useParams, useHistory } from "react-router-dom";
import UseFetch from "./useFetch";

const BlogDetails = () => {
  const { id } = useParams();
  const {
    data: blog,
    error,
    isPending,
  } = UseFetch("http://localhost:5000/blogs/" + id);
  const history = useHistory();

  const handleClick = () => {
    fetch("http://localhost:5000/blogs/" + blog.id, {
      method: "DELETE",
    }).then(() => {
      history.push("/");
    });
    console.log("deleted successfully...");
  };
  return (
    <div className="blog-details">
      {isPending && <div>Loading...</div>}
      {error && <div>{error}</div>}
      {blog && (
        <article>
          <h2>{blog.title}</h2>
          <div>{blog.body}</div>
          <p>
            Written by: <strong>{blog.author}</strong>
          </p>
          <button onClick={handleClick}>Delete</button>
        </article>
      )}
    </div>
  );
};

export default BlogDetails;
