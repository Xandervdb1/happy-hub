import Header from "@/Components/Header";

const AllQuests = (props) => {
    // console.log(props.userQuests.name);
    // console.log(props.teamQuests);
    
    const { userQuests, teamQuests } = props;
   

    return (
        <>
            <Header />
            <div className="titleContainer">
                <p>QUESTS</p>
            </div>
            <div className='questContainer'>
                <p className='title'>Personal Quests</p>
                <hr className="underline" />

                <div className="personalQuests">
                    <div className="reward">
                        <table>
                            <tbody>
                                {
                                    userQuests.map((userQuest) => (
                                        <tr key={userQuest.id}>
                                            <td>{userQuest.name}</td>
                                            <td>{userQuest.coins}</td>
                                            <img className="coins" src="../coin.png" alt="coin Happy Hub" />
                                        </tr>
                                    ))
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
                <br />
                <div className="teamQuests">
                    <h1 className="title">Your team quests</h1>
                    <hr className="underline" />
                    <div className="questRewards">
                        <table>
                            <tbody>
                                {teamQuests.map((teamQuest) => (
                                    <tr key={teamQuest.id}>
                                        <td>{teamQuest.name}</td>
                                        <td>{teamQuest.coins}</td>
                                        <img className="coins" src="../coin.png" alt="coin Happy Hub" />
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </>
    )
}
export default AllQuests;