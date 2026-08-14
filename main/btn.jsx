export default function Btn(props){
    return(
    <button
    onClick={props.func}
    value={props.value} 
    className={props.type}
    >
        {props.value}
    </button>
    )
}