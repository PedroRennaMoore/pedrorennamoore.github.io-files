import React from "react";
import "./leetcode.css"
import LeetcodeIcon from "./imgs/leetcode.webp"
import { useState, useEffect } from "react";

function LeetcodeApi(props) {

    const [leetData, setLeetData] = useState([])

    async function getLeetcodeApi() {
        try {
            let response = await fetch("https://leetcode-stats-api.herokuapp.com/kryerzz")
            let data = response.json()
            return data
        } catch(error) {
            return error
        }
    }

    useEffect(() => {
        getLeetcodeApi().then(data => {
            setLeetData(data)
        }).catch(error => {
            console.log(error)
        })
        
    }, [])

    function setProgresWidth(currentProgress, totalProgress) {
        let percent = (currentProgress / totalProgress) * 100
        let progressTotalWidht = 500
        let currentProgressWidth = (percent * progressTotalWidht) / 100
        return currentProgressWidth + "px"
    }

    function setTotalProgressDeg() {
        let percent = leetData.totalSolved / leetData.totalQuestions * 100
        let totalProgress = 360
        let currentProgressPercent = percent * totalProgress / 100
        return currentProgressPercent + 2 + "deg"
    }

    return(
        <div id="leetcode_section" className="leetcode_section">
            <div className={`leetcode_content ${props.active}`}>
                <div className="leetcode_header">
                    <img src={LeetcodeIcon} width="30" alt="" />
                    <h3>LeetCode</h3>
                </div>
                <div className="leetcode_body">
                    <div className="leetcode_user_info">
                        <div className="leetcode_user_status">
                            <p><b>kryerzz</b></p>
                            <p><b>Rank</b> {Intl.NumberFormat("en-US").format(leetData.ranking)}</p>
                            <p><b>AceptanceRate</b> {leetData.acceptanceRate}%</p>
                        </div>
                        <div className="leetcode_total_solved">
                            <div className="total_progress_bar" style={{background: `conic-gradient(orange ${setTotalProgressDeg()} , rgb(213, 213, 213) 0deg)`}}>
                                <div className="total_progress_info" >
                                    <p><b>{leetData.totalSolved}</b></p>
                                    <p style={{fontSize: 15, fontWeight: 300}}>Solved</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="solved_graph">
                        <div className="leet_code_solved easy_solved">
                            <div className="graph_text easy_text">
                                <p>Easy</p>
                                <p><b>{leetData.easySolved}</b> / {leetData.totalEasy}</p>
                            </div>
                            <div className="progress_bar easy_progress_bar">
                                <div className="current_progress easy_current_progress" style={{width: setProgresWidth(leetData.easySolved, leetData.totalEasy)}}></div>
                            </div>
                        </div>
                        <div className="leet_code_solved medium_solved">
                            <div className="graph_text medium_text">
                                <p>Medium</p>
                                <p><b>{leetData.mediumSolved}</b> / {leetData.totalMedium}</p>
                            </div>
                            <div className="progress_bar medium_progress_bar">
                                <div className="current_progress medium_current_progress" style={{width: setProgresWidth(leetData.mediumSolved, leetData.totalMedium)}}></div>
                            </div>
                        </div>
                        <div className="leet_code_solved hard_solved">
                            <div className="graph_text hard_text">
                                <p>Hard</p>
                                <p><b>{leetData.hardSolved}</b> / {leetData.totalHard}</p>
                            </div>
                            <div className="progress_bar hard_progress_bar">
                                <div className="current_progress hard_current_progress" style={{width: setProgresWidth(leetData.hardSolved, leetData.totalHard)}}></div>
                            </div>
                        </div>
                        <div className="medium_solved"></div>
                        <div className="hard_solved"></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LeetcodeApi