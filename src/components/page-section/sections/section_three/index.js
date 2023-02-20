import React from "react";
import "./index.css"
import ThisWebsiteImg from "./imgs/this_website.png"
import FlawlessCleanImg from "./imgs/flawlessclean.png"

const myProjects = [
    {name: "This Website", img: ThisWebsiteImg, description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam arcu purus, viverra tincidunt ipsum quis, varius suscipit purus. Nullam interdum lorem vitae nulla porta, sit amet bibendum nisl congue. Phasellus eu gravida sem. Sed tempor pellentesque porttitor. Donec vel odio sed ipsum scelerisque faucibus non non urna. Sed dignissim odio ligula, ut suscipit nulla suscipit eu. Fusce erat dui, placerat vel risus vel, finibus efficitur metus. Suspendisse vitae libero justo.", technologies: "HTML, CSS, JavaScript, React, REST API", url: "https://pedrorennamoore.github.io/", repo: "https://github.com/PedroRennaMoore/pedrorennamoore.github.io-files"},
    {name: "Flawless Clean", img: FlawlessCleanImg, description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam arcu purus, viverra tincidunt ipsum quis, varius suscipit purus. Nullam interdum lorem vitae nulla porta, sit amet bibendum nisl congue. Phasellus eu gravida sem. Sed tempor pellentesque porttitor. Donec vel odio sed ipsum scelerisque faucibus non non urna. Sed dignissim odio ligula, ut suscipit nulla suscipit eu. Fusce erat dui, placerat vel risus vel, finibus efficitur metus. Suspendisse vitae libero justo.", technologies: "HTML, CSS, JavaScript", url: "https://flawlessclean.ie", repo: ""}
]

function SectionThree(props) {

    function checkPrivateRepo(repo) {
        if(repo !== "") {
            return <p><a target="_blank" rel="noreferrer" href={repo}>Repo</a></p>
        } else {
            return <p>Sorry, this repository is Private</p>
        }
    }

    return (
        <div className="section_three_container">
            <div className={`section_three_content ${props.active}`}>
                <div className="my_projects_header">
                    <div className="my_projects_title">
                        <p>Take a look at my</p>
                        <div className="project_title_line"></div>
                        <h4>Projects</h4>
                    </div>
                </div>
                <div className="my_projects_body">
                    <div className="my_projects_itens">
                        <ul>
                            {myProjects.map(project => {
                                return <li key={project.name} className={`projects_item ${props.active}`}>
                                            <div className="project_img">
                                                <img src={project.img} alt="" />
                                            </div>
                                            <div className="project_text">
                                                <h4>{project.name}</h4>
                                                <div className="project_technologies">
                                                    <p className="project_technologies_title">Technologies Used: </p>
                                                    <p className="project_technologies_tech">{project.technologies}</p>
                                                </div>
                                                <div className="project_description">
                                                    <p>{project.description}</p>
                                                </div>
                                                <div className="project_links">
                                                    <p><a target="_blank" rel="noreferrer" href={project.url}>Live</a></p>
                                                    {checkPrivateRepo(project.repo)}
                                                </div>
                                            </div>
                                       </li>
                            })}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SectionThree