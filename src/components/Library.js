import React from "react";

// Custom Components
import { LibrarySong } from "./LibrarySong";

export const Library = ({
  audioRef,
  songs,
  setSongs,
  setCurrentSong,
  isPlaying,
}) => {
  return (
    <div className="library">
      <h2>Library</h2>
      <div className="library-songs">
        {songs.map((song) => {
          return (
            <LibrarySong
              key={song.id}
              audioRef={audioRef}
              song={song}
              id={song.id}
              songs={songs}
              setSongs={setSongs}
              setCurrentSong={setCurrentSong}
              isPlaying={isPlaying}
            />
          );
        })}
      </div>
    </div>
  );
};
