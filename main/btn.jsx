export default function Btn(props){
    return(
    <button
    onClick={props.func}
    className={(props.types==="equal")?"equal-btn":"val-btn"}
    >
        {props.value}
    </button>
    )
}