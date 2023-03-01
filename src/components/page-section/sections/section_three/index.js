import React from "react";
import "./index.css"
import ThisWebsiteImg from "./imgs/this_website.png"
import FlawlessCleanImg from "./imgs/flawlessclean.png"

const myProjects = [
    {name: "This Website", img: ThisWebsiteImg, technologies: "HTML | CSS | JavaScript | React | REST API", url: "https://pedrorennamoore.github.io/", repo: "https://github.com/PedroRennaMoore/pedrorennamoore.github.io-files"},
    {name: "Flawless Clean", img: FlawlessCleanImg, technologies: "HTML | CSS | JavaScript", url: "https://flawlessclean.ie", repo: ""}
]

function SectionThree(props) {

    function checkPrivateRepo(repo) {
        if(repo !== "") {
            return <p><a target="_blank" rel="noreferrer" href={repo}>Repo</a></p>
        } else {
            return <p>Private Repository</p>
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
                                            <h4>{project.name}</h4>
                                            <div className="project_img">
                                                <img src={project.img} alt="" />
                                            </div>
                                            <div className="project_technologies">
                                                    <p className="project_technologies_tech">{project.technologies}</p>
                                            </div>
                                            <div className="project_links">
                                                    <p><a target="_blank" rel="noreferrer" href={project.url}>Live</a></p>
                                                    {checkPrivateRepo(project.repo)}
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