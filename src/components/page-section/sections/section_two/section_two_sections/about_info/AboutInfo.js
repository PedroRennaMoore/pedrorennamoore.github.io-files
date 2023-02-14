import React from "react";
import AboutImg from "../../imgs/about_me_img.jpg"
import BrazilFlag from "../../imgs/brazil-flag.webp"
import "./AboutInfo.css"


function AboutInfo(props) {
    return(
            <div className="about_me_section">
                <div className="about_me_content">
                    <div className="about_me_block_left">
                        <div className={`about_me_header ${props.active}`}>
                            <div className="about_me_img">
                                <img src={AboutImg} width="130" alt=""/>
                            </div>
                            <div className="about_me_header_text">
                                <p><b>Pedro Renna Moore</b></p>
                                <p>Junior Frontend Developer</p>
                                <p>Cork, Ireland</p>
                                <p>moorerpedro@gmail.com</p>
                                <p>+353 083 201 4007</p>
                                <p className="nactionality"> Brazilian <img src={BrazilFlag} width="20px"  alt="" /></p>
                            </div>
                        </div>
                        <div className={`about_me_side ${props.active}`}>
                            <div className="about_me_skills">
                                <h4>Skills</h4>
                                <ul>
                                    <li>HTML5</li>
                                    <li>CSS3</li>
                                    <li>JavaScript(ES6+)</li>
                                    <li>React</li>
                                    <li>Rest APIs</li>
                                    <li>Git</li>
                                    <li>GitHub</li>
                                    <li>Wordpress</li>
                                </ul>
                                <h4>Languages</h4>
                                <ul>
                                    <li>Portuguese - Native</li>
                                    <li>Ensglish - Intermediate</li>
                                </ul>
                            </div>
                        </div>   
                    </div>
                    <div className={`about_me_block_right ${props.active}`}>
                        <div className="about_me_right_text">
                            <p>I am a self-taught Front-end developer with experience creating responsive websites with HTML5, CSS3, JavaScript (ES6), using React as JS framework.</p>
                            <h5>Past Experiences:</h5>
                            <p>I have been working as a freelancer creating websites for the past 3 years using Wordpress Themes to meet the clients needs and desires. Dealing directly with the costumer, gave me the chance to improve my communication skills and also gave me the ability to help the costumer express his ideas better.</p>
                            <h5>About me:</h5>
                            <p>I always loved working with websites, but I felt limited working only with Wordpress Themes. To be able to create any kind of a website, I started studyning Full Stack Development content.</p>
                        </div>
                        <div className="about_me_buttons">
                            <button className="about_button_contact">Contact Me</button>
                            <button className="about_button_download">Download CV</button>
                        </div>
                    </div>
                </div>
            </div>
    )
}

export default AboutInfo