import React from "react";
// Without the curly braces this imports the entire package/library
// With curly braces you're importing one specific thing in comparison to the entire package/library

// Packages
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlay,
  faPause,
  faAngleLeft,
  faAngleRight,
} from "@fortawesome/free-solid-svg-icons";

export const Player = ({
  audioRef,
  songs,
  currentSong,
  setCurrentSong,
  isPlaying,
  setIsPlaying,
  songInfo,
  setSongInfo,
}) => {
  // Event Handlers
  const playSongHandler = () => {
    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(!isPlaying);
    } else {
      audioRef.current.play();
      setIsPlaying(!isPlaying);
    }
  };

  const dragHandler = (e) => {
    audioRef.current.currentTime = e.target.value;
    setSongInfo({
      ...songInfo,
      currentTime: e.target.value,
    });
  };

  // Helper Functions
  const getTime = (time) => {
    return (
      Math.floor(time / 60) + ":" + ("0" + Math.floor(time % 60)).slice(-2)
    );
  };

  const skipTrackHandler = (direction) => {
    let currentIndex = songs.findIndex((song) => song.id === currentSong.id);

    console.log("currentIndex: ", currentIndex);
    console.log("TEST: ", songs[currentIndex + 1]);

    if (direction === "skip-forward" && currentIndex < songs.length - 1) {
      setCurrentSong(songs[currentIndex + 1]);
    } else if (direction === "skip-back" && currentIndex > 0) {
      setCurrentSong(songs[currentIndex - 1]);
    }
  };

  return (
    <div className="player-container">
      <div className="time-control">
        <p>{getTime(songInfo.currentTime)}</p>
        <input
          type="range"
          min={0}
          max={songInfo.duration || 0}
          value={songInfo.currentTime}
          onChange={dragHandler}
        />
        <p>{getTime(songInfo.duration)}</p>
      </div>
      <div className="play-control">
        <FontAwesomeIcon
          className="skip-back"
          icon={faAngleLeft}
          size="2x"
          onClick={() => skipTrackHandler("skip-back")}
        />
        <FontAwesomeIcon
          className={isPlaying ? "pause" : "play"}
          icon={isPlaying ? faPause : faPlay}
          size="2x"
          onClick={() => playSongHandler()}
        />
        <FontAwesomeIcon
          className="skip-forward"
          icon={faAngleRight}
          size="2x"
          onClick={() => skipTrackHandler("skip-forward")}
        />
      </div>
    </div>
  );
};

// onTimeUpdate runs every time the time changes in the audio
// onLoadedMetadata will update initially based on the argument passed
