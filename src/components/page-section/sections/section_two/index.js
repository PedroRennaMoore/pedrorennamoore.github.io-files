import React from "react";
import "./index.css"
import GithubApi from "./section_two_sections/github_info/GithubApi";
import AboutInfo from "./section_two_sections/about_info/AboutInfo";
import LeetcodeApi from "./section_two_sections/leet_info/LeetcodeApi";
import { useState, useEffect } from "react";

function SectionTwo() {

    const [aboutAtive, setAboutAtive] = useState("")
    const [gitAtive, setGitAtive] = useState("")
    const [leetAtive, setLeetAtive] = useState("")

    function scrollEffect() {
        const aboutSection = document.querySelector(".about_me_section")
        const gitSection = document.querySelector(".github_section")
        const leetSection = document.querySelector(".leetcode_section")

        let aboutTop = aboutSection.getBoundingClientRect().top
        let gitTop = gitSection.getBoundingClientRect().top
        let leetTop = leetSection.getBoundingClientRect().top

        if(aboutTop > -200 && aboutTop < 200) {
            setAboutAtive("active")
        } else {
            setAboutAtive("")
        }

        if(gitTop > -200 && gitTop < 200) {
            setGitAtive("active")
            let gitBody = document.querySelector(".github_body")
            let gitScrollContent = document.querySelector(".github_repositories_content")
            let pagePadding = 20
            let gitBodyScroll = gitBody.clientHeight - gitScrollContent.clientHeight - pagePadding
            gitBody.scrollTop = gitBodyScroll

        } else {
            setGitAtive("")
        }

        if(leetTop > -200 && leetTop < 200) {
            setLeetAtive("active")
        } else {
            setLeetAtive("")
        }
    }


    useEffect(() => {
        const aboutContainer = document.querySelectorAll(".scrollers");
      
        aboutContainer.forEach((scroller) => {
          scroller.addEventListener("scroll", scrollEffect);
        });
      
        return () => {
          aboutContainer.forEach((scroller) => {
            scroller.removeEventListener("scroll", scrollEffect);
          });
        };
      }, []);


    return(
        
        <div className="scrollers section_two_container">
            <AboutInfo active={aboutAtive}/>
            <GithubApi active={gitAtive}/>
            <LeetcodeApi active={leetAtive}/>
        </div>
    )
}

export default SectionTwo