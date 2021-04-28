import React from 'react';
import './Home.css';
import LoginButton from './LoginButton';
import { useAuth0 } from '@auth0/auth0-react';


const Home = (props) => {

  const { isAuthenticated } = useAuth0();
  return (
    !isAuthenticated && (
      <div className="home text-center">
        <div className="container">
          <img className="main-logo" src="images/kobe-logo-mn.png" alt="logo" />
          <h2 className="title">Player Finder</h2>
          <div className="banner-btn p-1">
            <LoginButton />
            <button className="demo-btn ml-1" onClick={() => props.changeView("demo")}>
              View Demo
            </button>
          </div>
        </div>
      </div>

    )
  )
}

export default Home;
