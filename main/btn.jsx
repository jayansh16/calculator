export default function btn(props){
    <button
    onClick={props.func}
    className="val-btn"
    >
        {props.value}
    </button>
}