import React from "react";
import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import "./scroll.css"
import songData from "./song.jsx";
import NowPlaying from "./nowplaying.jsx";
const Scroll = () => {
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
      img: "https://img.mensxp.com/media/content/2020/Apr/Leading-B-Wood-Singers-Who-Lost-On-Reality-Shows1200_5ea7d3e1ba5f2.jpeg",
      music: "./music1.mp3",
    },
    {
      id: 1,
      title: "Kiliye",
      album: "Chithrum",
      date: "2024-01-19",
      time: "04:30",
      img: "https://images.indulgexpress.com/uploads/user/imagelibrary/2023/6/29/original/InFrameKSChithra.jpg",
      music: "./Kiliye-Kiliye.mp3",
    },
    {
      id: 2,
      title: "Balcony",
      album: "Balcony",
      date: "2024-01-19",
      time: "04:30",
      img: "https://images.saymedia-content.com/.image/ar_1:1%2Cc_fill%2Ccs_srgb%2Cfl_progressive%2Cq_auto:eco%2Cw_1200/MTg2MTA4Njk5MDQxODY2ODgx/top-5-hottest-young-singers-today.jpg",
      music: "./music2.mp3",
    },
    {
      id: 3,
      title: "December",
      album: "Taylor Snake",
      date: "2024-01-19",
      time: "04:30",
      img: "https://i.scdn.co/image/ab6761610000e5eb859e4c14fa59296c8649e0e4",
      music: "./music3.mp3",
    },
    {
      id: 4,
      title: "Remenber",
      album: "glow",
      date: "2024-01-19",
      time: "04:30",
      img: "https://pbs.twimg.com/media/F5LsJWCXYAAvTNU?format=jpg&name=4096x4096",
      music: "./music4.mp3",
    },
    {
      id: 5,
      title: "Daffy",
      album: "Summer",
      date: "2024-01-19",
      time: "04:30",
      img: "https://www.musicianwave.com/wp-content/uploads/2022/04/Zayn-Malik-393x525.jpg",
      music: "./music5.mp3",
    },{
      id: 6,
      title: "Snake",
      album: "Taylor Snake",
      date: "2024-01-19",
      time: "04:30",
      img: "https://samacharlagatar.com/wp-content/uploads/2023/09/5-hollywood-singers-who-became-acclaimed-actors-1.jpg",
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
            <img src="https://media.allure.com/photos/6127ac0b238beb835812ce4c/4:3/w_2247,h_1685,c_limit/Ariana%20Grande%20Allure%20Cover%20No%20Coverlines.jpg" className="w-60 mt-8 ms-5 mb-5" />
            
                  {/* <div class="play">
                  <i class="bi bi-play-fill fa fa-play"></i>
                  </div> */}
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
        <div className="row bg-gray-500 ms-80 " >
        <div className="grid grid-cols-1 " >
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
          <div className=" ms-72 ">
          <NowPlaying
            track={tracks.find((track) => track.id === currentTrackIndex)}
            isPlaying={isPlaying}
            togglePlay={() => handlePlayPause(currentTrackIndex)}
          />
        </div>
      </div>
    </>
  );
};





