import React from "react";
import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import NowPlaying from "./nowplaying.jsx";
import "./scroll.css"
import songData from "./song.jsx";

const S1= () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTrackIndex, setCurrentTrackIndex] = useState(null);
  const [hoveredIndex, setHoveredIndex] = useState(null);


  const handlePlayPause = (index) => {
    const audio = document.getElementById('audioPlayer');
    const isSameTrack = currentTrackIndex === index;
  
    if (isPlaying && isSameTrack) {
      audio.pause();
    } else {
      audio.src = tracks[index].music;
      audio.play();
    }
  
    setIsPlaying(!isSameTrack || !isPlaying);
    setCurrentTrackIndex(index);
  
    // Store recently played track in local storage
    const recentlyPlayed = JSON.parse(localStorage.getItem('recentlyPlayed')) || [];
    recentlyPlayed.unshift(tracks[index]);
    localStorage.setItem('recentlyPlayed', JSON.stringify(recentlyPlayed.slice(0, 5))); // Store only the last 5 tracks
  };

  const [tracks, setTracks] = useState([
    {   id: 0,
      title: "Night changes",
      album: "Snow",
      date: "2024-01-18",
      time: "03:45",
      img: "https://i.scdn.co/image/ab67616d0000b273d304ba2d71de306812eebaf4",
      music: "./music1.mp3",
    },
    {
      id: 1,
      title: "Blank space",
      album: "Chithrum",
      date: "2024-01-19",
      time: "04:30",
      img: "https://i.scdn.co/image/ab67616d0000b2739abdf14e6058bd3903686148",
      music: "./Kiliye-Kiliye.mp3",
    },
    {
      id: 2,
      title: "Balcony",
      album: "Balcony",
      date: "2024-01-19",
      time: "04:30",
      img: "https://i.scdn.co/image/ab67616d0000b273629dc9e2e3bc20bbd7d92e4a",
      music: "./music2.mp3",
    },
    {
      id: 3,
      title: "Snake",
      album: "Taylor Snake",
      date: "2024-01-19",
      time: "04:30",
      img: "https://i.scdn.co/image/ab67616d0000b273aadb13ae608f6af20528409b",
      music: "./music3.mp3",
    },
    {
      id: 4,
      title: "Glow",
      album: "glow",
      date: "2024-01-19",
      time: "04:30",
      img: "https://i.scdn.co/image/ab67616d0000b273bdea30b86b37142ec99deb78",
      music: "./music4.mp3",
    },
    {
      id: 5,
      title: "Boy with luv",
      album: "Summer",
      date: "2024-01-19",
      time: "04:30",
      img: "https://i.scdn.co/image/ab67616d00001e0218d0ed4f969b376893f9a38f",
      music: "./music5.mp3",
    },{
      id: 6,
      title: "Snake",
      album: "Taylor Snake",
      date: "2024-01-19",
      time: "04:30",
      img: "https://i.scdn.co/image/ab67616d0000b273d7ef1ffbd2a5821152f35ce1",
      music: "./music6.mp3",
    },
    {
      id: 7,
      title: "Glow",
      album: "glow",
      date: "2024-01-19",
      time: "04:30",
      img: "https://e0.pxfuel.com/wallpapers/76/35/desktop-wallpaper-zoya-blodos-world-s-famous-singers-american-hot-and-actress-thumbnail.jpg",
      music: "./music7.mp3",
    },
    {
      id: 8,
      title: "Daffy",
      album: "Summer",
      date: "2024-01-19",
      time: "04:30",
      img: "https://www.musicianwave.com/wp-content/uploads/2022/04/Zayn-Malik-393x525.jpg",
      music: "./music8.mp3",
    },
    // Additional tracks...
    {
      id: 9,
      title: "Moonlight Sonata",
      album: "Classical Classics",
      date: "2024-01-20",
      time: "05:15",
      img: "https://fancyodds.com/wp-content/uploads/2021/08/Nicki-Minaj.jpg",
      music: "./music9.mp3",
    },
    {
      id: 10,
      title: "City Lights",
      album: "Urban Vibes",
      date: "2024-01-21",
      time: "03:55",
      img: "https://www.superprof.co.in/blog/wp-content/uploads/2023/03/image2-4.png",
      music: "./music10.mp3",
    },
    {
      id: 11,
      title: "Summer Breeze",
      album: "Seasonal Sounds",
      date: "2024-01-22",
      time: "04:10",
      img: "https://hi.letsdiskuss.com/assets/upl_files/bdeb8e0ead.jpg",
      music: "./music12.mp3",
    },
    {
      id: 12,
      title: "Eclipse",
      album: "Galactic Grooves",
      date: "2024-01-23",
      time: "04:45",
      img: "https://theindianeye.com/wp-content/uploads/2022/10/Shreya-1.jpg",
      music: "./music13.mp3",
    },

  ]);

  const navigate = useNavigate();

  return (
    <>
      <div className="container bg-black  w-full">
        <div className="row">

       
      <div className="sidebar bg-side">
          <div className="navigation bg-side2">
            <ul>
              <li>
                <Link to="#" className="logo ms-16">
                  <img
                    src="https://storage.googleapis.com/pr-newsroom-wp/1/2018/11/Spotify_Logo_RGB_White.png"
                    className="mt-3"
                    alt="Logo"
                  />
                </Link>
                <Link to="#">
                  <h4 className="font-2 mt-3">
                    <i className="bi bi-house-door-fill"></i> Home
                  </h4>
                </Link>
              </li>

              <li>
              <Link to="/search">
                  <h4 className="font-2">
                    <i className="bi bi-search"></i> Search
                  </h4>
                </Link>
              </li>
            </ul>
          </div>

          <div className="navigation mt-5 bg-side2 ">
            <ul>
              <li>
                <Link to="#">
                  <h4 className="font-2 ">
                    <i className="bi bi-collection-fill"></i> Your Library{" "}
                    <strong>
                      <i className="bi bi-plus-lg ms-16"></i>
                    </strong>
                  </h4>
                </Link>
              </li>
            </ul>
            <div className="bg-side1 border-solid-side1 rounded-lg ms-2 me-2 pt-4">
              <ul>
                <li>
                  <Link to="#">
                    <h4 className="font-2 ">Create Your First playlist</h4>
                  </Link>
                </li>

                <li>
                <Link to="/play">
                    <button type="button" className="but">
                      <h4>Create Playlist</h4>
                    </button>
                 </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="navigation bg-side2 ">
            <ul>
              <li>
                <Link to="#" className="logo"></Link>
                <Link to="#">
                  <h6 className="font-2 mt-3 me-10">Legal</h6>
                </Link>
                <Link to="#">
                  <h6 className="font-2 mt-3  me-10">Privacy Policy</h6>
                </Link>
                <Link to="#">
                  <h6 className="font-2 mt-3 me-10">Cookies</h6>
                </Link>
                <Link to="#">
                  <h6 className="font-2 mt-3 me-10">Accessibility</h6>
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <button type="button" className="butt">
              <i className="bi bi-globe"></i> English
            </button>
          </div>
        </div>
       
            <div className="grid grid-cols-2 bg-black">
            <div class="item ms-80 bg-gray-400 ">
            <img src="https://i.pinimg.com/564x/5a/c9/d7/5ac9d7b05bf6cf11362f2b3953a79417.jpg" className="w-36 h-44 mt-8 ms-5 mb-5" />

                </div>
                <div className="bg-gray-400 ">
                    <p className="text-white">Playlist</p>
                    <h1 className="text-white text-7xl justify-items-center mt-12"> Dark & Stormy</h1>
                    <p className="text-white">Beautifully dark, dramatic tracks.</p>
                    <div id="logo2" className="me-10">
            <img src="https://www.freepnglogos.com/uploads/spotify-logo-png/spotify-icon-marilyn-scott-0.png"alt="Spotify-Logo" className="w-6"/>
            <h1 className="text-sm">Spotify</h1>
            <p className="text-white text-lg">1,637,003 likes100 songs, about 5 hr 30 min</p>
          </div>
                </div>
            </div> 
            </div>
           

           
    <div className="row bg-gray-500 ms-80 h-32">
     <div className="grid grid-cols-1">
      <div class="play left ms-5 "> 
       <i class="bi bi-play-fill fa fa-play mt-5"></i> 
         <i class="bi bi-heart text-white text-3xl ms-20 mt-6 dot  "></i>
        <i class="bi bi-three-dots text-3xl ms-40 text-white mt-6  dot"></i>
     </div>     
     </div> 
    
        </div>
       
        <audio id="audioPlayer" />
        <div className="row bg-gray-500 ms-80 ">
        <div className="grid grid-cols-1">
          <table className="table">
            <thead >
              <tr >
                <th className="text-white ms-32 th">
                  <i class="bi bi-hash text-white ms-5"></i>
                </th>
                <th className="text-white ms-32">Title</th>
                <th className="text-white ms-32">Album</th>
                <th className="text-white ms-32">Date</th>
                <th className="text-white ms-32">
                  <i class="bi bi-clock text-white"></i>
                </th>
              </tr>
            
            </thead>

            <tbody >
              {tracks.map((track, index) => (
                <tr
                  key={index}
                  className={`cont hover:bg-gray-700 cursor-pointer ${
                    hoveredIndex === index ? 'hovered-row' : ''
                  }`}
                  onMouseEnter={() => setHoveredIndex(index)}
                  onMouseLeave={() => setHoveredIndex(null)}
                >
                  <td className="text-white ms-72">
                    {hoveredIndex === index ? (
                      <i
                        className="bi bi-play-fill fa fa-play"
                        onClick={() => handlePlayPause(index)}
                      ></i>
                    ) : (
                      index + 1
                    )}
                  </td>
                  <td className="text-white ms-2">
                    {track.img && (
                      <img
                        src={track.img}
                        alt="Image"
                        className="mr-2 w-9 h-8 inline-block"
                      />
                    )}
                    {track.title}
                  </td>
                  <td className="text-white ms-2">{track.album} </td>
                  <td className="text-white ms-2">{track.date} </td>
                  <td className="text-white ms-2">{track.time}</td>
                </tr>
              ))}
            </tbody>
          </table>
          </div>
           
          </div>
          <div className=" ms-72">
          <NowPlaying
            track={tracks.find((track) => track.id === currentTrackIndex)}
            isPlaying={isPlaying}
            togglePlay={() => handlePlayPause(currentTrackIndex)}
          />
        </div>
    </div>
            
   
    
      
    </>
  );
}

