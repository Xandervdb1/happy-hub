import Header from "@/Components/HeaderMobile";
import HeaderDesktop from "@/Components/HeaderDesktop.jsx"
import '../../../css/userDashboard/allQuests/allQuests.css';
import ProgressBar from "@/Components/ProgressBar";
import { Link } from "@inertiajs/react";

const AllQuests = (props) => {
    const { userQuests, teamQuests, userCoins, teamCoins } = props;
    const bgColor = '#DFB444';

    function handleChange(e) {
        setChecked(e.target.checked);
    }

    return (
        <>
            <HeaderDesktop userCoins={userCoins} />
            <Header userCoins={userCoins} />
            <h1>QUESTS</h1>
            <div className="QuestContainer">
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
                                                <p className="questCoins">{userQuest.coins.toLocaleString()}</p>
                                                <img className="coins" src="../coin.png" alt="coin Happy Hub" />
                                                <br />
                                            </div>
                                        </div>
                                        <div className="secondRow">
                                            <ProgressBar bgcolor={bgColor} completed={completedRounded} />
                                            <Link as="button" method="post" href="/finish-quest">Complete quest</Link>
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
                                const completed = Math.min((parseInt(teamCoins) / parseInt(teamQuest.coins)) * 100, 100);
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
            <Link href='/user-dashboard' className="goBackButton">Go back</Link>
        </>
    )
}

export default AllQuests;