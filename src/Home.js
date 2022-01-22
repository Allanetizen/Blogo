import { useState } from "react";
import BlogList from "./BlogList";

const Home = () => {
    
    const[ blogs]= useState([
        {title: 'Healthy Eating', body:'Lorem ipsum....', author:'Allanetizen', id:1},
        {title: 'Tech Bits', body:'Lorem ipsum....', author:'Allanetizen', id:2},
        {title: 'Farmers Choice', body:'Lorem ipsum....', author:'Allanetizen', id:3}

    ]);
   
    
    return (  
        <div className="home">
            {/*Bloggy  passes blog as a prop*/}
            <BlogList blogs={blogs} title="All blogs!"/>
           
             
          
        </div>

         
    );
}
 
export default Home;