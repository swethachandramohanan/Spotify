// RecentlyPlayed.jsx

import React from 'react';
import { Link } from 'react-router-dom';

const RecentlyPlayed = ({ recentPlaylist }) => {
  return (
    <div className="row five mt-10">
      <div className="grid grid-cols-1 ms-80">
        <div className="spotify-playlists">
          <h2 className="font-12 mt-4">Recently Played</h2>
          <div className="list">
            {recentPlaylist.map((track, index) => (
              <div className="item" key={index}>
                <Link to={`/p${index + 1}`}>
                  <img src={track.img} className="img" alt={track.title} />
                  <div className="play">
                    <i className="bi bi-play-fill fa fa-play"></i>
                  </div>
                  <h4>{track.title}</h4>
                  <p>{track.album}</p>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecentlyPlayed;
