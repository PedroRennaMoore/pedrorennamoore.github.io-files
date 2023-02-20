import React from "react";
import "./index.css"

function TransitionEffect(props) {
    return(
        <div className="transition_container">
            <div className={`transition_content ${props.active}`}></div>
        </div>
    )
}

export default TransitionEffect