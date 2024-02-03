import React, { useState } from "react";

const NowPlaying = ({ track, isPlaying, togglePlay }) => {
  if (!track) {
    return null;
  }

  return (
    <div className="now-playing-container m-2">
      <div className="grid grid-flow-col justify-stretch">
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <img
            src={track.img}
            alt={`Album cover for ${track.title}`}
            style={{ width: '60px', height: '60px', marginRight: '8px', borderRadius: '10px', objectFit: 'cover' }}
          />
          <div className="tracking-wide">
            <p className="text-white text-sm font-9">{track.title}</p>
            <p className="text-white text-xs font-9">{track.artist}</p>
          </div>
        </div>

        <div className="text-white">
          <p className="text-3xl flex items-center ms-52">
            <span><i className="bi bi-skip-start-fill text-gray-400 hover:text-white mx-4"></i></span>
            {isPlaying ? (
              <i className="bi bi-pause-circle-fill text-4xl" onClick={togglePlay}></i>
            ) : (
              <i className="bi bi-play-circle-fill text-4xl" onClick={togglePlay}></i>
            )}
            <span><i className="bi bi-skip-end-fill text-gray-400 hover:text-white mx-4"></i></span>
          </p>
          <div className="flex items-center ms-20 ">
            <hr className="w-96 border-t-2 border-white" />
            <p className="px-1">{track.duration}</p>
          </div>
        </div>

        <div className="m-5">
          <i className="bi bi-file-play text-white text-xl"></i>
          <span><i className="bi bi-music-note-list text-white text-xl px-8"></i></span>
        </div>
      </div>
    </div>
  );
};

export default NowPlaying;
