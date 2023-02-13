import React from "react";
import "./index.css"
import PageSection from "../page-section";

import SectionOne from "../page-section/sections/section_one";
import SectionTwo from "../page-section/sections/section_two";
import Header from "../shared/header";


function PageContainer(props) {
    return (
        <div className="scroll_container">
            <Header/>
            <PageSection styles="section_one" id="home">
                <SectionOne/>
            </PageSection>
                
            <PageSection styles="section_two" id="about">
                <SectionTwo/>
            </PageSection>
            <PageSection styles="section_three" id="portifolio"/>
            <PageSection styles="section_four" id="contact"/>
        </div>
    )
}

export default PageContainer