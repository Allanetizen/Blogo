import { useState } from "react";
import BlogList from "./BlogList";

const Home = () => {
    
    const[ blogs]= useState([
        {title: 'Healthy Eating', body:'Lorem ipsum....', author:'Tony Montana', id:1},
        {title: 'Tech Bits', body:'Lorem ipsum....', author:'Timmy Turner', id:2},
        {title: 'Farmers Choice', body:'Lorem ipsum....', author:'Tony Montana', id:3}

    ]);
   
    
    return (  
        <div className="home">
            {/*Bloggy  passes blog as a prop*/}
            <BlogList blogs={blogs} title="All blogs!"/>
            <BlogList blogs={blogs.filter((blog)=> blog.author ==='Tony Montana')} title="Tony's blogs!"/>
           
             
          
        </div>

         
    );
}
 
export default Home;