import {OPEN_LYRICS_PANEL,CLOSE_LYRICS_PANEL,REQUEST_LYRICS,
		PLAY_AT_TOP,CLOSE_AT_TOP,PLAY_VIDEO,PAUSE_VIDEO,
		TOGGLE_REPEAT,PLAY_NEXT_VIDEO,PLAY_NEXT_VIDEO_AT_TOP,CLEAR_LYRICS,
		NEXT_TRACK,PREVIOUS_TRACK,TOGGLE_QUALITY} from './databases/constants';

const openPanel=()=> 
{
	return({
		type: OPEN_LYRICS_PANEL
	})
}

const closePanel=()=>
{
	return({
		type: CLOSE_LYRICS_PANEL
	})
}

const requestLyrics=(text)=>
{
	return(
	{
		type: REQUEST_LYRICS,
		payload: text
	})
}

const playAtTop=(text)=>
{
	return(
	{
		type: PLAY_AT_TOP,
		payload: text
	})
}

const closeAtTop=()=>
{
	return(
	{
		type: CLOSE_AT_TOP
	})
}

const PlayVideo=(text)=>
{
	return({
		type: PLAY_VIDEO,
		payload: text

	})
}

const PauseVideo=(text)=>
{
	return({
		type: PAUSE_VIDEO,
		payload: text

	})
}

const toggleRepeat=()=>
{
	return(
	{
		type:TOGGLE_REPEAT 
	})
}

const playNext=(text)=>
{
	return(
	{
		type: PLAY_NEXT_VIDEO,
		payload: text
	})
}

const playNextAtTop=(text)=>
{
	return(
	{
		type: PLAY_NEXT_VIDEO_AT_TOP,
		payload: text
	})
}

const clearLyrics=()=>
{
	return(
	{
		type: CLEAR_LYRICS,
	})
}

const playNextTrack=(text)=>
{
	return(
	{
		type: NEXT_TRACK,
		payload: text
	})
}

const playPreviousTrack=(text)=>
{
	return(
	{
		type: PREVIOUS_TRACK,
		payload: text
	})
}

const toggleQuality=()=>
{
	return(
	{
		type: TOGGLE_QUALITY
	})
}

export {openPanel,closePanel,requestLyrics,playAtTop,closeAtTop,PlayVideo,PauseVideo,
		toggleRepeat,playNext,playNextAtTop,clearLyrics,playNextTrack,playPreviousTrack,
	     toggleQuality};