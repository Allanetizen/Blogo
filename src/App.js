
import Navbar from "./Navbar";
import Home from "./Home";

function App() {
  
  //NB: objects cannot be used as variables
  
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
