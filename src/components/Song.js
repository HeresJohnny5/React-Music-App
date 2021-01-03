import React from "react";

export const Song = ({ currentSong }) => {
  return (
    <div className="song-container">
      <img src={currentSong.cover} alt="" />
      <h2>{currentSong.audio}</h2>
      <h3>{currentSong.artist}</h3>
    </div>
  );
};
