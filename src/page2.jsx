import React from "react";
import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import "./scroll.css"
import NowPlaying from "./nowplaying.jsx";
import songData from "./song.jsx";

const Page1= () => {
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
    {
      id: 0,
      title: "Who's Driving",
      album: "Snow",
      date: "2024-01-18",
      time: "03:45",
      img: "https://storage.googleapis.com/wordpress-kpopontrack-byspotify-com/1/2023/07/Spotify-K-Pop-ON-2.jpg",
      music: "./music1.mp3",
    },
    {
      id: 1,
      title: "Warning",
      album: "Chithrum",
      date: "2024-01-19",
      time: "04:30",
      img: "https://i.scdn.co/image/ab67706c0000da84104cea425ef9e38506e88f03",
      music: "./Kiliye-Kiliye.mp3",
    },
    {
      id: 2,
      title: "Balcony",
      album: "Balcony",
      date: "2024-01-19",
      time: "04:30",
      img: "https://i.pinimg.com/736x/36/c5/22/36c522242c63ec407647ec7ce16aab48.jpg",
      music: "./music2.mp3",
    },
    {
      id: 3,
      title: "Snake",
      album: "Taylor Snake",
      date: "2024-01-19",
      time: "04:30",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSp2ArEiI_WBiHXR8byVMlGJLxoKH88ZuHfHA&usqp=CAU",
      music: "./music3.mp3",
    },
    {
      id: 4,
      title: "Glow",
      album: "glow",
      date: "2024-01-19",
      time: "04:30",
      img: "https://i.scdn.co/image/ab6761610000e5eb4fa5aea5675eb2035ccf43fd",
      music: "./music4.mp3",
    },
    {
      id: 5,
      title: "Daffy",
      album: "Summer",
      date: "2024-01-19",
      time: "04:30",
      img: "https://voguesg.s3.ap-southeast-1.amazonaws.com/wp-content/uploads/2023/07/08190359/banner-newjeanssupershy-680x1020.jpg",
      music: "./music5.mp3",
    },{
      id: 6,
      title: "Snake",
      album: "Taylor Snake",
      date: "2024-01-19",
      time: "04:30",
      img: "https://i.scdn.co/image/ab6761610000e5ebf5d2200231e6ad75e8485476",
      music: "./music6.mp3",
    },
    {
      id: 7,
      title: "Glow",
      album: "glow",
      date: "2024-01-19",
      time: "04:30",
      img: "https://i.scdn.co/image/ab67616d00001e02355bb5ca71fe89b9720a535b",
      music: "./music7.mp3",
    },
    {
      id: 8,
      title: "Daffy",
      album: "Summer",
      date: "2024-01-19",
      time: "04:30",
      img: "https://i.scdn.co/image/ab67706c0000da84bf11720cfd306d848572950c",
      music: "./music8.mp3",
    },
    // Additional tracks...
    {
      id: 9,
      title: "Moonlight Sonata",
      album: "Classical Classics",
      date: "2024-01-20",
      time: "05:15",
      img: "https://i.scdn.co/image/ab67706c0000da84664eeeda04edbcf88c29f931",
      music: "./music9.mp3",
    },
    {
      id: 10,
      title: "City Lights",
      album: "Urban Vibes",
      date: "2024-01-21",
      time: "03:55",
      img: "https://i.scdn.co/image/ab67616d0000b273aabacdacfb6eceeb819c6ed6",
      music: "./music10.mp3",
    },
    {
      id: 11,
      title: "Summer Breeze",
      album: "Seasonal Sounds",
      date: "2024-01-22",
      time: "04:10",
      img: "https://static.tnn.in/thumb/msid-104244079,thumbsize-995302,width-1280,height-720,resizemode-75/104244079.jpg",
      music: "./music12.mp3",
    },
    {
      id: 12,
      title: "Eclipse",
      album: "Galactic Grooves",
      date: "2024-01-23",
      time: "04:45",
      img: "https://i.scdn.co/image/ab6761610000517459f8cfc8e71dcaf8c6ec4bde",
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
            <img src="https://i.pinimg.com/736x/34/75/ff/3475ffa0216b7733b33657b6754f9c07.jpg" className="w-36 h-44 mt-8 ms-5 mb-5" />

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

const Page33= () => {
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
      {
        id: 0,
        title: "Who's Driving",
        album: "Snow",
        date: "2024-01-18",
        time: "03:45",
        img: "https://storage.googleapis.com/wordpress-kpopontrack-byspotify-com/1/2023/07/Spotify-K-Pop-ON-2.jpg",
        music: "./music1.mp3",
      },
      {
        id: 1,
        title: "Warning",
        album: "Chithrum",
        date: "2024-01-19",
        time: "04:30",
        img: "https://i.scdn.co/image/ab67706c0000da84104cea425ef9e38506e88f03",
        music: "./Kiliye-Kiliye.mp3",
      },
      {
        id: 2,
        title: "Balcony",
        album: "Balcony",
        date: "2024-01-19",
        time: "04:30",
        img: "https://i.pinimg.com/736x/36/c5/22/36c522242c63ec407647ec7ce16aab48.jpg",
        music: "./music2.mp3",
      },
      {
        id: 3,
        title: "Snake",
        album: "Taylor Snake",
        date: "2024-01-19",
        time: "04:30",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSp2ArEiI_WBiHXR8byVMlGJLxoKH88ZuHfHA&usqp=CAU",
        music: "./music3.mp3",
      },
      {
        id: 4,
        title: "Glow",
        album: "glow",
        date: "2024-01-19",
        time: "04:30",
        img: "https://i.scdn.co/image/ab6761610000e5eb4fa5aea5675eb2035ccf43fd",
        music: "./music4.mp3",
      },
      {
        id: 5,
        title: "Daffy",
        album: "Summer",
        date: "2024-01-19",
        time: "04:30",
        img: "https://voguesg.s3.ap-southeast-1.amazonaws.com/wp-content/uploads/2023/07/08190359/banner-newjeanssupershy-680x1020.jpg",
        music: "./music5.mp3",
      },{
        id: 6,
        title: "Snake",
        album: "Taylor Snake",
        date: "2024-01-19",
        time: "04:30",
        img: "https://i.scdn.co/image/ab6761610000e5ebf5d2200231e6ad75e8485476",
        music: "./music6.mp3",
      },
      {
        id: 7,
        title: "Glow",
        album: "glow",
        date: "2024-01-19",
        time: "04:30",
        img: "https://i.scdn.co/image/ab67616d00001e02355bb5ca71fe89b9720a535b",
        music: "./music7.mp3",
      },
      {
        id: 8,
        title: "Daffy",
        album: "Summer",
        date: "2024-01-19",
        time: "04:30",
        img: "https://i.scdn.co/image/ab67706c0000da84bf11720cfd306d848572950c",
        music: "./music8.mp3",
      },
      // Additional tracks...
      {
        id: 9,
        title: "Moonlight Sonata",
        album: "Classical Classics",
        date: "2024-01-20",
        time: "05:15",
        img: "https://i.scdn.co/image/ab67706c0000da84664eeeda04edbcf88c29f931",
        music: "./music9.mp3",
      },
      {
        id: 10,
        title: "City Lights",
        album: "Urban Vibes",
        date: "2024-01-21",
        time: "03:55",
        img: "https://i.scdn.co/image/ab67616d0000b273aabacdacfb6eceeb819c6ed6",
        music: "./music10.mp3",
      },
      {
        id: 11,
        title: "Summer Breeze",
        album: "Seasonal Sounds",
        date: "2024-01-22",
        time: "04:10",
        img: "https://static.tnn.in/thumb/msid-104244079,thumbsize-995302,width-1280,height-720,resizemode-75/104244079.jpg",
        music: "./music12.mp3",
      },
      {
        id: 12,
        title: "Eclipse",
        album: "Galactic Grooves",
        date: "2024-01-23",
        time: "04:45",
        img: "https://i.scdn.co/image/ab6761610000517459f8cfc8e71dcaf8c6ec4bde",
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
              <img src="https://i.pinimg.com/564x/73/43/2a/73432a5c3cc4d00fa707e7e3f1be517d.jpg" className="w-36 h-44 mt-8 ms-5 mb-5" />
  
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

  const Page22= () => {
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
      {
        id: 0,
        title: "Who's Driving",
        album: "Snow",
        date: "2024-01-18",
        time: "03:45",
        img: "https://storage.googleapis.com/wordpress-kpopontrack-byspotify-com/1/2023/07/Spotify-K-Pop-ON-2.jpg",
        music: "./music1.mp3",
      },
      {
        id: 1,
        title: "Warning",
        album: "Chithrum",
        date: "2024-01-19",
        time: "04:30",
        img: "https://i.scdn.co/image/ab67706c0000da84104cea425ef9e38506e88f03",
        music: "./Kiliye-Kiliye.mp3",
      },
      {
        id: 2,
        title: "Balcony",
        album: "Balcony",
        date: "2024-01-19",
        time: "04:30",
        img: "https://i.pinimg.com/736x/36/c5/22/36c522242c63ec407647ec7ce16aab48.jpg",
        music: "./music2.mp3",
      },
      {
        id: 3,
        title: "Snake",
        album: "Taylor Snake",
        date: "2024-01-19",
        time: "04:30",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSp2ArEiI_WBiHXR8byVMlGJLxoKH88ZuHfHA&usqp=CAU",
        music: "./music3.mp3",
      },
      {
        id: 4,
        title: "Glow",
        album: "glow",
        date: "2024-01-19",
        time: "04:30",
        img: "https://i.scdn.co/image/ab6761610000e5eb4fa5aea5675eb2035ccf43fd",
        music: "./music4.mp3",
      },
      {
        id: 5,
        title: "Daffy",
        album: "Summer",
        date: "2024-01-19",
        time: "04:30",
        img: "https://voguesg.s3.ap-southeast-1.amazonaws.com/wp-content/uploads/2023/07/08190359/banner-newjeanssupershy-680x1020.jpg",
        music: "./music5.mp3",
      },{
        id: 6,
        title: "Snake",
        album: "Taylor Snake",
        date: "2024-01-19",
        time: "04:30",
        img: "https://i.scdn.co/image/ab6761610000e5ebf5d2200231e6ad75e8485476",
        music: "./music6.mp3",
      },
      {
        id: 7,
        title: "Glow",
        album: "glow",
        date: "2024-01-19",
        time: "04:30",
        img: "https://i.scdn.co/image/ab67616d00001e02355bb5ca71fe89b9720a535b",
        music: "./music7.mp3",
      },
      {
        id: 8,
        title: "Daffy",
        album: "Summer",
        date: "2024-01-19",
        time: "04:30",
        img: "https://i.scdn.co/image/ab67706c0000da84bf11720cfd306d848572950c",
        music: "./music8.mp3",
      },
      // Additional tracks...
      {
        id: 9,
        title: "Moonlight Sonata",
        album: "Classical Classics",
        date: "2024-01-20",
        time: "05:15",
        img: "https://i.scdn.co/image/ab67706c0000da84664eeeda04edbcf88c29f931",
        music: "./music9.mp3",
      },
      {
        id: 10,
        title: "City Lights",
        album: "Urban Vibes",
        date: "2024-01-21",
        time: "03:55",
        img: "https://i.scdn.co/image/ab67616d0000b273aabacdacfb6eceeb819c6ed6",
        music: "./music10.mp3",
      },
      {
        id: 11,
        title: "Summer Breeze",
        album: "Seasonal Sounds",
        date: "2024-01-22",
        time: "04:10",
        img: "https://static.tnn.in/thumb/msid-104244079,thumbsize-995302,width-1280,height-720,resizemode-75/104244079.jpg",
        music: "./music12.mp3",
      },
      {
        id: 12,
        title: "Eclipse",
        album: "Galactic Grooves",
        date: "2024-01-23",
        time: "04:45",
        img: "https://i.scdn.co/image/ab6761610000517459f8cfc8e71dcaf8c6ec4bde",
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
              <img src="https://i.pinimg.com/564x/8e/08/95/8e08958ca6d4a6b698c25a2abfb73d66.jpg" className="w-36 h-44 mt-8 ms-5 mb-5" />
  
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


  const Page44= () => {
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
      {
        id: 0,
        title: "Who's Driving",
        album: "Snow",
        date: "2024-01-18",
        time: "03:45",
        img: "https://storage.googleapis.com/wordpress-kpopontrack-byspotify-com/1/2023/07/Spotify-K-Pop-ON-2.jpg",
        music: "./music1.mp3",
      },
      {
        id: 1,
        title: "Warning",
        album: "Chithrum",
        date: "2024-01-19",
        time: "04:30",
        img: "https://i.scdn.co/image/ab67706c0000da84104cea425ef9e38506e88f03",
        music: "./Kiliye-Kiliye.mp3",
      },
      {
        id: 2,
        title: "Balcony",
        album: "Balcony",
        date: "2024-01-19",
        time: "04:30",
        img: "https://i.pinimg.com/736x/36/c5/22/36c522242c63ec407647ec7ce16aab48.jpg",
        music: "./music2.mp3",
      },
      {
        id: 3,
        title: "Snake",
        album: "Taylor Snake",
        date: "2024-01-19",
        time: "04:30",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSp2ArEiI_WBiHXR8byVMlGJLxoKH88ZuHfHA&usqp=CAU",
        music: "./music3.mp3",
      },
      {
        id: 4,
        title: "Glow",
        album: "glow",
        date: "2024-01-19",
        time: "04:30",
        img: "https://i.scdn.co/image/ab6761610000e5eb4fa5aea5675eb2035ccf43fd",
        music: "./music4.mp3",
      },
      {
        id: 5,
        title: "Daffy",
        album: "Summer",
        date: "2024-01-19",
        time: "04:30",
        img: "https://voguesg.s3.ap-southeast-1.amazonaws.com/wp-content/uploads/2023/07/08190359/banner-newjeanssupershy-680x1020.jpg",
        music: "./music5.mp3",
      },{
        id: 6,
        title: "Snake",
        album: "Taylor Snake",
        date: "2024-01-19",
        time: "04:30",
        img: "https://i.scdn.co/image/ab6761610000e5ebf5d2200231e6ad75e8485476",
        music: "./music6.mp3",
      },
      {
        id: 7,
        title: "Glow",
        album: "glow",
        date: "2024-01-19",
        time: "04:30",
        img: "https://i.scdn.co/image/ab67616d00001e02355bb5ca71fe89b9720a535b",
        music: "./music7.mp3",
      },
      {
        id: 8,
        title: "Daffy",
        album: "Summer",
        date: "2024-01-19",
        time: "04:30",
        img: "https://i.scdn.co/image/ab67706c0000da84bf11720cfd306d848572950c",
        music: "./music8.mp3",
      },
      // Additional tracks...
      {
        id: 9,
        title: "Moonlight Sonata",
        album: "Classical Classics",
        date: "2024-01-20",
        time: "05:15",
        img: "https://i.scdn.co/image/ab67706c0000da84664eeeda04edbcf88c29f931",
        music: "./music9.mp3",
      },
      {
        id: 10,
        title: "City Lights",
        album: "Urban Vibes",
        date: "2024-01-21",
        time: "03:55",
        img: "https://i.scdn.co/image/ab67616d0000b273aabacdacfb6eceeb819c6ed6",
        music: "./music10.mp3",
      },
      {
        id: 11,
        title: "Summer Breeze",
        album: "Seasonal Sounds",
        date: "2024-01-22",
        time: "04:10",
        img: "https://static.tnn.in/thumb/msid-104244079,thumbsize-995302,width-1280,height-720,resizemode-75/104244079.jpg",
        music: "./music12.mp3",
      },
      {
        id: 12,
        title: "Eclipse",
        album: "Galactic Grooves",
        date: "2024-01-23",
        time: "04:45",
        img: "https://i.scdn.co/image/ab6761610000517459f8cfc8e71dcaf8c6ec4bde",
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
              <img src="https://i.pinimg.com/564x/f9/7b/28/f97b2847437d19e3594f3034d0bc3825.jpg" className="w-36 h-44 mt-8 ms-5 mb-5" />
  
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
  
  const Page55= () => {
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
      {
        id: 0,
        title: "Who's Driving",
        album: "Snow",
        date: "2024-01-18",
        time: "03:45",
        img: "https://storage.googleapis.com/wordpress-kpopontrack-byspotify-com/1/2023/07/Spotify-K-Pop-ON-2.jpg",
        music: "./music1.mp3",
      },
      {
        id: 1,
        title: "Warning",
        album: "Chithrum",
        date: "2024-01-19",
        time: "04:30",
        img: "https://i.scdn.co/image/ab67706c0000da84104cea425ef9e38506e88f03",
        music: "./Kiliye-Kiliye.mp3",
      },
      {
        id: 2,
        title: "Balcony",
        album: "Balcony",
        date: "2024-01-19",
        time: "04:30",
        img: "https://i.pinimg.com/736x/36/c5/22/36c522242c63ec407647ec7ce16aab48.jpg",
        music: "./music2.mp3",
      },
      {
        id: 3,
        title: "Snake",
        album: "Taylor Snake",
        date: "2024-01-19",
        time: "04:30",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSp2ArEiI_WBiHXR8byVMlGJLxoKH88ZuHfHA&usqp=CAU",
        music: "./music3.mp3",
      },
      {
        id: 4,
        title: "Glow",
        album: "glow",
        date: "2024-01-19",
        time: "04:30",
        img: "https://i.scdn.co/image/ab6761610000e5eb4fa5aea5675eb2035ccf43fd",
        music: "./music4.mp3",
      },
      {
        id: 5,
        title: "Daffy",
        album: "Summer",
        date: "2024-01-19",
        time: "04:30",
        img: "https://voguesg.s3.ap-southeast-1.amazonaws.com/wp-content/uploads/2023/07/08190359/banner-newjeanssupershy-680x1020.jpg",
        music: "./music5.mp3",
      },{
        id: 6,
        title: "Snake",
        album: "Taylor Snake",
        date: "2024-01-19",
        time: "04:30",
        img: "https://i.scdn.co/image/ab6761610000e5ebf5d2200231e6ad75e8485476",
        music: "./music6.mp3",
      },
      {
        id: 7,
        title: "Glow",
        album: "glow",
        date: "2024-01-19",
        time: "04:30",
        img: "https://i.scdn.co/image/ab67616d00001e02355bb5ca71fe89b9720a535b",
        music: "./music7.mp3",
      },
      {
        id: 8,
        title: "Daffy",
        album: "Summer",
        date: "2024-01-19",
        time: "04:30",
        img: "https://i.scdn.co/image/ab67706c0000da84bf11720cfd306d848572950c",
        music: "./music8.mp3",
      },
      // Additional tracks...
      {
        id: 9,
        title: "Moonlight Sonata",
        album: "Classical Classics",
        date: "2024-01-20",
        time: "05:15",
        img: "https://i.scdn.co/image/ab67706c0000da84664eeeda04edbcf88c29f931",
        music: "./music9.mp3",
      },
      {
        id: 10,
        title: "City Lights",
        album: "Urban Vibes",
        date: "2024-01-21",
        time: "03:55",
        img: "https://i.scdn.co/image/ab67616d0000b273aabacdacfb6eceeb819c6ed6",
        music: "./music10.mp3",
      },
      {
        id: 11,
        title: "Summer Breeze",
        album: "Seasonal Sounds",
        date: "2024-01-22",
        time: "04:10",
        img: "https://static.tnn.in/thumb/msid-104244079,thumbsize-995302,width-1280,height-720,resizemode-75/104244079.jpg",
        music: "./music12.mp3",
      },
      {
        id: 12,
        title: "Eclipse",
        album: "Galactic Grooves",
        date: "2024-01-23",
        time: "04:45",
        img: "https://i.scdn.co/image/ab6761610000517459f8cfc8e71dcaf8c6ec4bde",
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
              <img src="https://i.pinimg.com/564x/14/7b/4d/147b4d5c6d6fece5caedc872aae24a57.jpg" className="w-36 h-44 mt-8 ms-5 mb-5" />
  
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
  const Page66= () => {
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
      {
        id: 0,
        title: "Who's Driving",
        album: "Snow",
        date: "2024-01-18",
        time: "03:45",
        img: "https://storage.googleapis.com/wordpress-kpopontrack-byspotify-com/1/2023/07/Spotify-K-Pop-ON-2.jpg",
        music: "./music1.mp3",
      },
      {
        id: 1,
        title: "Warning",
        album: "Chithrum",
        date: "2024-01-19",
        time: "04:30",
        img: "https://i.scdn.co/image/ab67706c0000da84104cea425ef9e38506e88f03",
        music: "./Kiliye-Kiliye.mp3",
      },
      {
        id: 2,
        title: "Balcony",
        album: "Balcony",
        date: "2024-01-19",
        time: "04:30",
        img: "https://i.pinimg.com/736x/36/c5/22/36c522242c63ec407647ec7ce16aab48.jpg",
        music: "./music2.mp3",
      },
      {
        id: 3,
        title: "Snake",
        album: "Taylor Snake",
        date: "2024-01-19",
        time: "04:30",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSp2ArEiI_WBiHXR8byVMlGJLxoKH88ZuHfHA&usqp=CAU",
        music: "./music3.mp3",
      },
      {
        id: 4,
        title: "Glow",
        album: "glow",
        date: "2024-01-19",
        time: "04:30",
        img: "https://i.scdn.co/image/ab6761610000e5eb4fa5aea5675eb2035ccf43fd",
        music: "./music4.mp3",
      },
      {
        id: 5,
        title: "Daffy",
        album: "Summer",
        date: "2024-01-19",
        time: "04:30",
        img: "https://voguesg.s3.ap-southeast-1.amazonaws.com/wp-content/uploads/2023/07/08190359/banner-newjeanssupershy-680x1020.jpg",
        music: "./music5.mp3",
      },{
        id: 6,
        title: "Snake",
        album: "Taylor Snake",
        date: "2024-01-19",
        time: "04:30",
        img: "https://i.scdn.co/image/ab6761610000e5ebf5d2200231e6ad75e8485476",
        music: "./music6.mp3",
      },
      {
        id: 7,
        title: "Glow",
        album: "glow",
        date: "2024-01-19",
        time: "04:30",
        img: "https://i.scdn.co/image/ab67616d00001e02355bb5ca71fe89b9720a535b",
        music: "./music7.mp3",
      },
      {
        id: 8,
        title: "Daffy",
        album: "Summer",
        date: "2024-01-19",
        time: "04:30",
        img: "https://i.scdn.co/image/ab67706c0000da84bf11720cfd306d848572950c",
        music: "./music8.mp3",
      },
      // Additional tracks...
      {
        id: 9,
        title: "Moonlight Sonata",
        album: "Classical Classics",
        date: "2024-01-20",
        time: "05:15",
        img: "https://i.scdn.co/image/ab67706c0000da84664eeeda04edbcf88c29f931",
        music: "./music9.mp3",
      },
      {
        id: 10,
        title: "City Lights",
        album: "Urban Vibes",
        date: "2024-01-21",
        time: "03:55",
        img: "https://i.scdn.co/image/ab67616d0000b273aabacdacfb6eceeb819c6ed6",
        music: "./music10.mp3",
      },
      {
        id: 11,
        title: "Summer Breeze",
        album: "Seasonal Sounds",
        date: "2024-01-22",
        time: "04:10",
        img: "https://static.tnn.in/thumb/msid-104244079,thumbsize-995302,width-1280,height-720,resizemode-75/104244079.jpg",
        music: "./music12.mp3",
      },
      {
        id: 12,
        title: "Eclipse",
        album: "Galactic Grooves",
        date: "2024-01-23",
        time: "04:45",
        img: "https://i.scdn.co/image/ab6761610000517459f8cfc8e71dcaf8c6ec4bde",
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
              <img src="https://i.pinimg.com/564x/4b/47/53/4b475393e386f4a4d1f6cadc9a0e47ba.jpg" className="w-36 h-44 mt-8 ms-5 mb-5" />
  
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
export {Page1,Page22,Page33,Page44,Page55,Page66};