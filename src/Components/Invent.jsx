
import { useState } from "react";

 
export function Invent({initial,addcls,remcls,totalcls,itemName,settotal}) {

let [item,setItem]  = useState(initial)

function Changed(value) {
    setItem((pre)=>{
        if(pre===0 && value===-1) {
            return 0
        }
        settotal((pre)=>{
            return pre+value
        })
        return pre + value
    })
}

 return (  <div className="items">
        <span >{itemName}</span>
        <button onClick={()=>{
            Changed(+1)
        }} className={addcls}>+</button>
        <button onClick={()=>{
            Changed(-1)
        }} className={remcls}>-</button>
        <span className={totalcls}>{item}</span>
        </div>
  )
}

