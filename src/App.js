import React, {useState} from 'react';
import './App.css';

function App() {

  const [playerName, setPlayerName ] = useState(null);
  const [playerStats, setPlayerStats ] = useState({});

  function handleSubmit() {

  }

  function handleChange() {

  }

  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <label>
    Player Name
          <input
          type ="text"
          onChange={handleChange}
          placeholder="enter player name"
          />
        </label>
        <input
        type="submit"
        value="Submit"/>
      </form>
    </div>
  );
}

export default App;
