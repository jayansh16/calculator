import { useState ,Fragment} from "react";
import Btn from "./btn.jsx"
export default function App(){
    const btnvalues=["clear","<X","(",")","1","2","3","+","4","5","6","-","7","8","9","*",".","0","=","/"]
    const [screen,setscreen]=useState([])
    const [ans,setans]=useState(null)
    function answer(){
        new Function(`return ${screen.join("")}`)
        return screen.join("")
    }
    function handleinput(event){
        const val=event.target.value;
        setans(answer())
        if (val in ["1","2","3","+","4","5","6","-","7","8","9","*",".","0","/"]){
            setscreen((prev) => 
            [...prev,val])
        } else if (val==="<X"){
            setscreen(prev => prev.slice(0, -1));

        }
    }
    return(
        <>
        <h1>CALCULATOR</h1>
        <div className="screen">
            <h2>{screen}</h2>
            <h4>{ans}</h4>
        </div>
        {btnvalues.map((val)=>
        <Btn 
         value= {val}
        />
        )}
        </>
    )
}