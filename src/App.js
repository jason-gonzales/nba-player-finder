import axios from 'axios';
import React, { useState } from 'react';
// import {useForm} from 'react-hook-form';
import './App.css';
// import styled from 'styled-components';

// const Formtag = styled.form `
// color: red;
// font-size: 40px;`

export default function App() {

  // const [playerName, setPlayerName ] = useState(null);
  // const [playerStats, setPlayerStats ] = useState({});


  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   getPlayerId();
  // }

  // const handleChange = (e) => {
  //   let replace = e.target.value.split(" ").join("_")

  //   setPlayerName(replace)
  //   if(replace.length > 0) {
  //     setPlayerName(replace);
  //     console.log(playerName)
  //   }
  //   else {
  //     alert("please type player name")
  //   }

  // }
  // console.log(playerName)

  // const getPlayerId = () => {
  //   axios.get(`https://www.balldontlie.io/api/v1/players?search=${playerName}`)
  //   .then(async res => {
  //     console.log(res.data.data)
  //     if(res.data.data[0] === undefined) {
  //       alert("Player is injured")
  //     } else if(res.data.data.length > 1) {
  //       alert("Specify name more")
  //     } else {

  //       await getStats(res.data.data[0].id)
  //     }

  //   }).catch(err => {
  //     console.log(err)
  //   })
  // }

  // const getStats = ( playerId) => {
  //   axios.get(`https://www.balldontlie.io/api/v1/season_averages?seasons[]=2018&seasons[]=2015&player_ids[]=${playerId}`)
  //   .then(async res => {
  //     console.log(res.data.data)
  //     setPlayerStats(res.data.data[0])
  //   }).catch(err => {
  //     console.log(err)
  //   })
  // }

  // useEffect(() => {
  //   getPlayerId();
  //   getStats();
  // })

  return (
    <div>
      <header>
        <div className="d-flex">
          <img src="images/kobe-logo-sq.jpg" className="logo" />
          <div className="mx-2">
            <form>
              <input type="text" name="search" placeholder="search..."></input>
            </form>
         </div>
        </div>

      </header>


      <div>

      </div>

      <div className="App">
      </div>
    </div>
  );
}





{/* <form onSubmit={handleSubmit}>
        <label>
    Player Name
          <input
          type ="text"
          // value={playerName}
          onChange={e => handleChange(e)}
           placeholder="enter player name"
          />
        </label>
        <br/>
        <label>
    season
        <input
        type="text"

        placeholder="enter year"
        />
        </label>
        <input
        type="submit"
        value="Submit"/>
      </form>

        season : {playerStats["season"]}
        <br/>
        games played : {playerStats["games_played"]}
        <br/>
      PPG : {playerStats["pts"]} */}
