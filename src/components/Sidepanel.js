import '../containers/App.css';
import './Sidepanel.css';
import 'tachyons';

function Sidepanel(props)
{
	let className;
	if(props.isOpen===true)
		className="increase-width";
	else
		className="reduce-width";

	console.log('props in sidepanel',props);
	console.log('class in sidepanel',className);

	return(
	       <div className={`sidepanel ${className}`} >
		<a href="#!" id="closebtn" onClick={props.onClosePanel}>{'\u00d7'}</a>
		<h3 id="lyricsHeading">Lyrics</h3><button onClick={props.onResetButton} id="reset">Reset</button>
		<br/><br/>
		<div class="scrollable">
			<h4 id="title">{props.title}</h4>
			<br/>
			<p  className="new-line" id="lyrics">{props.lyrics}</p>
		</div>
		</div>
       );
}

export default Sidepanel;