import { useState ,Fragment} from "react";
import Btn from "./btn.jsx"
export default function App(){
    const btnvalues=["clear","<X","(",")","1","2","3","+","4","5","6","-","7","8","9","*",".","0","=","/"]
    const [screen,setscreen]=useState([])
    const [ans,setans]=useState(null)
    const [ansshown,setshown]= useState(false)
    function answer() {
    try {
        return new Function(`return ${screen.join("")}`)();  // ✅ the () at the end RUNS it
    } catch {
        return null;   // incomplete expression like "5+" → just show nothing
    }
}
    function handleinput(event){
        const val=event.target.value;
        setans(answer())
        if (["1","2","3","+","4","5","6","-","7","8","9","*",".","0","/","(",")"].includes(val)){
            setscreen((prev) => 
            [...prev,val])
        } else if (val==="<X"){
            setscreen(prev => prev.slice(0, -1));
        }
        else if (val==="clear"){
            setscreen([])
            setans(null)
            setshown(false)
        }else if (val==="="){
            setshown(true)
        }
        const ans = answer();

    }
    return(
        <>
        <h1 id="Head">CALCULATOR</h1>
        <div className="screen">
            {!ansshown && <h2>{screen}</h2>}
            {ansshown? <h1>{ans}</h1>:<h4>{ans}</h4>}
        </div>
        <div className="btns">
            {btnvalues.map((val)=>
            <Btn 
            value={val} 
            type={val === "=" ? "equal-btn" : "val-btn"} 
            func={handleinput} />
            )}
        </div>
        </>
    )
}