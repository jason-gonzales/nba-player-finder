import React, {useState} from 'react';
import { useAuth0 } from "@auth0/auth0-react";
import axios from 'axios';
import './App.css';
import Cards from './Cards';
import ReactPlayer from 'react-player';
import Modal from 'react-modal';

import { FormProvider } from 'react-hook-form';

const Profile = () => {

  const [dataPlayer, setDataPlayer] = useState([]);
  const [dataPic, setDataPic] = useState([]);
  const [search, setSearch] = useState([]);
  const [dropdown, setDropdown] = useState(false)
  const [video, setVideo] = useState([]);
  const [modalOpen, setModalOpen] = useState(false);

  const { user, isAuthenticated } = useAuth0();

  const handleChange = (e) => {

    const { value } = e.target

    axios.get(`https://www.balldontlie.io/api/v1/players?search=${value}`)
      .then(async res => {
        if (value.length >= 2) {
          setSearch(res.data.data)
          setDropdown(true)
        }
      })
  }

  const handleClick = (e) => {
    e.preventDefault();
    const value = e.target.innerText
    let clicked = null
    for (let i = 0; i < search.length; i++) {
      clicked = search[i].first_name + " " + search[i].last_name;
      console.log(value, clicked)
      if (value === clicked) {
        setDataPlayer(search[i])
        let playerMod = value.split(' ').reverse().join('/')
        fetchData(playerMod)
      }

    }
    setDropdown(false)
    fetchYouTube(clicked);
  }

  const fetchData = (pic) => {

    axios.get(`https://nba-players.herokuapp.com/players/${pic}`)
      .then(async res => {
        if (res.data === "Sorry, that player was not found. Please check the spelling.") {
          setDataPic("images/kobe-logo-sq.jpg")
        } else {
          setDataPic(res.config.url)
        }
      }).catch(err => {
        console.log(err);
      })
  }

  const fetchYouTube = (name) => {
    axios.get(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&q=${name}&key=${process.env.REACT_APP_YOUTUBE_API_KEY}&maxResults=1`)
      .then(async res => {
        // console.log("metainfo", res.data.items, "selectedVideo",res.data.items[0].id.videoId)
        setVideo(res.data.items[0])
      }).catch(err => {
        console.log(err)
      })
  }

  const { id = {}, snippet = {} } = video;
  const { title, thumbnails = {} } = snippet;
  const { medium = {} } = thumbnails;
  console.log(user)
  return (
    isAuthenticated && (
      <>

     <div>
       <header>
         <div className="d-flex">
           <img src="images/kobe-logo-sq.jpg" className="logo" />
         {/* <form onSubmit={handleSubmit}> */}
           <form>
             <div className="has-search">
               <span className="fa fa-search form-control-feedback"></span>
               <input type="text"
                className="form-control"
                placeholder="Search Player"
                onChange={handleChange} />
              {dropdown && search?.length > 0 &&
                <div className="dropdown-list p-2">
                  {search?.map((el, i) =>
                    <div key={i} className="fa fa-search d-flex p-1">
                      <div className="ml-1 name-list" onClick={handleClick} value={el.first_name}>
                        {el.first_name} {el.last_name}
                      </div>
                    </div>
                  )}
                </div>}
            </div>
          </form>
        </div>
      </header>
      <div className="App">
            <div>
              Welcome
      <h2>{user.name}</h2>
            </div>
        <Modal isOpen={modalOpen}
          className="custom-modal col-11 col-md-7 col-sm-8 pb-4 pb-lg-5"
          onRequestClose={() => { setModalOpen(false) }}
          style={
            {
              overlay: {
                backgroundColor: 'rgba(97 107 123 / 85%)'
              }
            }
          }>
          <div className="d-flex justify-content-center p-2 pt-3 pt-lg-4"><h5>{title}</h5>
            <i class="fas fa-times pl-lg-5" onClick={() => { setModalOpen(false) }}></i></div>
          <div className="d-flex justify-content-center p-2">
            <ReactPlayer width='650px' height='440px' controls url={`https://www.youtube.com/watch?v=${id.videoId}`} />
          </div>

        </Modal>
        <div>
          <Cards dataPlayer={dataPlayer}
            dataPic={dataPic}
          />
        </div>
        <div className="tv-container">
          <img className="tv" src="images/nba-tv.png" alt="tv" />
        </div>
        <div className="video"> {
          video.length === 0 ? <img src="images/youtube-logo.png" alt="tube-log" /> :
            <div onClick={() => {
              setModalOpen(true)
            }}>
              <img src={medium.url} alt="video-thumbnail" />
              <h3 className="video-title">{title}</h3>
            </div>
        }
        </div>
      </div>
    </div>
    </>
    )
  )
}

export default Profile;
