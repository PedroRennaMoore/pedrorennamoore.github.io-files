import React from "react";
import "./index.css"
import PageSection from "../page-section";
import { useState, useEffect } from "react";

import SectionOne from "../page-section/sections/section_one";
import SectionTwo from "../page-section/sections/section_two";
import SectionThree from "../page-section/sections/section_three";
import SectionFour from "../page-section/sections/section_four";
import Header from "../shared/header";

const pageSections = ["#home","#about", "#projects", "#contact"]

function PageContainer() {


    const [activeSection, setActiveSection] = useState(pageSections[0])
    
    function sectionEffect() {
        pageSections.forEach(pageSection => {
            let sectionDiv = document.querySelector(pageSection)
            if(sectionDiv.getBoundingClientRect().top === 0 ) {
                setActiveSection(pageSection)
            }
        })

        let sectionTwoTop = document.querySelector(".section_two").getBoundingClientRect().top
        if(sectionTwoTop > -200 && sectionTwoTop < 200) {
            let dots = document.querySelectorAll('.dots')
            dots.forEach(dot => {
                dot.style.borderColor = "black"
            })
        } else {
            let dots = document.querySelectorAll('.dots')
            dots.forEach(dot => {
                dot.style.borderColor= "white"
            })
        }
    }

    useEffect(() => {
        const scrolllContainer = document.querySelector(".scroll_container");
    
        scrolllContainer.addEventListener("scroll", sectionEffect);

      
        return () => {
          
            scrolllContainer.removeEventListener("scroll", sectionEffect);

        };
      }, []);

    return (
        <div className="scrollers scroll_container">
            <Header/>
            <PageSection styles="section_one" id="home">
                <SectionOne active={activeSection === "#home" ? "active" : ""}/>
            </PageSection>
                
            <PageSection styles="section_two" id="about">
                <SectionTwo/>
            </PageSection>
            
            <PageSection styles="section_three" id="projects">
                <SectionThree active={activeSection === "#projects" ? "active" : ""}/>
            </PageSection>

            <PageSection styles="section_four" id="contact">
                <SectionFour active={activeSection === "#contact" ? "active" : ""}/>
            </PageSection>
        </div>
    )
}

export default PageContainer