import React from 'react';
import { Card } from 'react-bootstrap';


const Cards = (props) => {

  const team = props.dataPlayer && props.dataPlayer.team ? props.dataPlayer.team.full_name : null;
  if(props.dataPlayer === undefined) {
    return null;
  }
  return (
    <div>
    <div className="maincontainer m-auto pt-3">
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


        </div>
      </div>
    </div>
    </div>
  )
}

export default Cards
