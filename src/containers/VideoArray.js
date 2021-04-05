import './App.css';
import Video from './Video';
import {songs} from '../databases/songs.js';
import {lowerQuality} from '../databases/lowerQualityLinks.js';
import {higherQuality} from '../databases/higherQualityLinks.js';
import 'tachyons';


	 


function VideoArray(props)
{

	let videolist=songs.map((song,i)=>{
	 	// console.log(i+1,':',song)
	 	let link=song.link;
	 	if(props.quality==='Low')
	 	{
	 		lowerQuality.forEach( function(element, index) {
	 			// statements
	 			if(element.title===song.title)
	 				link=element.link;
	 		});
	 	}
	 	if(props.quality==='High')
	 	{
	 		higherQuality.forEach( function(element, index) {
	 			// statements
	 			if(element.title===song.title)
	 				link=element.link;
	 		});
	 	}
	 	return (
	 	        <Video
	 	        id={song.name}
	 	        poster={song.poster}
	 	        link={link}
	 	        title={song.title}
	 	        onLyricsRequest={props.onLyricsRequest}
	 	        onPlayAtTop={props.onPlayAtTop}
	 	        onPlayVideo={props.onPlayVideo}
	 	        onPauseVideo={props.onPauseVideo}
	 	        videoToBePaused={props.videoToBePaused}
	 	        onVideoEnded={props.onVideoEnded}
	 	        nextVideoToBePlayed={props.nextVideoToBePlayed}


	 	        />
	 	    )
	 })
	// console.log('videolist',videolist)
	return (
	        <div class="container ml2" id="videoArray">
	        {videolist}
	        </div>
        )
}

export default VideoArray;