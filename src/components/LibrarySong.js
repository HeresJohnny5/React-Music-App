import React from "react";

export const LibrarySong = ({ song }) => {
  return (
    <div className="library-container">
      <img src={song.cover} alt={song.name} />
      <h3>{song.audio}</h3>
      <h4>{song.artist}</h4>
    </div>
  );
};
