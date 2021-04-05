import '../containers/App.css';
// let qualityStatus="Medium";

function QualityButton(props)
{
	return(
	       <button onClick={props.onQuality} className="quality">Quality: {props.quality}</button>
       );
}

export default QualityButton;