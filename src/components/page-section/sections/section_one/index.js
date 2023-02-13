import React from "react";
import "./index.css"
import sectionOneImg from "./imgs/section_one_img.png"


function SectionOne() {

    return (
        <div className="section_one_container">
            <div className="section_one_content">
                <div className="text_content">
                    <div className="texts">
                        <h1>Frontend</h1>
                        <h2>Developer</h2>
                        <p className="p_one">Crafting the future</p>
                        <p className="p_two">one line of code at a time</p>
                    </div>
                </div>
                <div className="img_content">
                    <img src={sectionOneImg} width="400" alt="" />
                </div>
            </div>
            <div className="scroll_content">
                    <div className="mouse_container">
                        <div className="mouse_structure">
                            <div className="mouse_button"></div>
                        </div>
                    </div>
                    <div className="mouse_text">
                        <p>scroll down</p>
                    </div>
                </div>
        </div>
    )
}

export default SectionOne