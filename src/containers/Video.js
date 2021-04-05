import './App.css';
import 'tachyons';
import './Video.css';
import {useState,useEffect,useRef} from 'react';
import {aboutDatabase} from '../databases/aboutDatabase';

function Video(props)
{
	let setID='';
	let f=0;
	let fref=useRef(f);
	let overlayImage='', overlayDescription='';
	aboutDatabase.forEach( function(element, index) {
		// statements
		if(element.title===props.title)
		{
			overlayImage=element.image;
			overlayDescription=element.details;
		}
	});

	const [fade,setFade]=useState('');
	const [visible,setVisible]=useState('overlay-hidden');
	const [positionY,setPositionY]=useState(0);
	const [positionX,setPositionX]=useState(0);
	const [isOnOverlay,setIsOnOverlay]=useState(false);

	const onTopButton=()=>{
		setFade('fade');
	}

	const offTopButton=()=>{
		setFade('');
	}

	let body=document.querySelector("#root");

	//to reduce the glitch effect by clicking on body
	body.addEventListener("click",()=>{
		
		setVisible('overlay-hidden');
	})

	const onVideo=()=>
	{
		let video=document.querySelector(`#${props.id}`);
		console.log('onVideo event')
		if(video!==null)
		{
			// window.clearTimeout(setID);
		// 	setID=setTimeout(()=>{
		// 		// debugger
		// 		console.log('isOnOverlay: ',fref)
		// 		if(fref.current===0)
		// 			setVisible('overlay-hidden');
		// },5000)
			
			fref.current=0;
			let positiony=video.offsetTop;
			let newpositionY=positiony- 280;

			let positionx= video.offsetLeft;
			let newpositionX=positionx-60 ;

			setPositionX(newpositionX);
			setPositionY(newpositionY);

			setVisible('overlay-visible');
		// 	setID=setTimeout(()=>{
		// 		// debugger
		// 		console.log('isOnOverlay: ',fref)
		// 		if(fref.current===0)
		// 			setVisible('overlay-hidden');
		// },5000)


	}
}

	const offVideo=()=>
	{
		console.log('offVideo event')
		setVisible('overlay-hidden');
		// window.clearTimeout(setID);
	}

	const onOverlay=()=>
	{
		// debugger
		console.log('onOverlay event')
		setVisible('overlay-visible');
		setIsOnOverlay(true);
		fref.current=1;
	}

	const offOverlay=()=>
	{
		console.log('offOverlay event')
		setVisible('overlay-hidden');
		fref.current=0;
		// setIsOnOverlay(false);
	}

	let styles={
		top: {positionY},
		left: {positionX},
	}

	useEffect(()=>
	{
		if(props.videoToBePaused.innerText===props.title)
		{
			let div=props.videoToBePaused.parentElement;
			let video=div.querySelector("video");
			video.pause();

		}
		if(props.nextVideoToBePlayed.innerText===props.title)
		{
			let div2=props.nextVideoToBePlayed.parentElement;
			let nextVideo=div2.querySelector("video");
			nextVideo.play();
		}
	})
	// console.log('onPauseVideo: ',props.onPauseVideo)
	return(
	       <div class="cell">
			<p className="lightbackground stroke" onClick={props.onLyricsRequest}>{props.title}</p>
			<div class="overlay" onMouseEnter={onTopButton} onMouseLeave={offTopButton}>
				<a onClick={props.onPlayAtTop} href="#topcell"
				 class="arrow">^</a>
			</div>
			<div className={fade}>
			</div>
			<div className= {`${visible} content`} id="overlay"
					style={{top: positionY, left: positionX}}
					
					onMouseEnter={onOverlay} onMouseLeave={offOverlay}
					>
				<img src={overlayImage} width="160" height="150" />
				<p> {overlayDescription}</p>
			</div>
			<div onMouseEnter={onVideo} onMouseLeave={offVideo}>
			<video  className="border" id={props.id} width="320" height="240"   preload="none" poster={props.poster} 
			onPlay={props.onPlayVideo} onPause={props.onPauseVideo} onEnded={props.onVideoEnded} src={props.link}
			controls
			>
			
				Browser not supporting video tag
			</video>
			</div>
			
		</div>
       )
}

export default Video;