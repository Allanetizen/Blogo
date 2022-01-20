
import './App.css';

function App() {
  const title = 'Welcome To Blogo';
  const titleTwo ='This is the second title'
  //NB: objects cannot be used as variables
  const likes = 1000;
  const githubLink ="https://github.com/allanetizen"
  return (
    <div className="App">
      <div className="content">
        <h1>{title},<br/> {titleTwo}</h1>
        <p>Your have <strong>{likes }</strong> likes</p>
        <p> {Math.random()* 10}</p>
        <p>My GitHub Link is <a href={githubLink}>here</a></p>


      </div>
      
    </div>
  );
}

export default App;
