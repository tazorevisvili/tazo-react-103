import react from 'react';
import Greeting from "./Greeting";
import './App.css';

function App() {
  const h1 = react.createElement('h1',{className: "example-class"}, "react.createElement example");

  const myText = "Demo Text";

  return (
    <div className="App">
      <header className="App-header">
        <h1>{myText}</h1>
        <h1>JSX Demo</h1>
        {h1} 
        <Greeting />
      </header>
    </div>
  );
}

export default App;
