import Header from "@/Components/Header";
import quests from "./questcss/quests.css";
import ProgressBar from "@/Components/ProgressBar";

const AllQuests = (props) => {

    const { userQuests, teamQuests, userCoins, questCoins } = props;
    console.log(props.userCoins);

    // const userQuests = props.userQuests;
    // const teamQuests = props.teamQuests;
    // const userCoins = props.userCoins;
    // console.log(props.userCoins);
    // const questCoins = props.questCoins;



    const bgColor = '#393E46';

    // const testData = 
    // { bgcolor: "#393E46", completed: 60 };

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
                                const completed = (parseInt(userCoins) / parseInt(userQuest.coins)) * 100;
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
                                        <ProgressBar bgcolor={bgColor} completed={completed} />
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
                            teamQuests.map((teamQuest) => (
                                <div className="teamQuest" key={teamQuest.id}>
                                    <div className="firstRow">
                                        <p className="name">{teamQuest.name}</p>
                                        <div className="column">
                                            <p className="questCoins">{teamQuest.coins}</p>
                                            <img className="coins" src="../coin.png" alt="coin Happy Hub" />
                                            <br />
                                        </div>
                                    </div>
                                    {/* <ProgressBar bgcolor={bgColor} completed={completed} /> */}
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
        </>
    )
}
export default AllQuests;