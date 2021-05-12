import React, { useState } from 'react';
import axios from 'axios';
import { Card } from 'react-bootstrap';
import PercentFormatter from './PercentFormatter';
import card from './images/nba-card.jpg';


const Cards = (props) => {

  const [season, setSeason] = useState([]);
  const [playerStats, setPlayerStats] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    getStats(props.dataPlayer.id, season);
  }

  const handleChange = (e) => {
    setSeason(e.target.value)
  }

  const getStats = (playerId, playerSeason) => {
    axios.get(`https://www.balldontlie.io/api/v1/season_averages?season=${playerSeason}&player_ids[]=${playerId}`)
      .then(async res => {
        setPlayerStats(res.data.data[0])
      }).catch(err => {
        console.log(err)
      })
  }

  /*ternary operator to see if both the object called dataPlayer and its property team exist
  const team = props.dataPlayer && props.dataPlayer.team ? props.dataPlayer.team.full_name : null;*/

  /*used optional chaining instead of the ternary operator to see if that property exist, and if
  it does then assign the value of props.dataPlayer.team.full_name to variable team*/
  let team = null;
  team = props.dataPlayer.team?.full_name;

  if (props.dataPlayer.length === 0) {
    return <div>
      <img className="rookie-card mt-3" src={card} alt="mj-card" />
    </div>;
  } else {
    return (
      <div className="maincontainer m-auto pt-3" >
        <div className="thecard">
          <div className="thefront py-3">
            <Card className="m-auto" style={{ width: '18rem' }}>
              <Card.Img variant="top" src={props.dataPic} />
              <Card.Body>
                <Card.Title>{props.dataPlayer["first_name"]} {props.dataPlayer["last_name"]}</Card.Title>
                <Card.Text>
                  {team}
                  <i className="fas fa-basketball-ball p-1"></i>

                  {props.dataPlayer["position"]}
                  <br />
                  {props.dataPlayer["height_feet"]}'{props.dataPlayer["height_inches"]}
                  <i className="fas fa-basketball-ball p-1"></i>
                  {props.dataPlayer["weight_pounds"]}lbs
                  </Card.Text>
              </Card.Body>
            </Card>
          </div>
          <div className="theback">
            <div className="text-center card mt-4 m-auto">
              <form onSubmit={handleSubmit}>
                <div className="has-search col-7 m-auto">
                  <span className="fa fa-search form-control-feedback"></span>
                  <input type="text"
                    className="form-control mt-1"
                    placeholder="Season"
                    onChange={handleChange} />
                </div>
              </form> {playerStats ? <div className="py-2">
                season: {playerStats.season}
                <br />
                games played : {playerStats.games_played}
                <br />
                PPG : {playerStats.pts}
                <br />
                AST : {playerStats.ast}
                <br />
               REB : {playerStats.reb}
                <br />
                BLK : {playerStats.blk}
                <br />
                STL : {playerStats.stl}
                <br />
                FG% : {PercentFormatter(playerStats.fg_pct)}
                <br />
                3PT% : {PercentFormatter(playerStats.fg3_pct)}
                <br />
                FT% : {PercentFormatter(playerStats.ft_pct)}
              </div> : <h1 className="no-record pt-5">Player did not play this season. Try again!</h1>}
            </div>
          </div>
        </div>
      </div >

    )
  }
}

export default Cards
