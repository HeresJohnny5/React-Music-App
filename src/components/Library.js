import React from "react";

// Custom Components
import { LibrarySong } from "./LibrarySong";

export const Library = ({ songs, currentSong, setCurrentSong }) => {
  return (
    <div className="library">
      <h2>Library</h2>
      <div className="library-songs">
        {songs.map((song) => {
          return (
            <LibrarySong
              song={song}
              currentSong={currentSong}
              setCurrentSong={setCurrentSong}
            />
          );
        })}
      </div>
    </div>
  );
};
