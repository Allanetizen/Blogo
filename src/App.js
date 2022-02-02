
import Navbar from "./Navbar";
import Home from "./Home";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  
  //NB: objects cannot be used as variables
  
  return (
    <Router>
      <div className="App"> 
      <Navbar />
      <div className="content">
        <Switch>
          {/* makes sure only one route shows at any given time */}
          <Route path="/">
            <Home/>

          </Route>
        </Switch>
        
      
      </div>
    </div>
    </Router>
    
  );
}

export default App;
