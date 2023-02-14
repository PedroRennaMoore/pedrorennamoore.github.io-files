import React, { useState, useEffect } from "react";
import { HashLink } from "react-router-hash-link";
import SocialIcons from "../social-icons";
import "./index.css";

const links = [
    { id: "home", label: "Pedro Moore", href: "#home",},
    { id: "about", label: "About", href: "#about" },
    { id: "portifolio", label: "Portifolio", href: "#portifolio"},
    { id: "contact", label: "Contact", href: "#contact"}
]

function Header() {
    
    const [ activeLink, setActiveLink ] = useState(links[0].id)

    const handleScroll = () => {
        links.forEach(link => {
            let elementTop = document.querySelector(link.href).getBoundingClientRect().top;
            if(elementTop <= 200 && elementTop >= -200) {
                setActiveLink(link.id)
            }
        })
      };

      useEffect(() => {
        const scrollContainer = document.querySelector('.scroll_container');
        scrollContainer.addEventListener('scroll', handleScroll);
        return () => {
          scrollContainer.removeEventListener('scroll', handleScroll);
        };
      }, []);

    return(
        <div className="header_config">
            <header>
                <div className="nav">
                    <ul>
                        {links.map(link => {
                            return <li  key={link.id}>
                                        <HashLink
                                        className={activeLink === link.id ? "nav_link active" : "nav_link"}
                                        smooth to={link.href}
                                        >{link.label}</HashLink>
                                   </li>
                        })}
                    </ul>
                </div>
                <div className="social_icons">
                    <SocialIcons/>
                </div>
            </header>
        </div>
    )
}

export default Header