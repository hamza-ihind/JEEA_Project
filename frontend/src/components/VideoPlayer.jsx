import React from "react";
import { DefaultPlayer as Video } from "react-html5video";
import "react-html5video/dist/styles.css";
import video from "../assets/video.mp4";

const VideoPlayer = () => {
  return (
    <Video autoPlay loop>
      <source src={video} type="video/webm" />
    </Video>
  );
};

export default VideoPlayer;
