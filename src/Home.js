import { useState } from "react";
import { useEffect } from "react";
import BlogList from "./BlogList";
//===== useEffect hook is a way to run code in every render

const Home = () => {
  const [blogs, setBlogs] = useState([
    {
      title: "Healthy Eating",
      body: "Lorem ipsum....",
      author: "Tony Montana",
      id: 1,
    },
    {
      title: "Tech Bits",
      body: "Lorem ipsum....",
      author: "Timmy Turner",
      id: 2,
    },
    {
      title: "Farmers Choice",
      body: "Lorem ipsum....",
      author: "Tony Montana",
      id: 3,
    },
  ]);
  const [name, setName]=useState('Mario');
  //function for deleting
  const handleDelete = (id) => {
    const newBlogs = blogs.filter((blog) => blog.id !== id);
    setBlogs(newBlogs);
  };

  //not stored in a constant
  //fires on every render, 
  //adding a dependency [], fires it once
  useEffect(() => {
    console.log("use effect run");
    console.log(name);
  },[name]);
  

  return (
    <div className="home">
      {/*Blogs  passes blog as a prop*/}

      <BlogList blogs={blogs} title="All Blogs!" handleDelete={handleDelete} />
      <button onClick={()=> setName('Luigi')}>Change Name</button>
      <p>{ name }</p>

    </div>
  );
};

export default Home;
