import React from "react";
import "./index.css"

function PageSection(props) {
    return (
        <div id={props.id} className={`page_section ${props.styles}`}>
            {props.children}
        </div>
    )
}

export default PageSection