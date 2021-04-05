import './App.css';
import {songs} from '../databases/songs';
import './TopVideo.css';
import {useState,useEffect} from 'react';

function TopVideo(props)
{
	// debugger;
	let res={};
		
		
		console.log('nextvideofortop: ',props.nextVideoTitleToBePlayed)
		
		
			if(props.nextVideoTitleToBePlayed.length>0)
			{
				songs.forEach( function(element, i) {
			// statements
				// console.log('element title',element.title)
				// console.log('matched: ',element.title===props.nextVideoTitleToBePlayed)
				if(element.title===props.nextVideoTitleToBePlayed)
					res=element;

			})
			}
				else if(props.isPlayAtTop===true)
				{
					songs.forEach( function(element, i) {
			// statements
				if(element.title===props.videoAtTop.innerText)
					res=element;
					
				})
				}
		
		

	console.log('res: ',res,)

	if(props.isPlayAtTop===false)
	{
		return(
		       <div class="" id="topcell">
		       </div>
	       )
	}
	else
	{	

		// console.log('topvideo res: ',res)
		const id=res.name+'_top';

		return(
	       <div class="flexy" id="topcell">
			 	<div class="cell dib ma-auto">
				<p className="lightbackground limitwidth tc ma-auto" onClick={props.onLyricsRequest}>{res.title}</p><br/>
				<div onClick={props.onCloseVideo} className="videocrossbtn tc at-end">{'\u00d7'}</div>
				<div onClick={props.onPreviousTrack} className="prevBtn tc">{'\u003c'}</div>
				<div onClick={props.onNextTrack} className="nextBtn tc at-end">{'\u003e'}</div>
				<video className="border topVideoResolution" id={id}  controls="controls"   preload="none" poster={res.poster}
				onPlay={props.onPlayVideo} onPause={props.onPauseVideo} onEnded={props.onplayNextAtTop} src={res.link} autoPlay
				>
				
				Browser not supporting video tag
				</video>
		
		
				</div>
			</div>
       );
	}
}


export default TopVideo;