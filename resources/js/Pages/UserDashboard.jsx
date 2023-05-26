import Nav from "@/Components/NavComponent.jsx";
import { Link } from "@inertiajs/react";
import Header from "@/Components/Header.jsx";

const UserDashboard = () => {

    return (
        <>
            <Header />
            <div className="dashboardContainer">
                <div className="progressCarrousel">
                    <p>Next milestone</p>
                </div>
                <div className="profileInfo">
                    <p className="personalInfo">Name:</p>
                    <p className="personalInfo">Nickname:</p>
                    <p className="personalInfo">Birthday:</p>
                    <p className="personalInfo">Team:</p>
                    <br />
                    <p className="personalInfo">Personal Wallet:</p>
                    <p className="personalInfo">Team Wallet:</p>
                </div>
                <div className="personalQuests">
                    <h1 className="title">Your Quests</h1>
                    <hr className="underline" />
                    <div className="priceContainer">
                        <img className="coins" src="../coin.png" alt="coin Happy Hub" />
                        <p className="price">200</p>
                        <img className="coins" src="../coin.png" alt="coin Happy Hub" />
                        <p className="price">200</p>
                        <img className="coins" src="../coin.png"
                            alt="coin Happy Hub" />
                        <p className="price">200</p>
                    </div>
                </div>
                <div className="teamQuests">
                    <h1 className="title">Team Quests</h1>
                    <hr className="underline" />
                    <div className="priceContainer">
                        <img className="coins" src="../coin.png" alt="coin Happy Hub" />
                        <p className="price">200</p>
                    </div>
                </div>
                <div className="rewards">
                    <h1 className="title">Rewards</h1>
                    <hr className="underline" />
                </div>
            </div>
        </>
    )
}
export default UserDashboard