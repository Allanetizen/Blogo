const Home = () => {

    const handleClick= (e) => {
        console.log('hello dev',e)
    }
    const clickTwo = (name,e) => {
        console.log(e.target,'hello '+ name);
    }
    return (  
        <div className="home">
            <h2>HomePage </h2>
            <button onClick={handleClick}>Click me</button>
         
            <button onClick={(e)=> clickTwo('Dev',e)
            }>Click2</button>

        </div>

         
    );
}
 
export default Home;