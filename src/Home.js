//import { useState } from "react";
//import { useEffect } from "react";
import BlogList from "./BlogList";
import UseFetch from "./useFetch";
//===== useEffect hook is a way to run code in every render

const Home = () => {
  const {data: blogs, isPending, error} = UseFetch("http://localhost:5000/blogs");
 

  //
  //function for deleting
  // const handleDelete = (id) => {
  //   const newBlogs = blogs.filter((blog) => blog.id !== id);
  //   setBlogs(newBlogs);
  // };

  

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
