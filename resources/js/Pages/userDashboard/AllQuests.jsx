import Header from "@/Components/Header";
import quests from "./questcss/quests.css";
import ProgressBar from "@/Components/ProgressBar";

const AllQuests = (props) => {
    // console.log(props.userQuests.name);
    // console.log(props.teamQuests);
    
    const { userQuests, teamQuests } = props;

    const testData = 
        { bgcolor: "#393E46", completed: 60 };

    return (
        <>
            <Header />
            <div className="QuestContainer">
                <h1>QUESTS</h1>
                
                <div className="personalQuestsContainer" id='1'>
                    <p className='title'>Personal Quests</p>
                    <div className="personalQuests">
                        {
                            userQuests.map((userQuest) => (
                                <div className="personalQuest" key={userQuest.id}>
                                    <div className="firstRow">
                                        <p className="name">{userQuest.name}</p>
                                        <div className="column">
                                            <p className="questCoins">{userQuest.coins}</p>
                                            <img className="coins" src="../coin.png" alt="coin Happy Hub" />
                                            <br />
                                        </div>
                                    </div>
                                    <ProgressBar bgcolor={testData.bgcolor} completed={testData.completed} />
                                </div>
                            ))
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
                                    <ProgressBar bgcolor={testData.bgcolor} completed={testData.completed} />
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