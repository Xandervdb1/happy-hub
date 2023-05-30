import Header from "@/Components/Header.jsx"
import { Link } from "@inertiajs/react"
import QuestForm from "@/Components/QuestForm.jsx"
import RewardForm from "@/Components/RewardForm.jsx"
import MemberForm from "@/Components/MemberForm.jsx"
import 'reactjs-popup'
import Popup from "reactjs-popup"


const AdminDashboard = (props) => {

    return (
        <>
            <Header />
            <div className="adminDashboard">
                <h1 className="titlePage">Company Dashboard</h1>
                <div className="teamContainer">
                    <h1 className="titleDashboard">Team</h1>
                    <p className="addLink">+</p>
                    <p className="titleTable" id="name">name</p>
                    <p className="titleTable" id="member">members</p>
                    <p>groups</p>
                    <p>#</p>
                </div>
                <div className="quest">
                    <h1 className="titleDashboard">Add Quest</h1>
                    <Popup trigger={<p className="addLink">+</p>} position='left center'>
                        <QuestForm />
                    </Popup>
                </div>
                <div className="member">
                    <h1 className="titleDashboard">Add Member</h1>
                    <Popup trigger={<p className="addLink">+</p>} position='left center'>
                        <MemberForm />
                    </Popup>
                </div>
                <div className="reward">
                    <h1 className="titleDashboard">Add Reward</h1>
                    <Popup trigger={<p className="addLink">+</p>} position='left center'>
                        <RewardForm />
                    </Popup>
                </div>
                <div className="logContainer">
                    <h1 className="logTitle">Logs</h1>
                    <hr />
                    <div className="log">
                        <li>17/05/2023 - 12:51</li>
                        <p> Person X did this and spent # coins. (# total coins.)</p>
                    </div>
                </div>
                <Link href='#' className="seeAllLogs"> see all logs</Link>
            </div>
        </>
    )

}
export default AdminDashboard;