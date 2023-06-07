import Header from "@/Components/Header.jsx"
import { Link } from "@inertiajs/react"
import FormQuest from "@/Components/QuestForm.jsx"
import FormReward from "@/Components/RewardForm.jsx"
import MemberForm from "@/Components/MemberForm.jsx"
import FormTeam from "@/Components/TeamForm.jsx"

const AdminDashboard = (props) => {
    console.log(props.teams);
    console.log(props.teamMembers);
    // console.log(props.roles);
    const teams = props.teams
    const teamMembers = props.teamMembers;
    console.log(teamMembers)


    return (
        <>
            <Header />
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
                                    {console.log(team.id)}
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
                    <hr />
                    <div className="log">
                        <li>17/05/2023 - 12:51</li>
                        <p> Person X did this and spent # coins. (# total coins.)</p>
                    </div>
                </div>
                <Link href='#' className="seeAllLogs"> see all logs</Link>
            </div >
        </>
    )

}
export default AdminDashboard;