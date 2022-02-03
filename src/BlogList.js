import { Link } from "react-router-dom";

const BlogList = ({ blogs, title }) => {
  //const blogs = props.blogs;
  //const title =props.title;

  return (
    <div className="blog-list">
      <h2>{title}</h2>
      {/*/map method for javascript circles through an array*/}
      {blogs.map((blog) => (
        <div className="blog-preview" key={blog.id}>
         <Link to ={`/blogs/${blog.id}`}>
         <h2>{blog.title}</h2>
          </Link>
          <p>{blog.body}</p>
          <p>Written by: <strong>{blog.author}</strong></p>
         

          {/* <button onClick={() => handleDelete(blog.id)}>Delete Blog</button> */}
        </div>
      ))}
    </div>
  );
};

export default BlogList;
