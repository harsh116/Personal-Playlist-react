import {
  OPEN_LYRICS_PANEL,
  CLOSE_LYRICS_PANEL,
  REQUEST_LYRICS,
  PLAY_AT_TOP,
  CLOSE_AT_TOP,
  PLAY_VIDEO,
  PAUSE_VIDEO,
  TOGGLE_REPEAT,
  PLAY_NEXT_VIDEO,
  PLAY_NEXT_VIDEO_AT_TOP,
  CLEAR_LYRICS,
  NEXT_TRACK,
  PREVIOUS_TRACK,
  TOGGLE_QUALITY,
} from "./databases/constants";
import { lyrics } from "./databases/lyrics";

let initialState = {
  isOpen: false,
  paddingLeftVideos: false,
  lyrics: "Click/Tap on the title of song to view lyrics",
  isOnTopButton: false,
  isPlayAtTop: false,
  videoAtTop: "",
  isVideoPlaying: false,
  VideoPlaying: "",
  videoToBePaused: "",
  repeat: "off",
  nextVideoToBePlayed: "", //p element
  nextVideoTitleToBePlayed: "", //title of video
  previousVideoTitleToBePlayed: "",
  quality: "Medium",
  title: "",
};

let nextVideoElement = (currentVideoDiv) => {
  let container = document.querySelector("#videoArray");
  console.log("container: ", container);
  let allVideos = container.children;
  // let videotitle=currentVideoDiv.querySelector("p").innerText
  let i = 0;
  for (i = 0; i < allVideos.length; i++) {
    if (
      allVideos[i].querySelector("p").innerText ===
      currentVideoDiv.querySelector("p").innerText
    )
      break;
  }
  i = (i + 1) % allVideos.length;
  return allVideos[i].querySelector("p");
};

let nextVideoElementForTop = (currentVideoDiv) => {
  let container = document.querySelector("#videoArray");
  console.log("container: ", container);
  let allVideos = container.children;
  // let videotitle=currentVideoDiv.querySelector("p").innerText
  let i = 0;
  for (i = 0; i < allVideos.length; i++) {
    if (
      allVideos[i].querySelector("p").innerText ===
      currentVideoDiv.querySelector("p").innerText
    )
      break;
  }
  i = (i + 1) % allVideos.length;
  return allVideos[i].querySelector("p").innerText;
};

let previousVideoElementForTop = (currentVideoDiv) => {
  // debugger;
  let container = document.querySelector("#videoArray");
  console.log("container: ", container);
  let allVideos = container.children;
  // let videotitle=currentVideoDiv.querySelector("p").innerText
  let i = 0;
  for (i = 0; i < allVideos.length; i++) {
    if (
      allVideos[i].querySelector("p").innerText ===
      currentVideoDiv.querySelector("p").innerText
    )
      break;
  }
  i = i - 1;
  if (i === -1) i = allVideos.length - 1;
  return allVideos[i].querySelector("p").innerText;
};

