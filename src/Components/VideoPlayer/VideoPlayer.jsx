/* eslint-disable react/prop-types */
import "./VideoPlayer.css";

import video from "../../assets/video.mp4";
import { useRef } from "react";
const VideoPlayer = ({ playState, setPlayState }) => {
  const player = useRef(null);

  const ClosePlayer = (e) => {
    if (e.target === player.current) {
      setPlayState(false);
    }
  };

  return (
    <div
      className={`video-player  ${playState ? "" : "hide"}`}
      ref={player}
      onClick={ClosePlayer}
    >
      <video src={video} autoPlay muted controls></video>
    </div>
  );
};

export default VideoPlayer;
