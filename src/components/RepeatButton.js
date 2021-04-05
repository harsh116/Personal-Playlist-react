import '../containers/App.css';

function RepeatButton(props)
{
	return(
	       <button onClick={props.onRepeat} className="repeatbtn">Repeat: {props.repeat}</button>
	    )
}

export default RepeatButton;