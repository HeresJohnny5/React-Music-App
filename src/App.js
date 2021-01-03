import React, { useState } from "react";

// Custom Components
import { Player } from "./components/Player";
import { Song } from "./components/Song";

// JavaScript Imports
import data from "./utili";

// App styles
import "./styles/app.scss";

function App() {
  const [songs, setSongs] = useState(data());
  const [currentSong, setCurrentSong] = useState(songs[0]);

  console.log("songs", songs);

  return (
    <div className="App">
      <Song currentSong={currentSong} />
      <Player />
    </div>
  );
}

export default App;
