import React from 'react';
import './Home.css';
import LoginButton from './LoginButton';
import { useAuth0 } from '@auth0/auth0-react';
import logo from './images/kobe-logo-mn.png';


const Home = (props) => {

  const { isAuthenticated } = useAuth0();
  return (
    !isAuthenticated && (
      <div className="home text-center">
        <div className="container">
          <img className="main-logo" src={logo} alt="logo" />
          <h2 className="title">NBA Player Finder</h2>
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
