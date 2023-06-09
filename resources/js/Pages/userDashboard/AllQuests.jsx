import Header from "@/Components/Header";
import '../../../css/userDashboard/allQuests/allQuests.css';
import ProgressBar from "@/Components/ProgressBar";
import { round } from "lodash";
import { useState } from "react";

const AllQuests = (props) => {

    const { userQuests, teamQuests, userCoins, teamCoins } = props;
    const bgColor = '#DFB444';

    function handleChange(e) {
        setChecked(e.target.checked);
    }
   
    return (
        <>
            <Header />
            <div className="QuestContainer">
                <h1>QUESTS</h1>

                <div className="personalQuestsContainer" id='1'>
                    <p className='title'>Personal Quests</p>
                    <div className="personalQuests">
                        {
                            userQuests.map((userQuest) => {
                                const completed = Math.min((parseInt(userCoins) / parseInt(userQuest.coins)) * 100, 100);
                                const completedRounded = Math.round(completed);
                                return (
                                    <div className="personalQuest" key={userQuest.id}>
                                        <div className="firstRow">
                                            <p className="name">{userQuest.name}</p>
                                            <div className="column">
                                                <p className="questCoins">{userQuest.coins}</p>
                                                <img className="coins" src="../coin.png" alt="coin Happy Hub" />
                                                <br />
                                            </div>
                                        </div>
                                        <div className="secondRow">
                                            <ProgressBar bgcolor={bgColor} completed={completedRounded} />
                                            <input value="test" type="checkbox" onChange={handleChange} />                                               
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>

                <div className="teamQuestsContainer" id='2'>
                    <p className="title">Your team quests</p>
                    <div className="teamQuests">
                        {
                            teamQuests.map((teamQuest) => {
                            const completed = (parseInt(teamCoins) / parseInt(teamQuest.coins)) * 100;
                                const completedRounded = Math.round(completed);
                                return (
                                <div className="teamQuest" key={teamQuest.id}>
                                    <div className="firstRow">
                                        <p className="name">{teamQuest.name}</p>
                                        <div className="column">
                                            <p className="questCoins">{teamQuest.coins}</p>
                                            <img className="coins" src="../coin.png" alt="coin Happy Hub" />
                                            <br />
                                        </div>
                                    </div>
                                    <ProgressBar bgcolor={bgColor} completed={completedRounded} />
                                </div>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        </>
    )
}

export default AllQuests;