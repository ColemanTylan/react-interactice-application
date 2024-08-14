import './App.css';
import Button from './Buttons/Button.js';
import React from 'react';

function App() {
  return (
    <React.Fragment>
      <div className="App">
        <header className="App-header">
          <h1>Welcome to My React App</h1>
        </header>
      </div>
      <div className="Buttons">
      <Button text="Button 1" />
      <Button text="Button 2" />
      <Button text="Button 3" />
      </div>
    </React.Fragment>
  );
}

export default App;