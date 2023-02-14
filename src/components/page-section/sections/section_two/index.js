import React from "react";
import "./index.css"
import GithubApi from "./section_two_sections/github_info/GithubApi";
import AboutInfo from "./section_two_sections/about_info/AboutInfo";
import LeetcodeApi from "./section_two_sections/leet_info/LeetcodeApi";
import { useState, useEffect } from "react";

function SectionTwo() {

    const [aboutAtive, setAboutAtive] = useState("")
    const [gitAtive, setGitAtive] = useState("")

    function scrollEffect() {
        const aboutSection = document.querySelector(".about_me_section")
        const gitSection = document.querySelector(".github_section")

        let aboutTop = aboutSection.getBoundingClientRect().top
        let gitTop = gitSection.getBoundingClientRect().top

        if(aboutTop > -200 && aboutTop < 200) {
            setAboutAtive("active")
        } else {
            setAboutAtive("")
        }

        if(gitTop > -200 && gitTop < 200) {
            setGitAtive("active")
        } else {
            setGitAtive("")
        }
    }

    useEffect(() => {
        const aboutContainer = document.querySelectorAll(".scrollers")
        
        aboutContainer.forEach(scroller => {
            scroller.addEventListener("scroll", scrollEffect)
            return () => scroller.removeEventListener("scroll", scrollEffect)
        })
        
    },)


    return(
        <div className="scrollers section_two_container">
            <AboutInfo active={aboutAtive}/>
            <GithubApi active={gitAtive}/>
            <LeetcodeApi/>
        </div>
    )
}

export default SectionTwo