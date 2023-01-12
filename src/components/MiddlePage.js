import React from 'react'

import "./image.css"
const MiddlePage=(props)=>{
    
    return(
        <div onClick={()=>{props.handleKey(); props.setGet(props.index)}}>
            <img src={props.val}   alt="img2"/>

        </div>
    )


}

export default MiddlePage