import React from "react";
import flvjs from "flv.js";

class FlvPlayer extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    let videoElement = document.getElementById("videoElement");
    let flvPlayer = flvjs.createPlayer({
      type: "flv",
      url: "http://118.63.182.3:8883/live/1.flv",
    });
    flvPlayer.attachMediaElement(videoElement);
    flvPlayer.load();
    flvPlayer.play();
  }

  render() {
    return (
      <div>
        before player
        <video id="videoElement" />
        after player
      </div>
    );
  }
}

export default FlvPlayer;
