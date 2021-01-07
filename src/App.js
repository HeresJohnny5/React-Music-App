import React, { useState } from "react";

// Custom Components
import { Player } from "./components/Player";
import { Song } from "./components/Song";
import { Library } from "./components/Library";

// JavaScript Imports
import data from "./utili";

// App styles
import "./styles/app.scss";

function App() {
  // State
  const [songs, setSongs] = useState(data());
  const [currentSong, setCurrentSong] = useState(songs[0]);
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <div className="App">
      <Song currentSong={currentSong} />
      <Player
        currentSong={currentSong}
        isPlaying={isPlaying}
        setIsPlaying={setIsPlaying}
      />
      <Library
        songs={songs}
        currentSong={currentSong}
        setCurrentSong={setCurrentSong}
      />
    </div>
  );
}

export default App;