const S3= () => {
    const [isPlaying, setIsPlaying] = useState(false);
    const [currentTrackIndex, setCurrentTrackIndex] = useState(null);
    const [hoveredIndex, setHoveredIndex] = useState(null);
  
    const handlePlayPause = (index) => {
      const audio = document.getElementById('audioPlayer');
      const isSameTrack = currentTrackIndex === index;
    
      if (isPlaying && isSameTrack) {
        audio.pause();
      } else {
        audio.src = tracks[index].music;
        audio.play();
      }
    
      setIsPlaying(!isSameTrack || !isPlaying);
      setCurrentTrackIndex(index);
    
      // Store recently played track in local storage
      const recentlyPlayed = JSON.parse(localStorage.getItem('recentlyPlayed')) || [];
      recentlyPlayed.unshift(tracks[index]);
      localStorage.setItem('recentlyPlayed', JSON.stringify(recentlyPlayed.slice(0, 5))); // Store only the last 5 tracks
    };
    const [tracks, setTracks] = useState([
      {   id: 0,
        title: "Night changes",
        album: "Snow",
        date: "2024-01-18",
        time: "03:45",
        img: "https://i.scdn.co/image/ab67616d0000b273d304ba2d71de306812eebaf4",
        music: "./music1.mp3",
      },
      {
        id: 1,
        title: "Blank space",
        album: "Chithrum",
        date: "2024-01-19",
        time: "04:30",
        img: "https://i.scdn.co/image/ab67616d0000b2739abdf14e6058bd3903686148",
        music: "./Kiliye-Kiliye.mp3",
      },
      {
        id: 2,
        title: "Balcony",
        album: "Balcony",
        date: "2024-01-19",
        time: "04:30",
        img: "https://i.scdn.co/image/ab67616d0000b273629dc9e2e3bc20bbd7d92e4a",
        music: "./music2.mp3",
      },
      {
        id: 3,
        title: "Snake",
        album: "Taylor Snake",
        date: "2024-01-19",
        time: "04:30",
        img: "https://i.scdn.co/image/ab67616d0000b273aadb13ae608f6af20528409b",
        music: "./music3.mp3",
      },
      {
        id: 4,
        title: "Glow",
        album: "glow",
        date: "2024-01-19",
        time: "04:30",
        img: "https://i.scdn.co/image/ab67616d0000b273bdea30b86b37142ec99deb78",
        music: "./music4.mp3",
      },
      {
        id: 5,
        title: "Boy with luv",
        album: "Summer",
        date: "2024-01-19",
        time: "04:30",
        img: "https://i.scdn.co/image/ab67616d00001e0218d0ed4f969b376893f9a38f",
        music: "./music5.mp3",
      },{
        id: 6,
        title: "Snake",
        album: "Taylor Snake",
        date: "2024-01-19",
        time: "04:30",
        img: "https://i.scdn.co/image/ab67616d0000b273d7ef1ffbd2a5821152f35ce1",
        music: "./music6.mp3",
      },
      {
        id: 7,
        title: "Glow",
        album: "glow",
        date: "2024-01-19",
        time: "04:30",
        img: "https://e0.pxfuel.com/wallpapers/76/35/desktop-wallpaper-zoya-blodos-world-s-famous-singers-american-hot-and-actress-thumbnail.jpg",
        music: "./music7.mp3",
      },
      {
        id: 8,
        title: "Daffy",
        album: "Summer",
        date: "2024-01-19",
        time: "04:30",
        img: "https://www.musicianwave.com/wp-content/uploads/2022/04/Zayn-Malik-393x525.jpg",
        music: "./music8.mp3",
      },
      // Additional tracks...
      {
        id: 9,
        title: "Moonlight Sonata",
        album: "Classical Classics",
        date: "2024-01-20",
        time: "05:15",
        img: "https://fancyodds.com/wp-content/uploads/2021/08/Nicki-Minaj.jpg",
        music: "./music9.mp3",
      },
      {
        id: 10,
        title: "City Lights",
        album: "Urban Vibes",
        date: "2024-01-21",
        time: "03:55",
        img: "https://www.superprof.co.in/blog/wp-content/uploads/2023/03/image2-4.png",
        music: "./music10.mp3",
      },
      {
        id: 11,
        title: "Summer Breeze",
        album: "Seasonal Sounds",
        date: "2024-01-22",
        time: "04:10",
        img: "https://hi.letsdiskuss.com/assets/upl_files/bdeb8e0ead.jpg",
        music: "./music12.mp3",
      },
      {
        id: 12,
        title: "Eclipse",
        album: "Galactic Grooves",
        date: "2024-01-23",
        time: "04:45",
        img: "https://theindianeye.com/wp-content/uploads/2022/10/Shreya-1.jpg",
        music: "./music13.mp3",
      },
  
    ]);
    const navigate = useNavigate();
  
    return (
      <>
        <div className="container bg-black  w-full">
          <div className="row">
  
         
        <div className="sidebar bg-side">
            <div className="navigation bg-side2">
              <ul>
                <li>
                  <Link to="#" className="logo ms-16">
                    <img
                      src="https://storage.googleapis.com/pr-newsroom-wp/1/2018/11/Spotify_Logo_RGB_White.png"
                      className="mt-3"
                      alt="Logo"
                    />
                  </Link>
                  <Link to="#">
                    <h4 className="font-2 mt-3">
                      <i className="bi bi-house-door-fill"></i> Home
                    </h4>
                  </Link>
                </li>
  
                <li>
                <Link to="/search">
                    <h4 className="font-2">
                      <i className="bi bi-search"></i> Search
                    </h4>
                  </Link>
                </li>
              </ul>
            </div>
  
            <div className="navigation mt-5 bg-side2 ">
              <ul>
                <li>
                  <Link to="#">
                    <h4 className="font-2 ">
                      <i className="bi bi-collection-fill"></i> Your Library{" "}
                      <strong>
                        <i className="bi bi-plus-lg ms-16"></i>
                      </strong>
                    </h4>
                  </Link>
                </li>
              </ul>
              <div className="bg-side1 border-solid-side1 rounded-lg ms-2 me-2 pt-4">
                <ul>
                  <li>
                    <Link to="#">
                      <h4 className="font-2 ">Create Your First playlist</h4>
                    </Link>
                  </li>
  
                  <li>
                  <Link to="/play">
                      <button type="button" className="but">
                        <h4>Create Playlist</h4>
                      </button>
                   </Link>
                  </li>
                </ul>
              </div>
            </div>
  
            <div className="navigation bg-side2 ">
              <ul>
                <li>
                  <Link to="#" className="logo"></Link>
                  <Link to="#">
                    <h6 className="font-2 mt-3 me-10">Legal</h6>
                  </Link>
                  <Link to="#">
                    <h6 className="font-2 mt-3  me-10">Privacy Policy</h6>
                  </Link>
                  <Link to="#">
                    <h6 className="font-2 mt-3 me-10">Cookies</h6>
                  </Link>
                  <Link to="#">
                    <h6 className="font-2 mt-3 me-10">Accessibility</h6>
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <button type="button" className="butt">
                <i className="bi bi-globe"></i> English
              </button>
            </div>
          </div>
         
              <div className="grid grid-cols-2 bg-black">
              <div class="item ms-80 bg-gray-400 ">
              <img src="https://i.pinimg.com/564x/46/64/e3/4664e3baa0b53117078eb642f9ede23d.jpg" className="w-36 h-44 mt-8 ms-5 mb-5" />
  
                  </div>
                  <div className="bg-gray-400 ">
                      <p className="text-white">Playlist</p>
                      <h1 className="text-white text-7xl justify-items-center mt-12"> Dark & Stormy</h1>
                      <p className="text-white">Beautifully dark, dramatic tracks.</p>
                      <div id="logo2" className="me-10">
              <img src="https://www.freepnglogos.com/uploads/spotify-logo-png/spotify-icon-marilyn-scott-0.png"alt="Spotify-Logo" className="w-6"/>
              <h1 className="text-sm">Spotify</h1>
              <p className="text-white text-lg">1,637,003 likes100 songs, about 5 hr 30 min</p>
            </div>
                  </div>
              </div> 
              </div>
             
  
             
      <div className="row bg-gray-500 ms-80 h-32">
       <div className="grid grid-cols-1">
        <div class="play left ms-5 "> 
         <i class="bi bi-play-fill fa fa-play mt-5"></i> 
           <i class="bi bi-heart text-white text-3xl ms-20 mt-6 dot  "></i>
          <i class="bi bi-three-dots text-3xl ms-40 text-white mt-6  dot"></i>
       </div>     
       </div> 
      
          </div>
         
          <audio id="audioPlayer" />
          <div className="row bg-gray-500 ms-80 ">
          <div className="grid grid-cols-1">
            <table className="table">
              <thead >
                <tr >
                  <th className="text-white ms-32 th">
                    <i class="bi bi-hash text-white ms-5"></i>
                  </th>
                  <th className="text-white ms-32">Title</th>
                  <th className="text-white ms-32">Album</th>
                  <th className="text-white ms-32">Date</th>
                  <th className="text-white ms-32">
                    <i class="bi bi-clock text-white"></i>
                  </th>
                </tr>
              
              </thead>
  
              <tbody >
                {tracks.map((track, index) => (
                  <tr
                    key={index}
                    className={`cont hover:bg-gray-700 cursor-pointer ${
                      hoveredIndex === index ? 'hovered-row' : ''
                    }`}
                    onMouseEnter={() => setHoveredIndex(index)}
                    onMouseLeave={() => setHoveredIndex(null)}
                  >
                    <td className="text-white ms-72">
                      {hoveredIndex === index ? (
                        <i
                          className="bi bi-play-fill fa fa-play"
                          onClick={() => handlePlayPause(index)}
                        ></i>
                      ) : (
                        index + 1
                      )}
                    </td>
                    <td className="text-white ms-2">
                      {track.img && (
                        <img
                          src={track.img}
                          alt="Image"
                          className="mr-2 w-9 h-8 inline-block"
                        />
                      )}
                      {track.title}
                    </td>
                    <td className="text-white ms-2">{track.album} </td>
                    <td className="text-white ms-2">{track.date} </td>
                    <td className="text-white ms-2">{track.time}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            </div>
             
            </div>
            <div className=" ms-72">
          <NowPlaying
            track={tracks.find((track) => track.id === currentTrackIndex)}
            isPlaying={isPlaying}
            togglePlay={() => handlePlayPause(currentTrackIndex)}
          />
        </div>
      </div>
              
     
      
        
      </>
    );
  }

  const S2= () => {
    const [isPlaying, setIsPlaying] = useState(false);
    const [currentTrackIndex, setCurrentTrackIndex] = useState(null);
    const [hoveredIndex, setHoveredIndex] = useState(null);
  
  
    const handlePlayPause = (index) => {
      const audio = document.getElementById('audioPlayer');
      const isSameTrack = currentTrackIndex === index;
    
      if (isPlaying && isSameTrack) {
        audio.pause();
      } else {
        audio.src = tracks[index].music;
        audio.play();
      }
    
      setIsPlaying(!isSameTrack || !isPlaying);
      setCurrentTrackIndex(index);
    
      // Store recently played track in local storage
      const recentlyPlayed = JSON.parse(localStorage.getItem('recentlyPlayed')) || [];
      recentlyPlayed.unshift(tracks[index]);
      localStorage.setItem('recentlyPlayed', JSON.stringify(recentlyPlayed.slice(0, 5))); // Store only the last 5 tracks
    };
  
    const [tracks, setTracks] = useState([
      {   id: 0,
        title: "Night changes",
        album: "Snow",
        date: "2024-01-18",
        time: "03:45",
        img: "https://i.scdn.co/image/ab67616d0000b273d304ba2d71de306812eebaf4",
        music: "./music1.mp3",
      },
      {
        id: 1,
        title: "Blank space",
        album: "Chithrum",
        date: "2024-01-19",
        time: "04:30",
        img: "https://i.scdn.co/image/ab67616d0000b2739abdf14e6058bd3903686148",
        music: "./Kiliye-Kiliye.mp3",
      },
      {
        id: 2,
        title: "Balcony",
        album: "Balcony",
        date: "2024-01-19",
        time: "04:30",
        img: "https://i.scdn.co/image/ab67616d0000b273629dc9e2e3bc20bbd7d92e4a",
        music: "./music2.mp3",
      },
      {
        id: 3,
        title: "Snake",
        album: "Taylor Snake",
        date: "2024-01-19",
        time: "04:30",
        img: "https://i.scdn.co/image/ab67616d0000b273aadb13ae608f6af20528409b",
        music: "./music3.mp3",
      },
      {
        id: 4,
        title: "Glow",
        album: "glow",
        date: "2024-01-19",
        time: "04:30",
        img: "https://i.scdn.co/image/ab67616d0000b273bdea30b86b37142ec99deb78",
        music: "./music4.mp3",
      },
      {
        id: 5,
        title: "Boy with luv",
        album: "Summer",
        date: "2024-01-19",
        time: "04:30",
        img: "https://i.scdn.co/image/ab67616d00001e0218d0ed4f969b376893f9a38f",
        music: "./music5.mp3",
      },{
        id: 6,
        title: "Snake",
        album: "Taylor Snake",
        date: "2024-01-19",
        time: "04:30",
        img: "https://i.scdn.co/image/ab67616d0000b273d7ef1ffbd2a5821152f35ce1",
        music: "./music6.mp3",
      },
      {
        id: 7,
        title: "Glow",
        album: "glow",
        date: "2024-01-19",
        time: "04:30",
        img: "https://e0.pxfuel.com/wallpapers/76/35/desktop-wallpaper-zoya-blodos-world-s-famous-singers-american-hot-and-actress-thumbnail.jpg",
        music: "./music7.mp3",
      },
      {
        id: 8,
        title: "Daffy",
        album: "Summer",
        date: "2024-01-19",
        time: "04:30",
        img: "https://www.musicianwave.com/wp-content/uploads/2022/04/Zayn-Malik-393x525.jpg",
        music: "./music8.mp3",
      },
      // Additional tracks...
      {
        id: 9,
        title: "Moonlight Sonata",
        album: "Classical Classics",
        date: "2024-01-20",
        time: "05:15",
        img: "https://fancyodds.com/wp-content/uploads/2021/08/Nicki-Minaj.jpg",
        music: "./music9.mp3",
      },
      {
        id: 10,
        title: "City Lights",
        album: "Urban Vibes",
        date: "2024-01-21",
        time: "03:55",
        img: "https://www.superprof.co.in/blog/wp-content/uploads/2023/03/image2-4.png",
        music: "./music10.mp3",
      },
      {
        id: 11,
        title: "Summer Breeze",
        album: "Seasonal Sounds",
        date: "2024-01-22",
        time: "04:10",
        img: "https://hi.letsdiskuss.com/assets/upl_files/bdeb8e0ead.jpg",
        music: "./music12.mp3",
      },
      {
        id: 12,
        title: "Eclipse",
        album: "Galactic Grooves",
        date: "2024-01-23",
        time: "04:45",
        img: "https://theindianeye.com/wp-content/uploads/2022/10/Shreya-1.jpg",
        music: "./music13.mp3",
      },
  
    ]);
  
    const navigate = useNavigate();
  
    return (
      <>
        <div className="container bg-black  w-full">
          <div className="row">
  
         
        <div className="sidebar bg-side">
            <div className="navigation bg-side2">
              <ul>
                <li>
                  <Link to="#" className="logo ms-16">
                    <img
                      src="https://storage.googleapis.com/pr-newsroom-wp/1/2018/11/Spotify_Logo_RGB_White.png"
                      className="mt-3"
                      alt="Logo"
                    />
                  </Link>
                  <Link to="#">
                    <h4 className="font-2 mt-3">
                      <i className="bi bi-house-door-fill"></i> Home
                    </h4>
                  </Link>
                </li>
  
                <li>
                <Link to="/search">
                    <h4 className="font-2">
                      <i className="bi bi-search"></i> Search
                    </h4>
                  </Link>
                </li>
              </ul>
            </div>
  
            <div className="navigation mt-5 bg-side2 ">
              <ul>
                <li>
                  <Link to="#">
                    <h4 className="font-2 ">
                      <i className="bi bi-collection-fill"></i> Your Library{" "}
                      <strong>
                        <i className="bi bi-plus-lg ms-16"></i>
                      </strong>
                    </h4>
                  </Link>
                </li>
              </ul>
              <div className="bg-side1 border-solid-side1 rounded-lg ms-2 me-2 pt-4">
                <ul>
                  <li>
                    <Link to="#">
                      <h4 className="font-2 ">Create Your First playlist</h4>
                    </Link>
                  </li>
  
                  <li>
                  <Link to="/play">
                      <button type="button" className="but">
                        <h4>Create Playlist</h4>
                      </button>
                   </Link>
                  </li>
                </ul>
              </div>
            </div>
  
            <div className="navigation bg-side2 ">
              <ul>
                <li>
                  <Link to="#" className="logo"></Link>
                  <Link to="#">
                    <h6 className="font-2 mt-3 me-10">Legal</h6>
                  </Link>
                  <Link to="#">
                    <h6 className="font-2 mt-3  me-10">Privacy Policy</h6>
                  </Link>
                  <Link to="#">
                    <h6 className="font-2 mt-3 me-10">Cookies</h6>
                  </Link>
                  <Link to="#">
                    <h6 className="font-2 mt-3 me-10">Accessibility</h6>
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <button type="button" className="butt">
                <i className="bi bi-globe"></i> English
              </button>
            </div>
          </div>
         
              <div className="grid grid-cols-2 bg-black">
              <div class="item ms-80 bg-gray-400 ">
              <img src="https://i.pinimg.com/564x/60/af/a7/60afa748d011b434bdff3d4b960fa0cf.jpg" className="w-36 h-44 mt-8 ms-5 mb-5" />
  
                  </div>
                  <div className="bg-gray-400 ">
                      <p className="text-white">Playlist</p>
                      <h1 className="text-white text-7xl justify-items-center mt-12"> Dark & Stormy</h1>
                      <p className="text-white">Beautifully dark, dramatic tracks.</p>
                      <div id="logo2" className="me-10">
              <img src="https://www.freepnglogos.com/uploads/spotify-logo-png/spotify-icon-marilyn-scott-0.png"alt="Spotify-Logo" className="w-6"/>
              <h1 className="text-sm">Spotify</h1>
              <p className="text-white text-lg">1,637,003 likes100 songs, about 5 hr 30 min</p>
            </div>
                  </div>
              </div> 
              </div>
             
  
             
      <div className="row bg-gray-500 ms-80 h-32">
       <div className="grid grid-cols-1">
        <div class="play left ms-5 "> 
         <i class="bi bi-play-fill fa fa-play mt-5"></i> 
           <i class="bi bi-heart text-white text-3xl ms-20 mt-6 dot  "></i>
          <i class="bi bi-three-dots text-3xl ms-40 text-white mt-6  dot"></i>
       </div>     
       </div> 
      
          </div>
         
          <audio id="audioPlayer" />
          <div className="row bg-gray-500 ms-80 ">
          <div className="grid grid-cols-1">
            <table className="table">
              <thead >
                <tr >
                  <th className="text-white ms-32 th">
                    <i class="bi bi-hash text-white ms-5"></i>
                  </th>
                  <th className="text-white ms-32">Title</th>
                  <th className="text-white ms-32">Album</th>
                  <th className="text-white ms-32">Date</th>
                  <th className="text-white ms-32">
                    <i class="bi bi-clock text-white"></i>
                  </th>
                </tr>
              
              </thead>
  
              <tbody >
                {tracks.map((track, index) => (
                  <tr
                    key={index}
                    className={`cont hover:bg-gray-700 cursor-pointer ${
                      hoveredIndex === index ? 'hovered-row' : ''
                    }`}
                    onMouseEnter={() => setHoveredIndex(index)}
                    onMouseLeave={() => setHoveredIndex(null)}
                  >
                    <td className="text-white ms-72">
                      {hoveredIndex === index ? (
                        <i
                          className="bi bi-play-fill fa fa-play"
                          onClick={() => handlePlayPause(index)}
                        ></i>
                      ) : (
                        index + 1
                      )}
                    </td>
                    <td className="text-white ms-2">
                      {track.img && (
                        <img
                          src={track.img}
                          alt="Image"
                          className="mr-2 w-9 h-8 inline-block"
                        />
                      )}
                      {track.title}
                    </td>
                    <td className="text-white ms-2">{track.album} </td>
                    <td className="text-white ms-2">{track.date} </td>
                    <td className="text-white ms-2">{track.time}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            </div>
             
            </div>
            <div className=" ms-72">
          <NowPlaying
            track={tracks.find((track) => track.id === currentTrackIndex)}
            isPlaying={isPlaying}
            togglePlay={() => handlePlayPause(currentTrackIndex)}
          />
        </div>
      </div>
              
     
      
        
      </>
    );
  }


  const S4= () => {
    const [isPlaying, setIsPlaying] = useState(false);
    const [currentTrackIndex, setCurrentTrackIndex] = useState(null);
    const [hoveredIndex, setHoveredIndex] = useState(null);
    const handlePlayPause = (index) => {
      const audio = document.getElementById('audioPlayer');
      const isSameTrack = currentTrackIndex === index;
    
      if (isPlaying && isSameTrack) {
        audio.pause();
      } else {
        audio.src = tracks[index].music;
        audio.play();
      }
    
      setIsPlaying(!isSameTrack || !isPlaying);
      setCurrentTrackIndex(index);
    
      // Store recently played track in local storage
      const recentlyPlayed = JSON.parse(localStorage.getItem('recentlyPlayed')) || [];
      recentlyPlayed.unshift(tracks[index]);
      localStorage.setItem('recentlyPlayed', JSON.stringify(recentlyPlayed.slice(0, 5))); // Store only the last 5 tracks
    };
  
    const [tracks, setTracks] = useState([
      {   id: 0,
        title: "Night changes",
        album: "Snow",
        date: "2024-01-18",
        time: "03:45",
        img: "https://i.scdn.co/image/ab67616d0000b273d304ba2d71de306812eebaf4",
        music: "./music1.mp3",
      },
      {
        id: 1,
        title: "Blank space",
        album: "Chithrum",
        date: "2024-01-19",
        time: "04:30",
        img: "https://i.scdn.co/image/ab67616d0000b2739abdf14e6058bd3903686148",
        music: "./Kiliye-Kiliye.mp3",
      },
      {
        id: 2,
        title: "Balcony",
        album: "Balcony",
        date: "2024-01-19",
        time: "04:30",
        img: "https://i.scdn.co/image/ab67616d0000b273629dc9e2e3bc20bbd7d92e4a",
        music: "./music2.mp3",
      },
      {
        id: 3,
        title: "Snake",
        album: "Taylor Snake",
        date: "2024-01-19",
        time: "04:30",
        img: "https://i.scdn.co/image/ab67616d0000b273aadb13ae608f6af20528409b",
        music: "./music3.mp3",
      },
      {
        id: 4,
        title: "Glow",
        album: "glow",
        date: "2024-01-19",
        time: "04:30",
        img: "https://i.scdn.co/image/ab67616d0000b273bdea30b86b37142ec99deb78",
        music: "./music4.mp3",
      },
      {
        id: 5,
        title: "Boy with luv",
        album: "Summer",
        date: "2024-01-19",
        time: "04:30",
        img: "https://i.scdn.co/image/ab67616d00001e0218d0ed4f969b376893f9a38f",
        music: "./music5.mp3",
      },{
        id: 6,
        title: "Snake",
        album: "Taylor Snake",
        date: "2024-01-19",
        time: "04:30",
        img: "https://i.scdn.co/image/ab67616d0000b273d7ef1ffbd2a5821152f35ce1",
        music: "./music6.mp3",
      },
      {
        id: 7,
        title: "Glow",
        album: "glow",
        date: "2024-01-19",
        time: "04:30",
        img: "https://e0.pxfuel.com/wallpapers/76/35/desktop-wallpaper-zoya-blodos-world-s-famous-singers-american-hot-and-actress-thumbnail.jpg",
        music: "./music7.mp3",
      },
      {
        id: 8,
        title: "Daffy",
        album: "Summer",
        date: "2024-01-19",
        time: "04:30",
        img: "https://www.musicianwave.com/wp-content/uploads/2022/04/Zayn-Malik-393x525.jpg",
        music: "./music8.mp3",
      },
      // Additional tracks...
      {
        id: 9,
        title: "Moonlight Sonata",
        album: "Classical Classics",
        date: "2024-01-20",
        time: "05:15",
        img: "https://fancyodds.com/wp-content/uploads/2021/08/Nicki-Minaj.jpg",
        music: "./music9.mp3",
      },
      {
        id: 10,
        title: "City Lights",
        album: "Urban Vibes",
        date: "2024-01-21",
        time: "03:55",
        img: "https://www.superprof.co.in/blog/wp-content/uploads/2023/03/image2-4.png",
        music: "./music10.mp3",
      },
      {
        id: 11,
        title: "Summer Breeze",
        album: "Seasonal Sounds",
        date: "2024-01-22",
        time: "04:10",
        img: "https://hi.letsdiskuss.com/assets/upl_files/bdeb8e0ead.jpg",
        music: "./music12.mp3",
      },
      {
        id: 12,
        title: "Eclipse",
        album: "Galactic Grooves",
        date: "2024-01-23",
        time: "04:45",
        img: "https://theindianeye.com/wp-content/uploads/2022/10/Shreya-1.jpg",
        music: "./music13.mp3",
      },
  
    ]);
  
  
    const navigate = useNavigate();
  
    return (
      <>
        <div className="container bg-black  w-full">
          <div className="row">
  
         
        <div className="sidebar bg-side">
            <div className="navigation bg-side2">
              <ul>
                <li>
                  <Link to="#" className="logo ms-16">
                    <img
                      src="https://storage.googleapis.com/pr-newsroom-wp/1/2018/11/Spotify_Logo_RGB_White.png"
                      className="mt-3"
                      alt="Logo"
                    />
                  </Link>
                  <Link to="#">
                    <h4 className="font-2 mt-3">
                      <i className="bi bi-house-door-fill"></i> Home
                    </h4>
                  </Link>
                </li>
  
                <li>
                <Link to="/search">
                    <h4 className="font-2">
                      <i className="bi bi-search"></i> Search
                    </h4>
                  </Link>
                </li>
              </ul>
            </div>
  
            <div className="navigation mt-5 bg-side2 ">
              <ul>
                <li>
                  <Link to="#">
                    <h4 className="font-2 ">
                      <i className="bi bi-collection-fill"></i> Your Library{" "}
                      <strong>
                        <i className="bi bi-plus-lg ms-16"></i>
                      </strong>
                    </h4>
                  </Link>
                </li>
              </ul>
              <div className="bg-side1 border-solid-side1 rounded-lg ms-2 me-2 pt-4">
                <ul>
                  <li>
                    <Link to="#">
                      <h4 className="font-2 ">Create Your First playlist</h4>
                    </Link>
                  </li>
  
                  <li>
                  <Link to="/play">
                      <button type="button" className="but">
                        <h4>Create Playlist</h4>
                      </button>
                   </Link>
                  </li>
                </ul>
              </div>
            </div>
  
            <div className="navigation bg-side2 ">
              <ul>
                <li>
                  <Link to="#" className="logo"></Link>
                  <Link to="#">
                    <h6 className="font-2 mt-3 me-10">Legal</h6>
                  </Link>
                  <Link to="#">
                    <h6 className="font-2 mt-3  me-10">Privacy Policy</h6>
                  </Link>
                  <Link to="#">
                    <h6 className="font-2 mt-3 me-10">Cookies</h6>
                  </Link>
                  <Link to="#">
                    <h6 className="font-2 mt-3 me-10">Accessibility</h6>
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <button type="button" className="butt">
                <i className="bi bi-globe"></i> English
              </button>
            </div>
          </div>
         
              <div className="grid grid-cols-2 bg-black">
              <div class="item ms-80 bg-gray-400 ">
              <img src="https://i.pinimg.com/564x/75/e0/03/75e0032dd8775071a93c0bf898f8af16.jpg" className="w-36 h-44 mt-8 ms-5 mb-5" />
  
                  </div>
                  <div className="bg-gray-400 ">
                      <p className="text-white">Playlist</p>
                      <h1 className="text-white text-7xl justify-items-center mt-12"> Dark & Stormy</h1>
                      <p className="text-white">Beautifully dark, dramatic tracks.</p>
                      <div id="logo2" className="me-10">
              <img src="https://www.freepnglogos.com/uploads/spotify-logo-png/spotify-icon-marilyn-scott-0.png"alt="Spotify-Logo" className="w-6"/>
              <h1 className="text-sm">Spotify</h1>
              <p className="text-white text-lg">1,637,003 likes100 songs, about 5 hr 30 min</p>
            </div>
                  </div>
              </div> 
              </div>
             
  
             
      <div className="row bg-gray-500 ms-80 h-32">
       <div className="grid grid-cols-1">
        <div class="play left ms-5 "> 
         <i class="bi bi-play-fill fa fa-play mt-5"></i> 
           <i class="bi bi-heart text-white text-3xl ms-20 mt-6 dot  "></i>
          <i class="bi bi-three-dots text-3xl ms-40 text-white mt-6  dot"></i>
       </div>     
       </div> 
      
          </div>
         
          <audio id="audioPlayer" />
          <div className="row bg-gray-500 ms-80 ">
          <div className="grid grid-cols-1">
            <table className="table">
              <thead >
                <tr >
                  <th className="text-white ms-32 th">
                    <i class="bi bi-hash text-white ms-5"></i>
                  </th>
                  <th className="text-white ms-32">Title</th>
                  <th className="text-white ms-32">Album</th>
                  <th className="text-white ms-32">Date</th>
                  <th className="text-white ms-32">
                    <i class="bi bi-clock text-white"></i>
                  </th>
                </tr>
              
              </thead>
  
              <tbody >
                {tracks.map((track, index) => (
                  <tr
                    key={index}
                    className={`cont hover:bg-gray-700 cursor-pointer ${
                      hoveredIndex === index ? 'hovered-row' : ''
                    }`}
                    onMouseEnter={() => setHoveredIndex(index)}
                    onMouseLeave={() => setHoveredIndex(null)}
                  >
                    <td className="text-white ms-72">
                      {hoveredIndex === index ? (
                        <i
                          className="bi bi-play-fill fa fa-play"
                          onClick={() => handlePlayPause(index)}
                        ></i>
                      ) : (
                        index + 1
                      )}
                    </td>
                    <td className="text-white ms-2">
                      {track.img && (
                        <img
                          src={track.img}
                          alt="Image"
                          className="mr-2 w-9 h-8 inline-block"
                        />
                      )}
                      {track.title}
                    </td>
                    <td className="text-white ms-2">{track.album} </td>
                    <td className="text-white ms-2">{track.date} </td>
                    <td className="text-white ms-2">{track.time}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            </div>
             
            </div>
            <div className=" ms-72">
          <NowPlaying
            track={tracks.find((track) => track.id === currentTrackIndex)}
            isPlaying={isPlaying}
            togglePlay={() => handlePlayPause(currentTrackIndex)}
          />
        </div>
      </div>
              
     
      
        
      </>
    );
  }
  
  const S5= () => {
    const [isPlaying, setIsPlaying] = useState(false);
    const [currentTrackIndex, setCurrentTrackIndex] = useState(null);
    const [hoveredIndex, setHoveredIndex] = useState(null);
  
  
    const handlePlayPause = (index) => {
      const audio = document.getElementById('audioPlayer');
      const isSameTrack = currentTrackIndex === index;
    
      if (isPlaying && isSameTrack) {
        audio.pause();
      } else {
        audio.src = tracks[index].music;
        audio.play();
      }
    
      setIsPlaying(!isSameTrack || !isPlaying);
      setCurrentTrackIndex(index);
    
      // Store recently played track in local storage
      const recentlyPlayed = JSON.parse(localStorage.getItem('recentlyPlayed')) || [];
      recentlyPlayed.unshift(tracks[index]);
      localStorage.setItem('recentlyPlayed', JSON.stringify(recentlyPlayed.slice(0, 5))); // Store only the last 5 tracks
    };
    const [tracks, setTracks] = useState([
      {   id: 0,
        title: "Night changes",
        album: "Snow",
        date: "2024-01-18",
        time: "03:45",
        img: "https://i.scdn.co/image/ab67616d0000b273d304ba2d71de306812eebaf4",
        music: "./music1.mp3",
      },
      {
        id: 1,
        title: "Blank space",
        album: "Chithrum",
        date: "2024-01-19",
        time: "04:30",
        img: "https://i.scdn.co/image/ab67616d0000b2739abdf14e6058bd3903686148",
        music: "./Kiliye-Kiliye.mp3",
      },
      {
        id: 2,
        title: "Balcony",
        album: "Balcony",
        date: "2024-01-19",
        time: "04:30",
        img: "https://i.scdn.co/image/ab67616d0000b273629dc9e2e3bc20bbd7d92e4a",
        music: "./music2.mp3",
      },
      {
        id: 3,
        title: "Snake",
        album: "Taylor Snake",
        date: "2024-01-19",
        time: "04:30",
        img: "https://i.scdn.co/image/ab67616d0000b273aadb13ae608f6af20528409b",
        music: "./music3.mp3",
      },
      {
        id: 4,
        title: "Glow",
        album: "glow",
        date: "2024-01-19",
        time: "04:30",
        img: "https://i.scdn.co/image/ab67616d0000b273bdea30b86b37142ec99deb78",
        music: "./music4.mp3",
      },
      {
        id: 5,
        title: "Boy with luv",
        album: "Summer",
        date: "2024-01-19",
        time: "04:30",
        img: "https://i.scdn.co/image/ab67616d00001e0218d0ed4f969b376893f9a38f",
        music: "./music5.mp3",
      },{
        id: 6,
        title: "Snake",
        album: "Taylor Snake",
        date: "2024-01-19",
        time: "04:30",
        img: "https://i.scdn.co/image/ab67616d0000b273d7ef1ffbd2a5821152f35ce1",
        music: "./music6.mp3",
      },
      {
        id: 7,
        title: "Glow",
        album: "glow",
        date: "2024-01-19",
        time: "04:30",
        img: "https://e0.pxfuel.com/wallpapers/76/35/desktop-wallpaper-zoya-blodos-world-s-famous-singers-american-hot-and-actress-thumbnail.jpg",
        music: "./music7.mp3",
      },
      {
        id: 8,
        title: "Daffy",
        album: "Summer",
        date: "2024-01-19",
        time: "04:30",
        img: "https://www.musicianwave.com/wp-content/uploads/2022/04/Zayn-Malik-393x525.jpg",
        music: "./music8.mp3",
      },
      // Additional tracks...
      {
        id: 9,
        title: "Moonlight Sonata",
        album: "Classical Classics",
        date: "2024-01-20",
        time: "05:15",
        img: "https://fancyodds.com/wp-content/uploads/2021/08/Nicki-Minaj.jpg",
        music: "./music9.mp3",
      },
      {
        id: 10,
        title: "City Lights",
        album: "Urban Vibes",
        date: "2024-01-21",
        time: "03:55",
        img: "https://www.superprof.co.in/blog/wp-content/uploads/2023/03/image2-4.png",
        music: "./music10.mp3",
      },
      {
        id: 11,
        title: "Summer Breeze",
        album: "Seasonal Sounds",
        date: "2024-01-22",
        time: "04:10",
        img: "https://hi.letsdiskuss.com/assets/upl_files/bdeb8e0ead.jpg",
        music: "./music12.mp3",
      },
      {
        id: 12,
        title: "Eclipse",
        album: "Galactic Grooves",
        date: "2024-01-23",
        time: "04:45",
        img: "https://theindianeye.com/wp-content/uploads/2022/10/Shreya-1.jpg",
        music: "./music13.mp3",
      },
  
    ]);
  
    const navigate = useNavigate();
  
    return (
      <>
        <div className="container bg-black  w-full">
          <div className="row">
  
         
        <div className="sidebar bg-side">
            <div className="navigation bg-side2">
              <ul>
                <li>
                  <Link to="#" className="logo ms-16">
                    <img
                      src="https://storage.googleapis.com/pr-newsroom-wp/1/2018/11/Spotify_Logo_RGB_White.png"
                      className="mt-3"
                      alt="Logo"
                    />
                  </Link>
                  <Link to="#">
                    <h4 className="font-2 mt-3">
                      <i className="bi bi-house-door-fill"></i> Home
                    </h4>
                  </Link>
                </li>
  
                <li>
                <Link to="/search">
                    <h4 className="font-2">
                      <i className="bi bi-search"></i> Search
                    </h4>
                  </Link>
                </li>
              </ul>
            </div>
  
            <div className="navigation mt-5 bg-side2 ">
              <ul>
                <li>
                  <Link to="#">
                    <h4 className="font-2 ">
                      <i className="bi bi-collection-fill"></i> Your Library{" "}
                      <strong>
                        <i className="bi bi-plus-lg ms-16"></i>
                      </strong>
                    </h4>
                  </Link>
                </li>
              </ul>
              <div className="bg-side1 border-solid-side1 rounded-lg ms-2 me-2 pt-4">
                <ul>
                  <li>
                    <Link to="#">
                      <h4 className="font-2 ">Create Your First playlist</h4>
                    </Link>
                  </li>
  
                  <li>
                  <Link to="/play">
                      <button type="button" className="but">
                        <h4>Create Playlist</h4>
                      </button>
                   </Link>
                  </li>
                </ul>
              </div>
            </div>
  
            <div className="navigation bg-side2 ">
              <ul>
                <li>
                  <Link to="#" className="logo"></Link>
                  <Link to="#">
                    <h6 className="font-2 mt-3 me-10">Legal</h6>
                  </Link>
                  <Link to="#">
                    <h6 className="font-2 mt-3  me-10">Privacy Policy</h6>
                  </Link>
                  <Link to="#">
                    <h6 className="font-2 mt-3 me-10">Cookies</h6>
                  </Link>
                  <Link to="#">
                    <h6 className="font-2 mt-3 me-10">Accessibility</h6>
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <button type="button" className="butt">
                <i className="bi bi-globe"></i> English
              </button>
            </div>
          </div>
         
              <div className="grid grid-cols-2 bg-black">
              <div class="item ms-80 bg-gray-400 ">
              <img src="https://i.pinimg.com/564x/1d/8c/bb/1d8cbbe231f4e8630eba66b4c92b465e.jpg" className="w-36 h-44 mt-8 ms-5 mb-5" />
  
                  </div>
                  <div className="bg-gray-400 ">
                      <p className="text-white">Playlist</p>
                      <h1 className="text-white text-7xl justify-items-center mt-12"> Dark & Stormy</h1>
                      <p className="text-white">Beautifully dark, dramatic tracks.</p>
                      <div id="logo2" className="me-10">
              <img src="https://www.freepnglogos.com/uploads/spotify-logo-png/spotify-icon-marilyn-scott-0.png"alt="Spotify-Logo" className="w-6"/>
              <h1 className="text-sm">Spotify</h1>
              <p className="text-white text-lg">1,637,003 likes100 songs, about 5 hr 30 min</p>
            </div>
                  </div>
              </div> 
              </div>
             
  
             
      <div className="row bg-gray-500 ms-80 h-32">
       <div className="grid grid-cols-1">
        <div class="play left ms-5 "> 
         <i class="bi bi-play-fill fa fa-play mt-5"></i> 
           <i class="bi bi-heart text-white text-3xl ms-20 mt-6 dot  "></i>
          <i class="bi bi-three-dots text-3xl ms-40 text-white mt-6  dot"></i>
       </div>     
       </div> 
      
          </div>
         
          <audio id="audioPlayer" />
          <div className="row bg-gray-500 ms-80 ">
          <div className="grid grid-cols-1">
            <table className="table">
              <thead >
                <tr >
                  <th className="text-white ms-32 th">
                    <i class="bi bi-hash text-white ms-5"></i>
                  </th>
                  <th className="text-white ms-32">Title</th>
                  <th className="text-white ms-32">Album</th>
                  <th className="text-white ms-32">Date</th>
                  <th className="text-white ms-32">
                    <i class="bi bi-clock text-white"></i>
                  </th>
                </tr>
              
              </thead>
  
              <tbody >
                {tracks.map((track, index) => (
                  <tr
                    key={index}
                    className={`cont hover:bg-gray-700 cursor-pointer ${
                      hoveredIndex === index ? 'hovered-row' : ''
                    }`}
                    onMouseEnter={() => setHoveredIndex(index)}
                    onMouseLeave={() => setHoveredIndex(null)}
                  >
                    <td className="text-white ms-72">
                      {hoveredIndex === index ? (
                        <i
                          className="bi bi-play-fill fa fa-play"
                          onClick={() => handlePlayPause(index)}
                        ></i>
                      ) : (
                        index + 1
                      )}
                    </td>
                    <td className="text-white ms-2">
                      {track.img && (
                        <img
                          src={track.img}
                          alt="Image"
                          className="mr-2 w-9 h-8 inline-block"
                        />
                      )}
                      {track.title}
                    </td>
                    <td className="text-white ms-2">{track.album} </td>
                    <td className="text-white ms-2">{track.date} </td>
                    <td className="text-white ms-2">{track.time}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            </div>
             
            </div>
            <div className=" ms-72">
          <NowPlaying
            track={tracks.find((track) => track.id === currentTrackIndex)}
            isPlaying={isPlaying}
            togglePlay={() => handlePlayPause(currentTrackIndex)}
          />
        </div>
      </div>
              
     
      
        
      </>
    );
  }
  const S6= () => {
    const [isPlaying, setIsPlaying] = useState(false);
    const [currentTrackIndex, setCurrentTrackIndex] = useState(null);
    const [hoveredIndex, setHoveredIndex] = useState(null);
  
    const handlePlayPause = (index) => {
      const audio = document.getElementById('audioPlayer');
      const isSameTrack = currentTrackIndex === index;
    
      if (isPlaying && isSameTrack) {
        audio.pause();
      } else {
        audio.src = tracks[index].music;
        audio.play();
      }
    
      setIsPlaying(!isSameTrack || !isPlaying);
      setCurrentTrackIndex(index);
    
      // Store recently played track in local storage
      const recentlyPlayed = JSON.parse(localStorage.getItem('recentlyPlayed')) || [];
      recentlyPlayed.unshift(tracks[index]);
      localStorage.setItem('recentlyPlayed', JSON.stringify(recentlyPlayed.slice(0, 5))); // Store only the last 5 tracks
    };
  
    const [tracks, setTracks] = useState([
      {   id: 0,
        title: "Night changes",
        album: "Snow",
        date: "2024-01-18",
        time: "03:45",
        img: "https://i.scdn.co/image/ab67616d0000b273d304ba2d71de306812eebaf4",
        music: "./music1.mp3",
      },
      {
        id: 1,
        title: "Blank space",
        album: "Chithrum",
        date: "2024-01-19",
        time: "04:30",
        img: "https://i.scdn.co/image/ab67616d0000b2739abdf14e6058bd3903686148",
        music: "./Kiliye-Kiliye.mp3",
      },
      {
        id: 2,
        title: "Balcony",
        album: "Balcony",
        date: "2024-01-19",
        time: "04:30",
        img: "https://i.scdn.co/image/ab67616d0000b273629dc9e2e3bc20bbd7d92e4a",
        music: "./music2.mp3",
      },
      {
        id: 3,
        title: "Snake",
        album: "Taylor Snake",
        date: "2024-01-19",
        time: "04:30",
        img: "https://i.scdn.co/image/ab67616d0000b273aadb13ae608f6af20528409b",
        music: "./music3.mp3",
      },
      {
        id: 4,
        title: "Glow",
        album: "glow",
        date: "2024-01-19",
        time: "04:30",
        img: "https://i.scdn.co/image/ab67616d0000b273bdea30b86b37142ec99deb78",
        music: "./music4.mp3",
      },
      {
        id: 5,
        title: "Boy with luv",
        album: "Summer",
        date: "2024-01-19",
        time: "04:30",
        img: "https://i.scdn.co/image/ab67616d00001e0218d0ed4f969b376893f9a38f",
        music: "./music5.mp3",
      },{
        id: 6,
        title: "Snake",
        album: "Taylor Snake",
        date: "2024-01-19",
        time: "04:30",
        img: "https://i.scdn.co/image/ab67616d0000b273d7ef1ffbd2a5821152f35ce1",
        music: "./music6.mp3",
      },
      {
        id: 7,
        title: "Glow",
        album: "glow",
        date: "2024-01-19",
        time: "04:30",
        img: "https://e0.pxfuel.com/wallpapers/76/35/desktop-wallpaper-zoya-blodos-world-s-famous-singers-american-hot-and-actress-thumbnail.jpg",
        music: "./music7.mp3",
      },
      {
        id: 8,
        title: "Daffy",
        album: "Summer",
        date: "2024-01-19",
        time: "04:30",
        img: "https://www.musicianwave.com/wp-content/uploads/2022/04/Zayn-Malik-393x525.jpg",
        music: "./music8.mp3",
      },
      // Additional tracks...
      {
        id: 9,
        title: "Moonlight Sonata",
        album: "Classical Classics",
        date: "2024-01-20",
        time: "05:15",
        img: "https://fancyodds.com/wp-content/uploads/2021/08/Nicki-Minaj.jpg",
        music: "./music9.mp3",
      },
      {
        id: 10,
        title: "City Lights",
        album: "Urban Vibes",
        date: "2024-01-21",
        time: "03:55",
        img: "https://www.superprof.co.in/blog/wp-content/uploads/2023/03/image2-4.png",
        music: "./music10.mp3",
      },
      {
        id: 11,
        title: "Summer Breeze",
        album: "Seasonal Sounds",
        date: "2024-01-22",
        time: "04:10",
        img: "https://hi.letsdiskuss.com/assets/upl_files/bdeb8e0ead.jpg",
        music: "./music12.mp3",
      },
      {
        id: 12,
        title: "Eclipse",
        album: "Galactic Grooves",
        date: "2024-01-23",
        time: "04:45",
        img: "https://theindianeye.com/wp-content/uploads/2022/10/Shreya-1.jpg",
        music: "./music13.mp3",
      },
  
    ]);
  
  
    const navigate = useNavigate();
  
    return (
      <>
        <div className="container bg-black  w-full">
          <div className="row">
  
         
        <div className="sidebar bg-side">
            <div className="navigation bg-side2">
              <ul>
                <li>
                  <Link to="#" className="logo ms-16">
                    <img
                      src="https://storage.googleapis.com/pr-newsroom-wp/1/2018/11/Spotify_Logo_RGB_White.png"
                      className="mt-3"
                      alt="Logo"
                    />
                  </Link>
                  <Link to="#">
                    <h4 className="font-2 mt-3">
                      <i className="bi bi-house-door-fill"></i> Home
                    </h4>
                  </Link>
                </li>
  
                <li>
                <Link to="/search">
                    <h4 className="font-2">
                      <i className="bi bi-search"></i> Search
                    </h4>
                  </Link>
                </li>
              </ul>
            </div>
  
            <div className="navigation mt-5 bg-side2 ">
              <ul>
                <li>
                  <Link to="#">
                    <h4 className="font-2 ">
                      <i className="bi bi-collection-fill"></i> Your Library{" "}
                      <strong>
                        <i className="bi bi-plus-lg ms-16"></i>
                      </strong>
                    </h4>
                  </Link>
                </li>
              </ul>
              <div className="bg-side1 border-solid-side1 rounded-lg ms-2 me-2 pt-4">
                <ul>
                  <li>
                    <Link to="#">
                      <h4 className="font-2 ">Create Your First playlist</h4>
                    </Link>
                  </li>
  
                  <li>
                  <Link to="/play">
                      <button type="button" className="but">
                        <h4>Create Playlist</h4>
                      </button>
                   </Link>
                  </li>
                </ul>
              </div>
            </div>
  
            <div className="navigation bg-side2 ">
              <ul>
                <li>
                  <Link to="#" className="logo"></Link>
                  <Link to="#">
                    <h6 className="font-2 mt-3 me-10">Legal</h6>
                  </Link>
                  <Link to="#">
                    <h6 className="font-2 mt-3  me-10">Privacy Policy</h6>
                  </Link>
                  <Link to="#">
                    <h6 className="font-2 mt-3 me-10">Cookies</h6>
                  </Link>
                  <Link to="#">
                    <h6 className="font-2 mt-3 me-10">Accessibility</h6>
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <button type="button" className="butt">
                <i className="bi bi-globe"></i> English
              </button>
            </div>
          </div>
         
              <div className="grid grid-cols-2 bg-black">
              <div class="item ms-80 bg-gray-400 ">
              <img src="https://i.pinimg.com/564x/1a/fd/65/1afd6524d1bb543d93a1012908181263.jpg" className="w-36 h-44 mt-8 ms-5 mb-5" />
  
                  </div>
                  <div className="bg-gray-400 ">
                      <p className="text-white">Playlist</p>
                      <h1 className="text-white text-7xl justify-items-center mt-12"> Dark & Stormy</h1>
                      <p className="text-white">Beautifully dark, dramatic tracks.</p>
                      <div id="logo2" className="me-10">
              <img src="https://www.freepnglogos.com/uploads/spotify-logo-png/spotify-icon-marilyn-scott-0.png"alt="Spotify-Logo" className="w-6"/>
              <h1 className="text-sm">Spotify</h1>
              <p className="text-white text-lg">1,637,003 likes100 songs, about 5 hr 30 min</p>
            </div>
                  </div>
              </div> 
              </div>
             
  
             
      <div className="row bg-gray-500 ms-80 h-32">
       <div className="grid grid-cols-1">
        <div class="play left ms-5 "> 
         <i class="bi bi-play-fill fa fa-play mt-5"></i> 
           <i class="bi bi-heart text-white text-3xl ms-20 mt-6 dot  "></i>
          <i class="bi bi-three-dots text-3xl ms-40 text-white mt-6  dot"></i>
       </div>     
       </div> 
      
          </div>
         
          <audio id="audioPlayer" />
          <div className="row bg-gray-500 ms-80 ">
          <div className="grid grid-cols-1">
            <table className="table">
              <thead >
                <tr >
                  <th className="text-white ms-32 th">
                    <i class="bi bi-hash text-white ms-5"></i>
                  </th>
                  <th className="text-white ms-32">Title</th>
                  <th className="text-white ms-32">Album</th>
                  <th className="text-white ms-32">Date</th>
                  <th className="text-white ms-32">
                    <i class="bi bi-clock text-white"></i>
                  </th>
                </tr>
              
              </thead>
  
              <tbody >
                {tracks.map((track, index) => (
                  <tr
                    key={index}
                    className={`cont hover:bg-gray-700 cursor-pointer ${
                      hoveredIndex === index ? 'hovered-row' : ''
                    }`}
                    onMouseEnter={() => setHoveredIndex(index)}
                    onMouseLeave={() => setHoveredIndex(null)}
                  >
                    <td className="text-white ms-72">
                      {hoveredIndex === index ? (
                        <i
                          className="bi bi-play-fill fa fa-play"
                          onClick={() => handlePlayPause(index)}
                        ></i>
                      ) : (
                        index + 1
                      )}
                    </td>
                    <td className="text-white ms-2">
                      {track.img && (
                        <img
                          src={track.img}
                          alt="Image"
                          className="mr-2 w-9 h-8 inline-block"
                        />
                      )}
                      {track.title}
                    </td>
                    <td className="text-white ms-2">{track.album} </td>
                    <td className="text-white ms-2">{track.date} </td>
                    <td className="text-white ms-2">{track.time}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            </div>
             
            </div>
            <div className=" ms-72">
          <NowPlaying
            track={tracks.find((track) => track.id === currentTrackIndex)}
            isPlaying={isPlaying}
            togglePlay={() => handlePlayPause(currentTrackIndex)}
          />
        </div>
      </div>
              
     
      
        
      </>
    );
  }
export {S1,S2,S3,S4,S5,S6};