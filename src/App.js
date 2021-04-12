import axios from 'axios';
import React, { useState, useEffect} from 'react';
// import {useForm} from 'react-hook-form';
import './App.css';
import {Card} from 'react-bootstrap';
// import styled from 'styled-components';

// const Formtag = styled.form `
// color: red;
// font-size: 40px;`


// const cardInfo = [
//   {
//     image: 'https://pyxis.nymag.com/v1/imgs/847/0f7/504c63a03d8a751a5cbeda0bc064306bb4-lebron-james.rsquare.w1200.jpg',
//    name: 'Lebron James',
//     team:'Los Angeles Lakers',
//     position: 'F',
//     height_feet: 6,
//     height_inches: 8,
//     weight_pounds: 250,
//   }
// ]
export default function App() {

  const [playerName, setPlayerName ] = useState([]);
  const [playerPic, setPlayerPic ] = useState([]);
  // const [playerStats, setPlayerStats ] = useState({});


  const handleSubmit = (e) => {
    e.preventDefault();
    // getPlayerId();
  }

  const handleChange = (e) => {
    let replace = e.target.value.split(" ").join("_")

    setPlayerName(replace)
    if(replace.length > 0) {
      setPlayerName(replace);
      console.log(playerName)
    }
    else {
      alert("please type player name")
    }

  }

  const team = playerName && playerName.team ? playerName.team.full_name : null;




  const fetchData = () => {
    const playerAPI = "https://www.balldontlie.io/api/v1/players/237";
    const playerPic = "https://nba-players.herokuapp.com/players/james/lebron";

    const getPlayer = axios.get(playerAPI)
    const getPic = axios.get(playerPic)
    axios.all([getPlayer, getPic]).then(
      axios.spread((...allData) => {
        const allDataPlayer = allData[0].data
        const getNBAPlayerPic = allData[1].config.url
        setPlayerName(allDataPlayer);
        setPlayerPic(getNBAPlayerPic)
      })
    )

  }
  useEffect(() => {
    fetchData()
  },[])

  // const getPlayerId = () => {
  //   axios.get(`https://www.balldontlie.io/api/v1/players?search=lebron`)
  //   .then(async res => {
  //     console.log(res.data.data)
  //     if(res.data.data[0] === undefined) {
  //       alert("Player is injured")
  //     } else if(res.data.data.length > 1) {
  //       alert("Specify name more")
  //     }
  //   else {

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

  // })

  return (
    <div>
      <header>
        <div className="d-flex">
          <img src="images/kobe-logo-sq.jpg" className="logo" />
          <div className="has-search">
            <span className="fa fa-search form-control-feedback"></span>
            <input type="text" className="form-control" placeholder="Search" />
          </div>
        </div>
      </header>

      <div className="App">
        <div className="pt-3">
          <div className="card-border py-3 m-2">
            <Card className="m-auto" style={{ width: '18rem' }}>
              <Card.Img variant="top" src={playerPic} />
              <Card.Body>
                <Card.Title>{playerName["first_name"]} {playerName["last_name"]}</Card.Title>
                <Card.Text>
                  {team}
                    <i className="fas fa-basketball-ball p-1"></i>

                  {playerName["position"]}
                  <br/>
                  {playerName["height_feet"]}'{playerName["height_inches"]}
                  <i className="fas fa-basketball-ball p-1"></i>
                  {playerName["weight_pounds"]}lbs
                </Card.Text>

              </Card.Body>
            </Card>
          </div>

        </div>

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
