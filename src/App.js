import './App.css';
import BeerContainer from './containers/BeerContainer';

function App() {

  return (
    <div className="app">
      <img className="logo" src="https://see.fontimg.com/api/renderfont4/YX3y/eyJyIjoiZnMiLCJoIjoxODYsInciOjIwMDAsImZzIjo5MywiZmdjIjoiIzRCOUFDQiIsImJnYyI6IiNGRkZGRkYiLCJ0IjoxfQ/UHVuayBQaW50cw/punk-kid.png" alt="Punk Pints" width="400"></img>
      <BeerContainer/>
    </div>
  );
}

export default App;

