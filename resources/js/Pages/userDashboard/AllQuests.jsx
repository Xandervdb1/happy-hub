import Header from "@/Components/Header";
import UserDashboard from "./UserDashboard.css";

const AllQuests = (props) => {
    // console.log(props.userQuests.name);
    // console.log(props.teamQuests);
    
    const { userQuests, teamQuests } = props;
   

    return (
        <>
            <Header />
            <div className="QuestContainer">
            <h1>QUESTS</h1>
            <div className='personalQuestsContainer'>
                <p className='title'>Personal Quests</p>
                

                <div className="personalQuests">
                        <table>
                            <tbody>
                                {
                                    userQuests.map((userQuest) => (
                                        <tr key={userQuest.id}>
                                            <td>{userQuest.name}</td>
                                            <div className="tableColumn">
                                                <td>{userQuest.coins}</td>
                                                <img className="coins" src="../coin.png" alt="coin Happy Hub" />
                                            </div>
                                        </tr>
                                    ))
                                }
                            </tbody>
                        </table>
                </div>
                <br />
                <div className="teamQuestsContainer">
                    <p className="title">Your team quests</p>
                    
                    <div className="teamQuest">
                        <table>
                            <tbody>
                                {teamQuests.map((teamQuest) => (
                                    <tr key={teamQuest.id}>
                                        <td>{teamQuest.name}</td>
                                        <div className="tableColumn">
                                            <td>{teamQuest.coins}</td>
                                            <img className="coins" src="../coin.png" alt="coin Happy Hub" />
                                        </div>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
            </div>
            
        </>
    )
}
export default AllQuests;