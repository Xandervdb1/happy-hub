import Header from "@/Components/Header.jsx"
import { Link } from "@inertiajs/react"
import FormQuest from "@/Components/QuestForm.jsx"
import FormReward from "@/Components/RewardForm.jsx"
import MemberForm from "@/Components/MemberForm.jsx"
import FormTeam from "@/Components/TeamForm.jsx"

const show5 = () => {

}

const AdminDashboard = (props) => {
    // console.log(props.teams);
    // console.log(props.teamMembers);
    // console.log(props.roles);
    const teams = props.teams
    const teamMembers = props.teamMembers;
    const userCoins = props.userCoins;

    // console.log(teamMembers)

    console.log(props.logs);
    const logs = props.logs;


    return (
        <>
            <Header userCoins = {userCoins}/>
            <div className="adminDashboard">
                <h1 className="titlePage">Company Dashboard</h1>
                <div className="teamContainer">
                    <h1 className="titleDashboard"> Add Team</h1>
                    <FormTeam />
                    <p className="titleTable" id="name">name</p>
                    <p className="titleTable" id="member">members</p>
                    <div className="teams">
                        {

                            teams.map(team => (
                                <>
                                    {/* {console.log(team.id)} */}
                                    <div className="team"
                                        key={teams.id}>
                                        <p>{team.name}</p>
                                    </div>
                                </>
                            ))
                        }
                    </div>

                    <div className="members">
                        {
                            teamMembers.map(teamMember => (
                                <>
                                    <div className='listItem' key={teamMember.id}>
                                        <p>{teamMember.length}</p>
                                    </div>
                                </>
                            ))
                        }
                    </div>
                </div>


                <div className="quest">
                    <h1 className="titleDashboard">Add Quest</h1>
                    <FormQuest />

                </div>
                <Link className='linkAll' href='/all-quests'> &gt;&gt; See all</Link>


                <div className="member">
                    <h1 className="titleDashboard">Add Member</h1>
                    <MemberForm teams={props.teams} roles={props.roles} />
                </div>
                <Link className='linkAll' href='#'> &gt;&gt; See all</Link>


                <div className="rewardCompany">
                    <h1 className="titleDashboard">Add Reward</h1>
                    <FormReward />
                </div>
                <Link className='linkAll' href='/rewards-collection'> &gt;&gt; See all</Link>




                <div className="logContainer">
                    <h1 className="logTitle">Logs</h1>
                    <div className="log">
                        {
                            logs.slice(0, 3).map(log => {
                                if (log.scope === "Reward") {
                                    return (
                                        <>
                                            <div className="scope">
                                                <i><li className="timestamp">{log.created_at}</li></i>
                                                <p className="red"> {log.name} spent {log.scopeCoins.toLocaleString()} coins on {log.scopeName}.</p>
                                                <p className="coinTotal">(Total coins: {log.coins.toLocaleString()} coins)</p>
                                            </div>
                                        </>
                                    )
                                } else {
                                    return (
                                        <>
                                            <div className="scope">
                                                <i><li className="timestamp">{log.created_at}</li></i>
                                                <p className="green"> {log.name} gained {log.scopeCoins.toLocaleString()} coins for {log.scopeName}.</p>
                                                <p className="coinTotal">(Total coins: {log.coins.toLocaleString()})</p>
                                            </div>
                                        </>
                                    )
                                }
                            })

                        }
                    </div>
                </div>
                <Link href='all-logs' className="seeAllLogs"> see all logs</Link>
            </div >
        </>
    )

}
export default AdminDashboard;