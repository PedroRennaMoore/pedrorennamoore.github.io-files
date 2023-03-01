import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import "./index.css"


function SocialIcons(props) {
    return (
        <div className="social_icons">
            <a rel="noreferrer" target="_blank" href="https://www.instagram.com/">
                <FontAwesomeIcon icon={faInstagram} fontSize="30" className="leet_code_icon" color={props.color} />
            </a>
            <a rel="noreferrer" target="_blank" href="https://github.com/PedroRennaMoore">
                <FontAwesomeIcon icon={faGithub} fontSize="30" className="leet_code_icon" color={props.color} />
            </a>
            <a rel="noreferrer" target="_blank" href="https://www.linkedin.com/in/pedrorennamoore/">
                <FontAwesomeIcon icon={faLinkedin} fontSize="30" className="leet_code_icon" color={props.color} />
            </a>
        </div>
    )
}

export default SocialIcons