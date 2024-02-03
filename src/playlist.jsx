import React, { useState } from "react";
import { Link, useNavigate } from 'react-router-dom';
import { PlaylistProvider,usePlaylist } from "./playlistContext.jsx";
function Play() {
  const navigate = useNavigate();

  const { playlist, addToPlaylist } = usePlaylist();
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredTracks, setFilteredTracks] = useState([]);
  
  const [selectedPhoto, setSelectedPhoto] = useState(null);
  
    // Function to handle photo upload
    const handlePhotoUpload = (event) => {
      // Update the state with the selected photo
      setSelectedPhoto(event.target.files[0]);
    };
     const handleSymbolClick = () => {
      // Trigger file input click
      document.getElementById('photoInput').click();
    };
  
  const tracks = [
   
    {
      title: "Who's Driving",
      album: "Snow",
      date: "2024-01-18",
      time: "03:45",
      img: "https://img.mensxp.com/media/content/2020/Apr/Leading-B-Wood-Singers-Who-Lost-On-Reality-Shows1200_5ea7d3e1ba5f2.jpeg",
      music: "./music1.mp3",
    },
    {
      title: "Kiliye",
      album: "Chithrum",
      date: "2024-01-19",
      time: "04:30",
      img: "https://images.indulgexpress.com/uploads/user/imagelibrary/2023/6/29/original/InFrameKSChithra.jpg",
      music: "./music2.mp3",
    },
    {
      title: "Balcony",
      album: "Balcony",
      date: "2024-01-19",
      time: "04:30",
      img: "https://images.saymedia-content.com/.image/ar_1:1%2Cc_fill%2Ccs_srgb%2Cfl_progressive%2Cq_auto:eco%2Cw_1200/MTg2MTA4Njk5MDQxODY2ODgx/top-5-hottest-young-singers-today.jpg",
      music: "./music3.mp3",
    },
    {
      title: "Snake",
      album: "Taylor Snake",
      date: "2024-01-19",
      time: "04:30",
      img: "https://samacharlagatar.com/wp-content/uploads/2023/09/5-hollywood-singers-who-became-acclaimed-actors-1.jpg",
      music: "./music4.mp3",
    },
    {
      title: "Glow",
      album: "glow",
      date: "2024-01-19",
      time: "04:30",
      img: "https://e0.pxfuel.com/wallpapers/76/35/desktop-wallpaper-zoya-blodos-world-s-famous-singers-american-hot-and-actress-thumbnail.jpg",
      music: "./music1.mp3",
    },
    {
      title: "Daffy",
      album: "Summer",
      date: "2024-01-19",
      time: "04:30",
      img: "https://www.musicianwave.com/wp-content/uploads/2022/04/Zayn-Malik-393x525.jpg",
      music: "./music1.mp3",
    },
    // Additional tracks...
    {
      title: "Moonlight Sonata",
      album: "Classical Classics",
      date: "2024-01-20",
      time: "05:15",
      img: "https://fancyodds.com/wp-content/uploads/2021/08/Nicki-Minaj.jpg",
      music: "./music4.mp3",
    },
    {
      title: "City Lights",
      album: "Urban Vibes",
      date: "2024-01-21",
      time: "03:55",
      img: "https://www.superprof.co.in/blog/wp-content/uploads/2023/03/image2-4.png",
      music: "./music1.mp3",
    },
    {
      title: "Summer Breeze",
      album: "Seasonal Sounds",
      date: "2024-01-22",
      time: "04:10",
      img: "https://hi.letsdiskuss.com/assets/upl_files/bdeb8e0ead.jpg",
      music: "./music3.mp3",
    },
    {
      title: "Eclipse",
      album: "Galactic Grooves",
      date: "2024-01-23",
      time: "04:45",
      img: "https://theindianeye.com/wp-content/uploads/2022/10/Shreya-1.jpg",
      music: "./music4.mp3",
    },
    {
      title: "Jazzed Up",
      album: "Smooth Jazz",
      date: "2024-01-24",
      time: "03:30",
      img: "https://d18hry5vavz86j.cloudfront.net/BlogImages/dedbdba9-412a-4d4f-92a9-d36b529b7948.jpg",
      music: "./music3.mp3",
    },
    {
      title: "Rising Sun",
      album: "Morning Melodies",
      date: "2024-01-25",
      time: "04:20",
      img: "https://img.mensxp.com/media/content/2020/Apr/Leading-B-Wood-Singers-Who-Lost-On-Reality-Shows1200_5ea7d3e1ba5f2.jpeg",
      music: "./music1.mp3",
    },
  ];
  const handleSearch = () => {
    const filtered = tracks.filter((track) =>
      track.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredTracks(filtered);
  };

  return (

      <div className="container-fluid bg-black h-full w-full">    <PlaylistProvider>
        <div className="row">
          <div className="sidebar bg-side">
            <div className="navigation bg-side2">
              <ul>
                <li>
                  <a href="#" className="logo ms-16">
                    <img
                      src="https://storage.googleapis.com/pr-newsroom-wp/1/2018/11/Spotify_Logo_RGB_White.png"
                      className="mt-3"
                      alt="Logo"
                    />
                  </a>
                  <a href="#">
                    <h4 className="font-2 mt-3 ">
                      <i className="bi bi-house-door-fill"></i> Home
                    </h4>
                  </a>
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
                  <a href="#">
                    <h4 className="font-2 ">
                      <i className="bi bi-collection-fill"></i> Your Library{" "}
                      <strong>
                        <i className="bi bi-plus-lg ms-16"></i>
                      </strong>
                    </h4>
                  </a>
                </li>
              </ul>
              <div className="bg-side1 border-solid-side1 rounded-lg ms-2 me-2 pt-4">
                <ul>
                  <li>
                    <a href="#">
                      <h4 className="font-2 ">
                        <i className="bi bi-music-note-beamed text-white"></i> My playlist #1
                      </h4>
                    </a>
                    <ul className="mt-5 space-y-2">
  {playlist.map((playlistTrack, index) => (
    <li key={index} className="flex items-center text-white">
      {playlistTrack.img && (
        <img
          src={playlistTrack.img}
          alt="Image"
          className="w-9 h-7 mr-2 rounded-full"
        />
      )}
      <span className="truncate">{playlistTrack.title}</span>
    </li>
  ))}
</ul>

                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="row">
      <div className="grid grid-cols-3 justify-items-center bg-col p-7">
        <div className="symbol-container bg-side1 rounded-lg p-5 mt-10 ms-80" onClick={handleSymbolClick}>
    
          <input type="file" id="photoInput" style={{ display: 'none' }} onChange={handlePhotoUpload} accept="image/*" />

          {selectedPhoto ? (
            <img
              src={URL.createObjectURL(selectedPhoto)}
              alt="Uploaded"
              className="uploaded-photo size-44"
            />
          ) : (
            <i className="bi bi-music-note-beamed text-white text-8xl justify-start"></i>
          )}
        </div>
     <div className="justify-items-start bg-col">
      <h5 className="text-white mt-20">Public Playlist</h5>
      <h1 className="text-white text-7xl ms-0 mt-10">My Playlist #1</h1>
     </div>
      </div>
    </div>
          <div className="row">
            <div className="grid grid-cols-3 mt-5">
              <div>
                <i className="bi bi-person-plus-fill text-white ms-80 text-4xl "></i>
              </div>
              <div className="">
                <i className="bi bi-three-dots text-3xl  text-white  dot"></i>
              </div>
              <div className="">
                <h5 className="text-white ms-72">List  <i className="bi bi-list-task text-white text-2xl"></i></h5>
              </div>
            </div>
          </div>
        </div>
        <div className="underline mt-5"></div>
        <div className="row ms-80 mt-5">
          <div className="">
            <h2 className="text-white">Let's Find Something For Your Playlist</h2>
            <input
              type="text"
              placeholder="Search for tracks..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <button type="button" className="butt mt-10" onClick={handleSearch}>Search</button>
          </div>
        </div>
        <div className="row mt-5 bg-black">
          {filteredTracks.length > 0 && (
            <div className="row mt-5 ms-80">
              <table className="table-auto w-full">
                <tbody>
                  {filteredTracks.map((track, index) => (
                    <tr key={index}>
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
                      <td className="text-white ms-2">{track.title} </td>
                      <td className="text-white ms-2">{track.album} </td>
                      <td>
                        <button
                          type="button"
                          className="butt mt-3"
                          onClick={() => addToPlaylist(track)}
                        >
                          Add
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div> 
        </PlaylistProvider>
      </div>
   
  );
}

export default Play;