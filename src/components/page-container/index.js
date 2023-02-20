import React from "react";
import "./index.css"
import PageSection from "../page-section";
import { useState, useEffect } from "react";

import SectionOne from "../page-section/sections/section_one";
import SectionTwo from "../page-section/sections/section_two";
import SectionThree from "../page-section/sections/section_three";
import SectionFour from "../page-section/sections/section_four";
import Header from "../shared/header";

function PageContainer() {

    const [homeActive, setHomeActive] = useState("")
    const [portifolioActive, setPortifolioActive] = useState("")
    const [contactActive, setContactActive] = useState("")

    function sectionEffect() {
        const pageSections = document.querySelectorAll(".page_section")
        const [ homeSection, aboutSection, portifolioSection, contactSection ] = pageSections
        
        if(homeSection.getBoundingClientRect().top > -200 && homeSection.getBoundingClientRect().top < 200) {
            setHomeActive("active")
        } else {setHomeActive("")}

        if(portifolioSection.getBoundingClientRect().top > -200 && portifolioSection.getBoundingClientRect().top < 200) {
            setPortifolioActive("active")
        } else {setPortifolioActive("")}

        if(contactSection.getBoundingClientRect().top > -200 && contactSection.getBoundingClientRect().top < 200) {
            setContactActive("active")
        } else {setContactActive("")}

    }

    useEffect(() => {
        let sectionContainer = document.querySelector(".scroll_container")
        sectionContainer.addEventListener("scroll", sectionEffect)
        return () => {
            sectionContainer.removeEventListener("scroll", sectionEffect)
        }
    }, [])
    return (
        <div className="scrollers scroll_container">
            <Header/>
            <PageSection styles="section_one" id="home">
                <SectionOne active={homeActive}/>
            </PageSection>
                
            <PageSection styles="section_two" id="about">
                <SectionTwo/>
            </PageSection>
            
            <PageSection styles="section_three" id="portifolio">
                <SectionThree active={portifolioActive}/>
            </PageSection>

            <PageSection styles="section_four" id="contact">
                <SectionFour active={contactActive}/>
            </PageSection>
        </div>
    )
}

export default PageContainer