import React from "react";

// Custom Components
import { Player } from "./components/Player";
import { Song } from "./components/Song";

// App styles
import "./styles/app.scss";

function App() {
  return (
    <div className="App">
      <Song />
      <Player />
    </div>
  );
}

export default App;
