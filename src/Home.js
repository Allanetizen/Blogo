import { useState } from "react";
import { useEffect } from "react";
import BlogList from "./BlogList";
//===== useEffect hook is a way to run code in every render

const Home = () => {
  const [blogs, setBlogs] = useState(null);
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState(null);

  // //function for deleting
  // const handleDelete = (id) => {
  //   const newBlogs = blogs.filter((blog) => blog.id !== id);
  //   setBlogs(newBlogs);
  // };

  //not stored in a constant
  //fires on every render,
  //adding a dependency [], fires it once
  useEffect(() => {
    setTimeout(() => {
      //fires the function once the promise has been
      fetch("http://localhost:5000/blogs")
        .then((res) => {
          if (!res.ok) {
            throw Error('Could not FETCH the data for that resource');
          }
          return res.json();
        })
        .then((data) => {
          console.log(data);
          setBlogs(data);
          setIsPending(false);
          setError(null);
        })
        .catch(err => {
          setIsPending(false);
          setError(err.message);
        })
    }, 1000);
  }, []);

  return (
    <div className="home">
      {error && <div>{error}</div>}
      {/*Blogs  passes blog as a prop*/}
      {/* //conditional templating in react, && tests the first part 
      if it is false it doesnot bother with the next one */}
      {isPending && <div>Loading...</div>}

      {blogs && <BlogList blogs={blogs} title="All Blogs!" />}
    </div>
  );
};

export default Home;
