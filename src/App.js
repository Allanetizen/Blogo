
import Navbar from "./Navbar";
import Home from "./Home";

function App() {
  const title = "Welcome To Blogo";
  const titleTwo = "This is the second title";
  //NB: objects cannot be used as variables
  const likes = 1000;
  const githubLink = "https://github.com/allanetizen";
  return (
    <div className="App"> 
      <Navbar />
      <div className="content">
        <Home/>
      
      </div>
    </div>
  );
}

export default App;
