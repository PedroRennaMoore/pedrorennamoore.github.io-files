import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import "./index.css"


function SocialIcons() {
    return (
        <div className="social_icons">
            <FontAwesomeIcon icon={faInstagram} fontSize="30" className="leet_code_icon" color="white" />
            <FontAwesomeIcon icon={faGithub} fontSize="30" className="leet_code_icon" color="white" />
            <FontAwesomeIcon icon={faLinkedin} fontSize="30" className="leet_code_icon" color="white" />
        </div>
    )
}

export default SocialIcons