export const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case OPEN_LYRICS_PANEL:
      if (state.isOpen === false)
        return Object.assign({}, state, {
          isOpen: true,
          paddingLeftVideos: true,
        });
      break;
    case CLOSE_LYRICS_PANEL:
      if (state.isOpen === true)
        return Object.assign({}, state, {
          isOpen: false,
          paddingLeftVideos: false,
          lyrics: initialState.lyrics,
          title: "",
        });
      break;
    case REQUEST_LYRICS:
      // if(state.isOpen===true)
      // {
      let res = {};
      lyrics.forEach(function (element, i) {
        // statements
        if (element.title === action.payload) res = element;
      });
      return Object.assign({}, state, {
        lyrics: res.lyrics,
        title: res.title,
        isOpen: true,
        paddingLeftVideos: true,
      });
      // }
      // return state;

      break;
    case PLAY_AT_TOP:
      // console.log('PLAY_VIDEO')
      return Object.assign({}, state, {
        isPlayAtTop: true,
        videoAtTop: action.payload.children[0],
      });
      break;
    case CLOSE_AT_TOP:
      return Object.assign({}, state, {
        isPlayAtTop: false,
        videoAtTop: "",
        nextVideoTitleToBePlayed: "",
      });
      break;
    case PLAY_VIDEO:
      console.log("video playing in reducer");
      //   debugger;
      let videoPlaying;
      if (action.payload.querySelector("video").id.includes("_top"))
        videoPlaying =
          action.payload.parentElement.parentElement.querySelector("p");
      else videoPlaying = action.payload.querySelector("p");
      if (state.isVideoPlaying === true) {
        return Object.assign({}, state, {
          videoToBePaused: state.VideoPlaying,
          VideoPlaying: videoPlaying,
          nextVideoToBePlayed: "",
        });
      } else
        return Object.assign({}, state, {
          isVideoPlaying: true,
          VideoPlaying: videoPlaying,
          nextVideoToBePlayed: "",
        });

      break;
    case PAUSE_VIDEO:
      let videoPlaying2;
      console.log("video paused in reducer");
      //   debugger;
      if (action.payload.querySelector("video").id.includes("_top")) {
        videoPlaying2 =
          action.payload.parentElement.parentElement.querySelector("p");
      } else videoPlaying2 = action.payload.querySelector("p");
      // debugger;
      if (videoPlaying2 !== state.VideoPlaying) {
        // console.log('mc')
        // console.log('payload of PAUSE_VIDEO: ',action.payload.querySelector("p").id)
        // console.log('videoToBePaused in PAUSE_VIDEO: ',state.videoToBePaused.id)
        return state;
      } else
        return Object.assign({}, state, {
          isVideoPlaying: false,
          VideoPlaying: "",
          videoToBePaused: "",
        });
      break;
    case TOGGLE_REPEAT:
      if (state.repeat === "off")
        return Object.assign({}, state, { repeat: "all" });
      else return Object.assign({}, state, { repeat: "off" });
      break;
    case PLAY_NEXT_VIDEO:
      if (state.repeat === "all") {
        let nextvideoelement = nextVideoElement(action.payload);
        return Object.assign({}, state, {
          nextVideoToBePlayed: nextvideoelement,
          isVideoPlaying: false,
          VideoPlaying: "",
          videoToBePaused: "",
        });
      } else return state;
      break;
    case PLAY_NEXT_VIDEO_AT_TOP:
      if (state.repeat === "all") {
        let nextvideotitle = nextVideoElementForTop(action.payload);
        return Object.assign({}, state, {
          nextVideoTitleToBePlayed: nextvideotitle,
          isVideoPlaying: false,
          VideoPlaying: "",
          videoToBePaused: "",
        });
      } else return state;
      break;
    case CLEAR_LYRICS:
      return Object.assign({}, state, {
        lyrics: initialState.lyrics,
        title: "",
      });
      break;
    case NEXT_TRACK:
      let nextvideotitle = nextVideoElementForTop(action.payload);
      return Object.assign({}, state, {
        nextVideoTitleToBePlayed: nextvideotitle,
        isVideoPlaying: false,
        VideoPlaying: "",
        videoToBePaused: "",
      });
      break;
    case PREVIOUS_TRACK:
      let prevvideotitle = previousVideoElementForTop(action.payload);
      return Object.assign({}, state, {
        nextVideoTitleToBePlayed: prevvideotitle,
        isVideoPlaying: false,
        VideoPlaying: "",
        videoToBePaused: "",
      });
      break;
    case TOGGLE_QUALITY:
      let newstate = "Medium";
      if (state.quality === "Medium") newstate = "Low";
      else if (state.quality === "Low") newstate = "High";

      return Object.assign({}, state, { quality: newstate });
      break;
    default:
      return state;
      break;
  }
};
