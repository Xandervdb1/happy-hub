import Nav from "@/Components/NavComponent.jsx";
import { Link } from "@inertiajs/react";
import Header from "@/Components/Header.jsx";

const UserDashboard = (props) => {
    console.log(props.userRewards)
    console.log(props.teamRewards)
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
                    {/* make the h2 seeAll  link to the rewards page */}
                    <h2 className="seeAll"> &gt; &gt; see all </h2>
                    <h1 className="title">Your Quests</h1>
                    <hr className="underline" />
                    <div className="priceContainer">
                        <img className="coins" src="../coin.png" alt="coin Happy Hub" />
                        <p className="price">200</p>
                    </div>
                    <div className="questRewards">
                        <p className="questReward"> sell 10.000 products</p>
                    </div>
                </div>
                <div className="teamQuests">
                    {/* make the h2 seeAll  link to the rewards page */}
                    <h2 className="seeAll"> &gt; &gt; see all </h2>
                    <h1 className="title">Team Quests</h1>
                    <hr className="underline" />
                    <div className="priceContainer">
                        <img className="coins" src="../coin.png" alt="coin Happy Hub" />
                        <p className="price">200</p>
                    </div>
                    <div className="questRewards">
                        <p className="questReward"> sell 10.000 products</p>
                    </div>
                </div>
                <div className="rewards">
                    {/* make the h2 seeAll  link to the rewards page */}
                    <h2 className="seeAll">&gt; &gt;see all </h2>
                    <h1 className="title">Rewards</h1>
                    <hr className="underline" />
                    <div className="reward">
                        <div className="totalReward">
                            <p className="activity">Bowling</p>
                            <div className="priceContainer">
                                <img className="coins" src="../coin.png" alt="coin Happy Hub" />
                                <p className="price">200</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default UserDashboard