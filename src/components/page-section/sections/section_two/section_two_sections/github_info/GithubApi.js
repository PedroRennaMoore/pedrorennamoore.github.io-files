import React from "react";
import { useState, useEffect } from "react";
import "./github.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub} from "@fortawesome/free-brands-svg-icons";
import RepositoryIcon from "./imgs/git_hub.png"



function GithubApi(props) {

    const [gitHubEvents, setGitHubEvents] = useState([])
    const [gitRepositories, setGitRepositories] = useState([])
    

    async function getApiData(info = "") {
        let response = await fetch(`https://api.github.com/users/pedrorennamoore${info}`)
        let data = await response.json()
        return data
    }

    useEffect(() => {
        getApiData("/events").then(data => {
            setGitHubEvents(data)
         })
        getApiData("/repos").then(data => {
            setGitRepositories(data)
        })
    }, [])

    function changeLanguageColor(language) {
        if(language === "HTML") {return "language-color html"}
        if(language === "JavaScript") {return "language-color javascript"}
        if(language === "CSS") {return "language-color css"}
    }

    return(
        <div className="github_section">
            <div className={`github_content ${props.active}`}>
                <div className="github_header">
                    <FontAwesomeIcon icon={faGithub} fontSize="30" className="leet_code_icon" color="white" />
                    <h3>GitHub</h3>
                </div>
                <div className="github_body">
                    <div className="last_github_content">
                        <div className="last_title">
                            <img width="15" src={RepositoryIcon} alt="" />
                            <h4>Lasts Contributions</h4>
                        </div>
                        <div className="github_last_contributions">
                            <ul>
                                {gitHubEvents.filter((element, index) => index <= 5).map(gitEvent => {
                                    console.log(gitEvent)
                                    return <li key={gitEvent.id}>
                                                <h3><a target="_blank" rel="noreferrer" href={`https://github.com/PedroRennaMoore/${gitEvent.repo.name.slice(16)}`}>{gitEvent.repo.name.slice(16)}</a></h3>
                                                <p>Date: <b>{gitEvent.created_at.slice(0, 10)}</b> Hour: <b>{gitEvent.created_at.slice(11,16)}</b> {gitEvent.type} </p>
                                           </li>
                                })}
                            </ul>
                        </div>
                    </div>
                    <div className="github_repositories_content">
                            <div className="repositories_title">
                                <img width="15" src={RepositoryIcon} alt="" />
                                <h4>Repositories</h4>
                            </div>
                            <div className="github_repositories">
                                <ul>
                                    {gitRepositories.map(repository => {
                                        return <li key={repository.id}>
                                                    <h3><a
                                                        target="_blank"
                                                        rel="noreferrer"
                                                        href={`https://github.com/PedroRennaMoore/${repository.name}`}>{repository.name}
                                                    </a></h3>
                                                    <p className="github_repository_info_two">
                                                        Created: <b>{repository.created_at.slice(0, 10)}</b>
                                                        | Owner: <b>{repository.owner.login}</b>
                                                        | <b>{repository.language}</b>
                                                        <div className={changeLanguageColor(repository.language)}></div>
                                                    </p>
                                                </li>
                                    })}
                                </ul>
                            </div>
                    </div>
                </div>   
            </div>
        </div>
    )
}

export default GithubApi