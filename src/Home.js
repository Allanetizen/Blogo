import { useState } from "react";

const Home = () => {
    
    const[ blogs, setBlogs]= useState([
        {title: 'Healthy Eating', body:'Lorem ipsum....', author:'Allanetizen', id:1},
        {title: 'Tech Bits', body:'Lorem ipsum....', author:'Allanetizen', id:2},
        {title: 'Farmers Choice', body:'Lorem ipsum....', author:'Allanetizen', id:3}

    ]);
   
    
    return (  
        <div className="home">
            {/*/map method for javascript circles through an array*/}
             
           {blogs.map((blog)=> (

<div className="blog-preview" key={blog.id}>
    <h2>{blog.title}</h2>
    <p>Written by: {blog.author}</p>
    

</div>

            ))}
        </div>

         
    );
}
 
export default Home;