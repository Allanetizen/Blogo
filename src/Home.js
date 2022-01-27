import { useState } from "react";
import { useEffect } from "react";
import BlogList from "./BlogList";
//===== useEffect hook is a way to run code in every render

const Home = () => {
  const [blogs, setBlogs] = useState(null);

  
  // //function for deleting
  // const handleDelete = (id) => {
  //   const newBlogs = blogs.filter((blog) => blog.id !== id);
  //   setBlogs(newBlogs);
  // };

  //not stored in a constant
  //fires on every render, 
  //adding a dependency [], fires it once
  useEffect(() => {
    //fires the function once the promise has been 
    fetch('http://localhost:8000/blogs')
    .then(res=>{
      return res.json();
    })
    .then(data=>{
      console.log(data);
      setBlogs(data);
    })
   
  },[]);
   

  return (
    <div className="home">
      {/*Blogs  passes blog as a prop*/}
      {/* //conditional templating in react, && tests the first part 
      if it is false it doesnot bother with the next one */}
      

     {blogs && <BlogList blogs={blogs} title="All Blogs!" />}
      
     
    </div>
  );
}; 

export default Home;
