import React, { useState, useEffect } from "react";
import { HashLink } from "react-router-hash-link";
import SocialIcons from "../social-icons";
import "./index.css";

import { faHouseUser, faUser, faDiagramProject, faEnvelope  } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const links = [
    { id: "home", label: "Pedro Moore", href: "#home", mobileIcon: faHouseUser},
    { id: "about", label: "About", href: "#about", mobileIcon: faUser },
    { id: "projects", label: "Projects", href: "#projects", mobileIcon: faDiagramProject},
    { id: "contact", label: "Contact", href: "#contact", mobileIcon: faEnvelope}
]

const dots = [
    {id: "dot1", section: "#about_me_section", name: "me"},
    {id: "dot2", section: "#github_section", name: "git"},
    {id: "dot3", section: "#leetcode_section", name: "leet"}
]

function Header() {
    
    const [ activeLink, setActiveLink ] = useState(links[0].id)
    const [ activeDot, setActiveDot ] = useState(dots[0].id)
    const [ aboutMobileActive, setAboutMobileActive] = useState("")

    const handleScroll = () => {
        links.forEach(link => {
            let element = document.querySelector(link.href)
            let elementTop = element.getBoundingClientRect().top
            if(elementTop < 200 && elementTop > -200) {
                setActiveLink(link.id)
            }
        })
    };

    function changeDotActive() {
        dots.forEach(dot => {
            let sectionTop = document.querySelector(dot.section).getBoundingClientRect().top
            if(sectionTop === 0) {
                setActiveDot(dot.id)
            }
        })
    }

    function scrollToSection(dotsection) {
        document.querySelector(dotsection).scrollIntoView({behavior: "auto"})

    }

    function checkIfIsAbout(label) {
        if(label === "About") {
            return <span className="dots_container">
                        {dots.map(dot => {
                            return <span onClick={() => {scrollToSection(dot.section)}} key={dot.id} className={activeDot === dot.id ? "dots active" : "dots"}></span>
                        })}
                </span>
        }
    }

    function checkIfIsAboutMobile(link) {
        if(link === "about") {
            return <div className={`about_mobile_itens ${aboutMobileActive}`}>
                        {dots.map(dot => {
                            return <span key={dot.id} className={dot.id === activeDot ? "about_mobile_item active" : "about_mobile_item"} onClick={() => {scrollToSection(dot.section)}}>{dot.name}</span>
                        })}
                   </div>
        }
    }

    function showAboutOptions(link) {
        if(link === "about" && aboutMobileActive === "") {
            setAboutMobileActive("active")
        } else {
            setAboutMobileActive("")
        }    
    }

    useEffect(() => {
        const scrollContainer = document.querySelector('.scroll_container');
        scrollContainer.addEventListener('scroll', handleScroll);
        return () => {
        scrollContainer.removeEventListener('scroll', handleScroll);
        };
    }, []);

    useEffect(() => {
        const scrollAboutContainer = document.querySelector('.section_two_container');
        scrollAboutContainer.addEventListener('scroll', changeDotActive);
        return () => {
        scrollAboutContainer.removeEventListener('scroll', changeDotActive);
        };
    }, []);

    return(
        <div className="header_config">
            <header>
                <div className="nav">
                    <ul>
                        {links.map(link => {
                            return <li className={`nav_item_${link.id}`} key={link.id}>
                                        <HashLink
                                        className={activeLink === link.id ? "nav_link active" : "nav_link"}
                                        to={link.href}
                                        scroll={(el) => {
                                            setTimeout(() => {
                                                el.scrollIntoView({
                                                    behavior: "auto"
                                                });
                                            }, 100);
                                        }}
                                        >{link.label}{checkIfIsAbout(link.label)}</HashLink>
                                   </li>
                        })}
                    </ul>
                </div>
                <div className={`mobile_nav`}>
                    <div className="mobile_nav_content">
                        <ul>
                            {links.map(link => {
                                return <li className={`mobile_nav_item_${link.id}`} key={link.id}>
                                    <HashLink
                                        onClick={() => showAboutOptions(link.id)}
                                        className={activeLink === link.id ? "mobile_nav_link active" : "mobile_nav_link"}
                                        to={link.href}
                                        scroll={(el) => {
                                            setTimeout(() => {
                                                el.scrollIntoView({
                                                    behavior: "auto"
                                                });
                                            }, 100);
                                        }}
                                    ><FontAwesomeIcon color={activeLink === link.id ? "#EF6461" : "#313638"} icon={link.mobileIcon}/></HashLink>
                                    {checkIfIsAboutMobile(link.id)}
                                </li>
                                
                            })}
                        </ul>
                    </div>  
                </div>
                <div className="social_icons">
                    <SocialIcons color="#E8E9EB"/>
                </div>
            </header>
        </div>
    )
}

export default Header