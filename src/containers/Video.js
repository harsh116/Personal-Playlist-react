import "./App.css";
import "tachyons";
import "./Video.css";
import { useState, useEffect, useRef } from "react";
import { aboutDatabase } from "../databases/aboutDatabase";

import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css";

function Video(props) {
  let timeoutID = "";
  let timeoutID2 = "";
  let setID = "";
  let f = 0;
  let fref = useRef(f);
  let timeout1Ref = useRef(timeoutID);
  let timeout2Ref = useRef(timeoutID2);
  let overlayImage = "",
    overlayDescription = "";
  aboutDatabase.forEach(function (element, index) {
    // statements
    if (element.title === props.title) {
      overlayImage = element.image;
      overlayDescription = element.details;
    }
  });

  const [fade, setFade] = useState("");
  const [visible, setVisible] = useState("overlay-hidden none");
  const [positionY, setPositionY] = useState(0);
  const [positionX, setPositionX] = useState(0);
  const [isOnOverlay, setIsOnOverlay] = useState(false);

  const onTopButton = () => {
    setFade("fade");
  };

  const offTopButton = () => {
    setFade("");
  };

  let body = document.querySelector("html");

  //to reduce the glitch effect by clicking on body
  body.addEventListener("click", () => {
    setVisible("overlay-hidden none");
  });

  const onVideo = () => {
    let video = document.querySelector(`#${props.id}`);
    console.log("onVideo event");
    if (video !== null) {
      // window.clearTimeout(setID);
      // 	setID=setTimeout(()=>{
      // 		// debugger
      // 		console.log('isOnOverlay: ',fref)
      // 		if(fref.current===0)
      // 			setVisible('overlay-hidden');
      // },5000)
      clearTimeout(timeout1Ref.current);
      clearTimeout(timeout2Ref.current);

      fref.current = 0;
      let positiony = video.offsetTop;
      let newpositionY = positiony - 270;

      let positionx = video.offsetLeft;
      let newpositionX = positionx - 60;

      setPositionX(newpositionX);
      setPositionY(newpositionY);

      setVisible("overlay-hidden");
      setTimeout(() => {
        setVisible("overlay-visible");
      }, 100);

      // 	setID=setTimeout(()=>{
      // 		// debugger
      // 		console.log('isOnOverlay: ',fref)
      // 		if(fref.current===0)
      // 			setVisible('overlay-hidden');
      // },5000)
    }
  };

  const offVideo = () => {
    // clearTimeout(timeout1Ref.current);
    console.log("timeout1Ref", timeout1Ref);
    console.log("offVideo event");
    setVisible("overlay-hidden");
    timeout1Ref.current = setTimeout(() => {
      setVisible("overlay-hidden none");
    }, 500);
    // window.clearTimeout(setID);
  };

  const onOverlay = () => {
    // debugger
    clearTimeout(timeout1Ref.current);
    clearTimeout(timeout2Ref.current);
    console.log("onOverlay event");
    setVisible("overlay-hidden");
    setIsOnOverlay(true);
    setTimeout(() => {
      setVisible("overlay-visible");
    }, 100);
    fref.current = 1;
  };

  const offOverlay = () => {
    //clearTimeout(timeout2Ref.current);
    console.log("offOverlay event");

    setVisible("overlay-hidden");
    timeout2Ref.current = setTimeout(() => {
      setVisible("overlay-hidden none");
    }, 500);
    fref.current = 0;
    // setIsOnOverlay(false);
  };

  let styles = {
    top: { positionY },
    left: { positionX },
  };

  useEffect(() => {
    if (props.videoToBePaused.innerText === props.title) {
      let div = props.videoToBePaused.parentElement;
      let video = div.querySelector("video");
      video.pause();
    }
    if (props.nextVideoToBePlayed.innerText === props.title) {
      let div2 = props.nextVideoToBePlayed.parentElement;
      let nextVideo = div2.querySelector("video");
      nextVideo.play();
    }
  });
  // console.log('onPauseVideo: ',props.onPauseVideo)
  return (
    <div class="cell">
      <p className="lightbackground stroke" onClick={props.onLyricsRequest}>
        {props.title}
      </p>
      <div
        class="overlay fullwidth flexy-b"
        onMouseEnter={onTopButton}
        onMouseLeave={offTopButton}
      >
        <a
          onClick={props.onPlayAtTop}
          href="#topcell"
          class="arrow fullwidth m-s tc"
        >
          ^
        </a>
        <a
          onClick={props.onPlayAtTop}
          href="#topcell"
          class="arrow fullwidth m-s tc"
        >
          ^
        </a>
        <a
          onClick={props.onPlayAtTop}
          href="#topcell"
          class="arrow fullwidth m-s tc"
        >
          ^
        </a>
        <a
          onClick={props.onPlayAtTop}
          href="#topcell"
          class="arrow fullwidth m-s tc"
        >
          ^
        </a>
      </div>
      <div className={fade}></div>
      {/* <div
        className={`${visible} content`}
        id="overlay"
        style={{ top: positionY, left: positionX }}
        onMouseEnter={onOverlay}
        onMouseLeave={offOverlay}
      >
        <img src={overlayImage} alt="" width="160" height="150" />
        <p> {overlayDescription}</p>
      </div> */}

      <Tippy
        content={
          <div className="content" id="overlay">
            <img src={overlayImage} alt="" width="160" height="150" />
            <p> {overlayDescription}</p>
          </div>
        }
        arrow={true}
        animation={"fade"}
        duration={500}
        interactive={true}
        theme={"custom"}
        placement={"top"}
        delay={[0, 500]}
      >
        <div>
          <video
            className="border videoResolution"
            id={props.id}
            preload="none"
            poster={props.poster}
            onPlay={props.onPlayVideo}
            onPause={props.onPauseVideo}
            onEnded={props.onVideoEnded}
            src={props.link}
            controls
          >
            Browser not supporting video tag
          </video>
        </div>
      </Tippy>
    </div>
  );
}

export default Video;
