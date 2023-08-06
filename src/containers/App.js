import { Component } from "react";
import logo from "../logo.svg";
import "./App.css";
import LyricsButton from "../components/LyricsButton";
import RepeatButton from "../components/RepeatButton";
import QualityButton from "../components/QualityButton";
import Sidepanel from "../components/Sidepanel";
import Menu from "../components/Menu";
import Start from "../components/Start";
import TopVideo from "./TopVideo";
import VideoArray from "./VideoArray";
import { connect } from "react-redux";
import {
  openPanel,
  closePanel,
  requestLyrics,
  playAtTop,
  closeAtTop,
  PlayVideo,
  PauseVideo,
  toggleRepeat,
  playNext,
  playNextAtTop,
  clearLyrics,
  playNextTrack,
  playPreviousTrack,
  toggleQuality,
} from "../actions";
import "tachyons";
// import { getLyrics, getSong, searchSong } from "genius-lyrics-api";

const mapStateToProps = (state) => {
  return {
    isOpen: state.isOpen,
    paddingLeftVideos: state.paddingLeftVideos,
    lyrics: state.lyrics,
    isPlayAtTop: state.isPlayAtTop,
    videoAtTop: state.videoAtTop,
    isVideoPlaying: state.isVideoPlaying,
    VideoPlaying: state.VideoPlaying,
    videoToBePaused: state.videoToBePaused,
    repeat: state.repeat,
    nextVideoToBePlayed: state.nextVideoToBePlayed,
    nextVideoTitleToBePlayed: state.nextVideoTitleToBePlayed,
    previousVideoTitleToBePlayed: state.previousVideoTitleToBePlayed,
    quality: state.quality,
    title: state.title,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onOpenPanel: () => dispatch(openPanel()),
    onClosePanel: () => dispatch(closePanel()),
    onLyricsRequest: (event) => {
      // console.log('event',event)
      return dispatch(requestLyrics(event.target.innerText));
    },
    onPlayAtTop: (event) =>
      dispatch(playAtTop(event.target.parentElement.parentElement)),
    onCloseVideo: () => dispatch(closeAtTop()),
    onPlayVideo: (event) =>
      dispatch(PlayVideo(event.target.parentElement.parentElement)),
    onPauseVideo: (event) =>
      dispatch(PauseVideo(event.target.parentElement.parentElement)),
    onRepeat: () => dispatch(toggleRepeat()),
    onVideoEnded: (event) =>
      dispatch(playNext(event.target.parentElement.parentElement)),
    onplayNextAtTop: (event) =>
      dispatch(
        playNextAtTop(event.target.parentElement.parentElement.parentElement)
      ),
    onResetButton: () => dispatch(clearLyrics()),
    onNextTrack: (event) =>
      dispatch(
        playNextTrack(event.target.parentElement.parentElement.parentElement)
      ),
    onPreviousTrack: (event) =>
      dispatch(
        playPreviousTrack(
          event.target.parentElement.parentElement.parentElement
          // .parentElement added 2 times
        )
      ),
    onQuality: (event) => dispatch(toggleQuality()),
  };
};

class App extends Component {
  componentDidMount() {
    // let options = {
    //   apiKey:
    //     "IRSuj1ezuTpQz2fj1P-QCcH8YtM6b9n6fZ0jCpXGxQQohzrAFlEm-3rHsPFkDA9D",
    //   // '',
    //   title: "often",
    //   artist: "",
    //   // optimizeQuery: true
    // };
    // try {
    //   searchSong(options).then((data) => {
    //     // console.log('data: ',data)
    //     getLyrics(options)
    //       .then((lyrics) => {
    //         // console.log('options: ',options)
    //         // console.log(lyrics)
    //         console.log("data: ", data);
    //         let obj = {
    //           lyrics: lyrics,
    //           title: data[0].title,
    //           album: data[0].albumArt,
    //         };
    //         console.log("obj: ", obj);
    //         let jsonformat = JSON.stringify(obj);
    //       })
    //       .catch((error) => {
    //         console.log("error: ", error);
    //       });
    //   });
    // } catch (err) {
    //   console.log(err);
    // }
    // fetch('https://genius.com/Eagles-the-last-resort-lyrics')
    // .then(response=>response.json())
    // .then(data=>{
    //   console.log('data: ',data)
    // })
    // .catch(error=>{
    //   console.log('error: ',error)
    // })
  }

  render() {
    const { isOpen, onOpenPanel, onClosePanel, paddingLeftVideos } = this.props;
    const {
      onLyricsRequest,
      lyrics,
      onTopButton,
      offTopButton,
      isOnTopButton,
      onResetButton,
      title,
    } = this.props;
    const { onPlayAtTop, isPlayAtTop, videoAtTop, onCloseVideo } = this.props;
    const { onPlayVideo, onPauseVideo, videoToBePaused } = this.props;
    const {
      repeat,
      onRepeat,
      onVideoEnded,
      nextVideoToBePlayed,
      onplayNextAtTop,
      nextVideoTitleToBePlayed,
      onNextTrack,
      onPreviousTrack,
      onQuality,
      quality,
    } = this.props;
    let shiftPage = "";
    if (paddingLeftVideos === true) shiftPage = "pl7";

    let fade = "";
    if (isOnTopButton === true) fade = "fade";

    return (
      <div className="">
        <LyricsButton onOpenPanel={onOpenPanel} />
        <RepeatButton onRepeat={onRepeat} repeat={repeat} />
        <QualityButton onQuality={onQuality} quality={quality} />
        <Menu
          repeat={repeat}
          quality={quality}
          onOpenPanel={onOpenPanel}
          onQuality={onQuality}
          onRepeat={onRepeat}
        />
        <Sidepanel
          isOpen={isOpen}
          onClosePanel={onClosePanel}
          lyrics={lyrics}
          title={title}
          onResetButton={onResetButton}
        />

        <Start />
        <div className={shiftPage}>
          <TopVideo
            videoAtTop={videoAtTop}
            isPlayAtTop={isPlayAtTop}
            onLyricsRequest={onLyricsRequest}
            onCloseVideo={onCloseVideo}
            onPlayVideo={onPlayVideo}
            onPauseVideo={onPauseVideo}
            videoToBePaused={videoToBePaused}
            onplayNextAtTop={onplayNextAtTop}
            nextVideoTitleToBePlayed={nextVideoTitleToBePlayed}
            onNextTrack={onNextTrack}
            onPreviousTrack={onPreviousTrack}
          />
          <VideoArray
            onLyricsRequest={onLyricsRequest}
            onPlayAtTop={onPlayAtTop}
            onPlayVideo={onPlayVideo}
            onPauseVideo={onPauseVideo}
            videoToBePaused={videoToBePaused}
            onVideoEnded={onVideoEnded}
            nextVideoToBePlayed={nextVideoToBePlayed}
            quality={quality}
          />
        </div>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
