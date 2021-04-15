import React from 'react';
import { Card } from 'react-bootstrap';


const Cards = (props) => {

  // const [show, setShow] = React.useState(true);
  console.log(props.dataPlayer, props.dataPic, props.playerStats)
  const team = props.dataPlayer && props.dataPlayer.team ? props.dataPlayer.team.full_name : null;

  if (props.dataPlayer.length === 0) {
    return <div>NO card</div>;
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
            <div className="text-center card mt-5 m-auto">
              season: {props.playerStats.season}
              <br />
                games played : {props.playerStats.games_played}
              <br />
                PPG : {props.playerStats.pts}
              <br />
                AST : {props.playerStats.ast}
              <br />
               REB : {props.playerStats.reb}
              <br />
                BLK : {props.playerStats.blk}
              <br />
                STL : {props.playerStats.stl}
              <br />
                FG% : {props.playerStats.fg_pct}
              <br />
                3PT% : {props.playerStats.fg3_pct}
              <br />
                FT% : {props.playerStats.ft_pct}
            </div>

          </div>
        </div>
      </div >

    )
  }


}

export default Cards
