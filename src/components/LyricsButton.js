import {Component} from 'react';
import '../containers/App.css';

function LyricsButton(props)
{
	return(
	       <button onClick={props.onOpenPanel} className="openbtn">Open Lyrics Panel</button>
	    );
}

export default LyricsButton;