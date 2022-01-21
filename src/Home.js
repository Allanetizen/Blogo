import { useState } from "react";

const Home = () => {
    //let  name = 'Allan';
    const [name, setName]= useState('Kibet');
    const[age, setAge] = useState(12);

    const handleClick = () => {
        setName('Allan'); 
        
    }
    const clickTwo = () => {
     setAge(20);
    }
   
    
    return (  
        <div className="home">
            <h2>HomePage </h2>
            <p>{name} is <b>{age}</b> Years Old</p>
            
            <button onClick={clickTwo}>ChangeAge</button>

            <button onClick={handleClick}>Click me</button>
           
         
            

        </div>

         
    );
}
 
export default Home;