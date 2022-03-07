
import { useState } from "react";

 
export function Invent({start,ClassADD,ClassRemove,ClassTotal,itemName,settotal}) {

let [item,setItem]  = useState(start)

function Changed(value) { 

    setItem((pre)=>{

        if(pre=== 0 && value === -1) {

            return 0

        } settotal((pre)=>{

            return pre + value
        })
        
        return pre + value
    })
}

 return (  <div div className = "items">




        <span > {itemName} </span>



        <button onClick={()=>{

            Changed(+1)

        }} 
        className={ClassADD}>+</button>
        <button onClick={()=>{
            Changed(-1)
        }} className={ClassRemove}> - </button>
        
        <span className={ClassTotal}>{item}</span>
        </div>
  )
}

