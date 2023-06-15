import Header from "@/Components/HeaderMobile.jsx"
import HeaderDesktop from "@/Components/HeaderDesktop.jsx"
import { Link } from "@inertiajs/react"
import FormQuest from "@/Components/QuestForm.jsx"
import FormReward from "@/Components/RewardForm.jsx"
import MemberForm from "@/Components/MemberForm.jsx"
import FormTeam from "@/Components/TeamForm.jsx"
import TeamForm from "@/Components/TeamForm.jsx"

const AdminDashboard = (props) => {

    const teams = props.teams
    const teamMembers = props.teamMembers;
    const userCoins = props.userCoins;

    const logs = props.logs;

    return (
        <>
            <HeaderDesktop userCoins={userCoins} />
            <Header userCoins={userCoins} />
            {/* <div
                className="backgroundImage desktop"
                style={{ backgroundImage: "url('../teamwork3.jpg')" }}
            > */}
            <div className="adminDashboard">
                <h1 className="titlePage">Company Dashboard</h1>

                <div className="reverseDesktop">
                    <div>
                        <div className="teamContainer">
                            <TeamForm />
                            <div className="titletableflex">
                                <p className="titleTable" id="name">name</p>
                                <p className="titleTable" id="member">members</p>
                            </div>
                            <hr />
                            <div className="teammembersflex">
                                <div className="teams">
                                    {
                                        teams.map(team => (
                                            <>
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
                                                <div className="listItem" key={teamMember.id}>
                                                    <p>{teamMember.length}</p>
                                                </div>
                                            </>
                                        ))
                                    }
                                </div>
                            </div>
                        </div>
                        <div className="logContainer">
                            <div>
                                <h1 className="logTitle">Logs</h1>
                                <hr />
                            </div>
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
                            <Link href="all-logs" className="linkAll" id="logLink"> &gt;&gt; See all logs</Link>
                        </div>
                    </div>
                    <div className="seeAllLinks">
                        <div className="memberCompany">
                            <MemberForm teams={props.teams} roles={props.roles} />
                            <Link className="linkAll" href="/company-members" id="memberLink"> &gt;&gt; See all</Link>
                        </div>
                        <div className="quest">
                            <FormQuest />
                            <Link className="linkAll" href="/all-quests" id="questLink"> &gt;&gt; See all</Link>
                        </div>
                        <div className="rewardCompany">
                            <FormReward />
                            <Link className="linkAll" href="/rewards-collection" id="rewardLink"> &gt;&gt; See all</Link>
                        </div>
                    </div>
                </div>


            </div >
            {/* </div> */}
        </>
    )

}
export default AdminDashboard;