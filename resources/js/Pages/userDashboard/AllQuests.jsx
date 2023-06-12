import Header from "@/Components/Header";
import '../../../css/userDashboard/allQuests/allQuests.css';
import ProgressBar from "@/Components/ProgressBar";
import { Link } from "@inertiajs/react";
import { round } from "lodash";
import { useState } from "react";
// import { useState } from "react/cjs/react.production.min";
// import Checkbox from "@/Components/Checkbox";
// import * as React from 'react';

const AllQuests = (props) => {

    const { userQuests, teamQuests, userCoins, teamCoins } = props;
    // const bgColor = '#393E46';
    const bgColor = '#DFB444';

    // const [ checked, setChecked ] = useState(false);

    // const handleChange = () => {
    //     setChecked(!checked);
    // };

    return (
        <>
            <Header userCoins = {userCoins} />
            <div className="QuestContainer">
                <h1>QUESTS</h1>

                <div className="personalQuestsContainer" id='1'>
                    <p className='title'>Personal Quests</p>
                    <div className="personalQuests">
                        {
                            userQuests.map((userQuest) => {
                                const completed = (parseInt(userCoins) / parseInt(userQuest.coins)) * 100;
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
                                        {/* <div className="secondRow"> */}
                                        <ProgressBar bgcolor={bgColor} completed={completedRounded} />
                                        {/* <label>
                                                <input type="checkbox" 
                                                 checked={checked} onChange={handleChange} 
                                                />
                                            </label> */}
                                        {/* <Checkbox
                                                value={checked}
                                                onChange={handleChange}
                                            /> */}
                                        {/* <Checkbox /> */}

                                        {/* </div> */}
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
                <Link href='/user-dashboard' className="goBackButton">Go back</Link>
            </div>

        </>
    )
}

export default AllQuests;