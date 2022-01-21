import { useState } from "react";

const Home = () => {
    //let  name = 'Allan';
    const [name, setName]= useState('Kibet');

    const handleClick = () => {
        setName('Allan'); 
    }
   
    
    return (  
        <div className="home">
            <h2>HomePage </h2>
            <p>{name}</p>
            <button onClick={handleClick}>Click me</button>
           
         
            

        </div>

         
    );
}
 
export default Home;