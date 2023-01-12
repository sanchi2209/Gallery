
import React from "react"
import './image.css'

const LastPage=(props)=>{
    debugger
    console.log(props)
   const handleSlide =(notice)=>{
    debugger
    if(notice==="decrement"){
        if(props.get!==0){
            props.setGet((old)=>{
                return old-1
            })
        }
    }
    else{
        if(props.image.length-1!==props.get){
            props.setGet((old)=>{
                return old+1
            })
        }
    }
   }
    return(
        <div>
            <button onClick={()=>props.setPage(true)}>Back</button>
            <button onClick={()=>{handleSlide("decrement")}}><i class="fa fa-chevron-circle-left" aria-hidden="true"></i></button>
            <img src={props.image[props.get]} alt="img1" />
            <button onClick={()=>{handleSlide("increment")}}><i class="fa fa-chevron-circle-right" aria-hidden="true"></i></button>
        </div>
    )
}
export default LastPage