const Scroll2 = () => {
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
      img: "https://img.mensxp.com/media/content/2020/Apr/Leading-B-Wood-Singers-Who-Lost-On-Reality-Shows1200_5ea7d3e1ba5f2.jpeg",
      music: "./music1.mp3",
    },
    {
      id: 1,
      title: "Kiliye",
      album: "Chithrum",
      date: "2024-01-19",
      time: "04:30",
      img: "https://images.indulgexpress.com/uploads/user/imagelibrary/2023/6/29/original/InFrameKSChithra.jpg",
      music: "./Kiliye-Kiliye.mp3",
    },
    {
      id: 2,
      title: "Balcony",
      album: "Balcony",
      date: "2024-01-19",
      time: "04:30",
      img: "https://images.saymedia-content.com/.image/ar_1:1%2Cc_fill%2Ccs_srgb%2Cfl_progressive%2Cq_auto:eco%2Cw_1200/MTg2MTA4Njk5MDQxODY2ODgx/top-5-hottest-young-singers-today.jpg",
      music: "./music2.mp3",
    },
    {
      id: 3,
      title: "Snake",
      album: "Taylor Snake",
      date: "2024-01-19",
      time: "04:30",
      img: "https://samacharlagatar.com/wp-content/uploads/2023/09/5-hollywood-singers-who-became-acclaimed-actors-1.jpg",
      music: "./music3.mp3",
    },
    {
      id: 4,
      title: "Glow",
      album: "glow",
      date: "2024-01-19",
      time: "04:30",
      img: "https://e0.pxfuel.com/wallpapers/76/35/desktop-wallpaper-zoya-blodos-world-s-famous-singers-american-hot-and-actress-thumbnail.jpg",
      music: "./music4.mp3",
    },
    {
      id: 5,
      title: "Daffy",
      album: "Summer",
      date: "2024-01-19",
      time: "04:30",
      img: "https://www.musicianwave.com/wp-content/uploads/2022/04/Zayn-Malik-393x525.jpg",
      music: "./music5.mp3",
    },{
      id: 6,
      title: "Snake",
      album: "Taylor Snake",
      date: "2024-01-19",
      time: "04:30",
      img: "https://samacharlagatar.com/wp-content/uploads/2023/09/5-hollywood-singers-who-became-acclaimed-actors-1.jpg",
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
      <div className="container bg-black ">
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
                  </h4>-
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
            <div class="item ms-80 bg-violet-300 ">
            <img src="https://i.dawn.com/primary/2021/12/61c070dad6d05.png" className="w-60 mt-8 ms-5 mb-5" />
            
                
                </div>
                <div className="bg-violet-300 ">
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
            <thead>
              <tr className="">
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

            <tbody>
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




const Scroll3= () => {
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
      img: "https://img.mensxp.com/media/content/2020/Apr/Leading-B-Wood-Singers-Who-Lost-On-Reality-Shows1200_5ea7d3e1ba5f2.jpeg",
      music: "./music1.mp3",
    },
    {
      id: 1,
      title: "Kiliye",
      album: "Chithrum",
      date: "2024-01-19",
      time: "04:30",
      img: "https://images.indulgexpress.com/uploads/user/imagelibrary/2023/6/29/original/InFrameKSChithra.jpg",
      music: "./Kiliye-Kiliye.mp3",
    },
    {
      id: 2,
      title: "Balcony",
      album: "Balcony",
      date: "2024-01-19",
      time: "04:30",
      img: "https://images.saymedia-content.com/.image/ar_1:1%2Cc_fill%2Ccs_srgb%2Cfl_progressive%2Cq_auto:eco%2Cw_1200/MTg2MTA4Njk5MDQxODY2ODgx/top-5-hottest-young-singers-today.jpg",
      music: "./music2.mp3",
    },
    {
      id: 3,
      title: "Snake",
      album: "Taylor Snake",
      date: "2024-01-19",
      time: "04:30",
      img: "https://samacharlagatar.com/wp-content/uploads/2023/09/5-hollywood-singers-who-became-acclaimed-actors-1.jpg",
      music: "./music3.mp3",
    },
    {
      id: 4,
      title: "Glow",
      album: "glow",
      date: "2024-01-19",
      time: "04:30",
      img: "https://e0.pxfuel.com/wallpapers/76/35/desktop-wallpaper-zoya-blodos-world-s-famous-singers-american-hot-and-actress-thumbnail.jpg",
      music: "./music4.mp3",
    },
    {
      id: 5,
      title: "Daffy",
      album: "Summer",
      date: "2024-01-19",
      time: "04:30",
      img: "https://www.musicianwave.com/wp-content/uploads/2022/04/Zayn-Malik-393x525.jpg",
      music: "./music5.mp3",
    },{
      id: 6,
      title: "Snake",
      album: "Taylor Snake",
      date: "2024-01-19",
      time: "04:30",
      img: "https://samacharlagatar.com/wp-content/uploads/2023/09/5-hollywood-singers-who-became-acclaimed-actors-1.jpg",
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
      <div className="container bg-black ">
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
            <div class="item ms-80 bg-violet-300 ">
            <img src="https://d2l4kn3pfhqw69.cloudfront.net/wp-content/uploads/2021/02/the-weeknd.jpg" className="w-60 mt-8 ms-5 mb-5" />
            
                
                </div>
                <div className="bg-violet-300 ">
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
            <thead>
              <tr className="">
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

            <tbody>
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




const Scroll4= () => {
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
      img: "https://img.mensxp.com/media/content/2020/Apr/Leading-B-Wood-Singers-Who-Lost-On-Reality-Shows1200_5ea7d3e1ba5f2.jpeg",
      music: "./music1.mp3",
    },
    {
      id: 1,
      title: "Kiliye",
      album: "Chithrum",
      date: "2024-01-19",
      time: "04:30",
      img: "https://images.indulgexpress.com/uploads/user/imagelibrary/2023/6/29/original/InFrameKSChithra.jpg",
      music: "./Kiliye-Kiliye.mp3",
    },
    {
      id: 2,
      title: "Balcony",
      album: "Balcony",
      date: "2024-01-19",
      time: "04:30",
      img: "https://images.saymedia-content.com/.image/ar_1:1%2Cc_fill%2Ccs_srgb%2Cfl_progressive%2Cq_auto:eco%2Cw_1200/MTg2MTA4Njk5MDQxODY2ODgx/top-5-hottest-young-singers-today.jpg",
      music: "./music2.mp3",
    },
    {
      id: 3,
      title: "Snake",
      album: "Taylor Snake",
      date: "2024-01-19",
      time: "04:30",
      img: "https://samacharlagatar.com/wp-content/uploads/2023/09/5-hollywood-singers-who-became-acclaimed-actors-1.jpg",
      music: "./music3.mp3",
    },
    {
      id: 4,
      title: "Glow",
      album: "glow",
      date: "2024-01-19",
      time: "04:30",
      img: "https://e0.pxfuel.com/wallpapers/76/35/desktop-wallpaper-zoya-blodos-world-s-famous-singers-american-hot-and-actress-thumbnail.jpg",
      music: "./music4.mp3",
    },
    {
      id: 5,
      title: "Daffy",
      album: "Summer",
      date: "2024-01-19",
      time: "04:30",
      img: "https://www.musicianwave.com/wp-content/uploads/2022/04/Zayn-Malik-393x525.jpg",
      music: "./music5.mp3",
    },{
      id: 6,
      title: "Snake",
      album: "Taylor Snake",
      date: "2024-01-19",
      time: "04:30",
      img: "https://samacharlagatar.com/wp-content/uploads/2023/09/5-hollywood-singers-who-became-acclaimed-actors-1.jpg",
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
      <div className="container bg-black ">
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
            <div class="item ms-80 bg-violet-300 ">
            <img src="https://images.seattletimes.com/wp-content/uploads/2023/07/07222023_swift_213100.jpg?d=2040x1479" className="w-60 mt-8 ms-5 mb-5" />
            
                
                </div>
                <div className="bg-violet-300 ">
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
            <thead>
              <tr className="">
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

            <tbody>
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




const Scroll5= () => {
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
      img: "https://img.mensxp.com/media/content/2020/Apr/Leading-B-Wood-Singers-Who-Lost-On-Reality-Shows1200_5ea7d3e1ba5f2.jpeg",
      music: "./music1.mp3",
    },
    {
      id: 1,
      title: "Kiliye",
      album: "Chithrum",
      date: "2024-01-19",
      time: "04:30",
      img: "https://images.indulgexpress.com/uploads/user/imagelibrary/2023/6/29/original/InFrameKSChithra.jpg",
      music: "./Kiliye-Kiliye.mp3",
    },
    {
      id: 2,
      title: "Balcony",
      album: "Balcony",
      date: "2024-01-19",
      time: "04:30",
      img: "https://images.saymedia-content.com/.image/ar_1:1%2Cc_fill%2Ccs_srgb%2Cfl_progressive%2Cq_auto:eco%2Cw_1200/MTg2MTA4Njk5MDQxODY2ODgx/top-5-hottest-young-singers-today.jpg",
      music: "./music2.mp3",
    },
    {
      id: 3,
      title: "Snake",
      album: "Taylor Snake",
      date: "2024-01-19",
      time: "04:30",
      img: "https://samacharlagatar.com/wp-content/uploads/2023/09/5-hollywood-singers-who-became-acclaimed-actors-1.jpg",
      music: "./music3.mp3",
    },
    {
      id: 4,
      title: "Glow",
      album: "glow",
      date: "2024-01-19",
      time: "04:30",
      img: "https://e0.pxfuel.com/wallpapers/76/35/desktop-wallpaper-zoya-blodos-world-s-famous-singers-american-hot-and-actress-thumbnail.jpg",
      music: "./music4.mp3",
    },
    {
      id: 5,
      title: "Daffy",
      album: "Summer",
      date: "2024-01-19",
      time: "04:30",
      img: "https://www.musicianwave.com/wp-content/uploads/2022/04/Zayn-Malik-393x525.jpg",
      music: "./music5.mp3",
    },{
      id: 6,
      title: "Snake",
      album: "Taylor Snake",
      date: "2024-01-19",
      time: "04:30",
      img: "https://samacharlagatar.com/wp-content/uploads/2023/09/5-hollywood-singers-who-became-acclaimed-actors-1.jpg",
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
      <div className="container bg-black ">
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
            <div class="item ms-80 bg-violet-300">
            <img src="https://static.javatpoint.com/top10-technologies/images/top-10-english-singers8.jpg" className="w-44 mt-8 ms-5 mb-5" />
            
                
                </div>
                <div className=" bg-violet-300">
                    <p className="text-white">Playlist</p>
                    <h1 className="text-white text-7xl justify-items-center mt-12"> Dark & Stormy</h1>
                    <p className="text-white">Beautifully dark, dramatic tracks.</p>
                    <div id="logo2" className="me-10 ">
            <img src="https://www.freepnglogos.com/uploads/spotify-logo-png/spotify-icon-marilyn-scott-0.png"alt="Spotify-Logo" className="w-6"/>
            <h1 className="text-sm">Spotify</h1>
            <p className="text-violet-300 text-lg">1,637,003 likes100 songs, about 5 hr 30 min</p>
          </div>
                </div>
            </div> 
            </div>
           

           
    <div className="row  ms-80 h-32 bg-gray-500">
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
            <thead>
              <tr className="">
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

            <tbody>
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



const Scroll6 = () => {
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
      img: "https://img.mensxp.com/media/content/2020/Apr/Leading-B-Wood-Singers-Who-Lost-On-Reality-Shows1200_5ea7d3e1ba5f2.jpeg",
      music: "./music1.mp3",
    },
    {
      id: 1,
      title: "Kiliye",
      album: "Chithrum",
      date: "2024-01-19",
      time: "04:30",
      img: "https://images.indulgexpress.com/uploads/user/imagelibrary/2023/6/29/original/InFrameKSChithra.jpg",
      music: "./Kiliye-Kiliye.mp3",
    },
    {
      id: 2,
      title: "Balcony",
      album: "Balcony",
      date: "2024-01-19",
      time: "04:30",
      img: "https://images.saymedia-content.com/.image/ar_1:1%2Cc_fill%2Ccs_srgb%2Cfl_progressive%2Cq_auto:eco%2Cw_1200/MTg2MTA4Njk5MDQxODY2ODgx/top-5-hottest-young-singers-today.jpg",
      music: "./music2.mp3",
    },
    {
      id: 3,
      title: "Snake",
      album: "Taylor Snake",
      date: "2024-01-19",
      time: "04:30",
      img: "https://samacharlagatar.com/wp-content/uploads/2023/09/5-hollywood-singers-who-became-acclaimed-actors-1.jpg",
      music: "./music3.mp3",
    },
    {
      id: 4,
      title: "Glow",
      album: "glow",
      date: "2024-01-19",
      time: "04:30",
      img: "https://e0.pxfuel.com/wallpapers/76/35/desktop-wallpaper-zoya-blodos-world-s-famous-singers-american-hot-and-actress-thumbnail.jpg",
      music: "./music4.mp3",
    },
    {
      id: 5,
      title: "Daffy",
      album: "Summer",
      date: "2024-01-19",
      time: "04:30",
      img: "https://www.musicianwave.com/wp-content/uploads/2022/04/Zayn-Malik-393x525.jpg",
      music: "./music5.mp3",
    },{
      id: 6,
      title: "Snake",
      album: "Taylor Snake",
      date: "2024-01-19",
      time: "04:30",
      img: "https://samacharlagatar.com/wp-content/uploads/2023/09/5-hollywood-singers-who-became-acclaimed-actors-1.jpg",
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
      <div className="container bg-black ">
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
            <div class="item ms-80 bg-violet-300 ">
            <img src="https://qph.cf2.quoracdn.net/main-qimg-3a8af4f2128be7a52b86afc3ebf77c70-lq" className="w-44 mt-8 ms-5 mb-5" />
            
                
                </div>
                <div className="bg-violet-300 ">
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
            <thead>
              <tr className="">
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

            <tbody>
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




export {Scroll,Scroll2,Scroll3,Scroll4,Scroll5,Scroll6} ;
