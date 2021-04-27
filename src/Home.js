import React from 'react';
import './Home.css';
import LoginButton from './LoginButton';
import {useAuth0} from '@auth0/auth0-react';


const Home = (props) => {

  const {isAuthenticated} = useAuth0();
return  (
  !isAuthenticated && (
    <div className="home">
  <h1>
    HOME
    <LoginButton />
    <button onClick={()=> props.changeView("demo")}>
      View Demo
    </button>
  </h1>
  </div>
)
)
}

export default Home;
