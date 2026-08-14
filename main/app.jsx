import { useState ,Fragment} from "react";
import Btn from "./btn.jsx"
export default function App(){
    const btnvalues=["clear","<X","(",")","1","2","3","+","4","5","6","-","7","8","9","*",".","0","=","/"]
    const [screen,setscreen]=useState([])
    const [ans,setans]=useState(null)
    const [ansshown,setshown]= useState(false)
    function answer(){
        new Function(`return ${screen.join("")}`)
        return screen.join("")
    }
    function handleinput(event){
        const val=event.target.value;
        setans(answer())
        if (val in ["1","2","3","+","4","5","6","-","7","8","9","*",".","0","/","(",")"]){
            setscreen((prev) => 
            [...prev,val])
        } else if (val==="<X"){
            setscreen(prev => prev.slice(0, -1));
            const answer=answer()
            setans(answer)
        }
        else if (val==="clear"){
            setscreen([])
            setans(null)
        }else if (val==="="){
            setshown(true)
        }

    }
    return(
        <>
        <h1>CALCULATOR</h1>
        <div className="screen">
            {!ansshown && <h2>{screen}</h2>}
            {ansshown? <h1>{ans}</h1>:<h4>{ans}</h4>}
        </div>
        <div className="btns">
            {btnvalues.map((val)=>
            <Btn 
            value= {val}
            type= {(val==="=")? "equal-btn":"val-btn"}
            func={handleinput}
            />
            )}
        </div>
        </>
    )
}