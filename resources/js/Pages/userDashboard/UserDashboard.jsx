import { Link } from "@inertiajs/react";
import Header from "@/Components/Header.jsx";
import Carousel from "@/Components/WalletCarousel.jsx";


const UserDashboard = (props) => {
    const userName = props.auth.user.name
    const nickName = props.auth.user.username
    const birthday = props.auth.user.birthday
    const rewards = props.userRewards;
    const quests = props.userQuests;
    const teamQuests = props.teamQuests;
    const teamName = props.teamName
    const members = props.countTeamMembers

    return (
        <>
            <Header />
            <div className="dashboardContainer">
                <div className="progressCarrousel">
                    < Carousel personalWallet={props.auth.user.coins} teamWallet={props.sumTeamCoins} />
                </div>
                <div className="profileInfo">
                    <p className="personalInfo">Name: {userName}</p>
                    <p className="personalInfo">Nickname: {nickName}</p>
                    <p className="personalInfo">Birthday: {birthday}</p>
                    <p className="personalInfo">Team: {teamName}</p>
                    <p className="personalInfo">Team members:{members}</p>
                    <br />
                    {/* <p className="personalInfo">Personal Wallet:{personalWallet}</p>
                    <p className="personalInfo">Team Wallet:{teamWallet}</p> */}
                </div>
                <div className="personalQuests">
                    {console.log(props.userQuests)}

                    <Link preserveScroll href="/all-quests" className="seeAll">&gt; &gt; see all </Link>
                    <h1 className="title">Your Quests</h1>
                    <hr className="underline" />
                    {
                        quests.map(quest => (
                            <>
                                <div className="priceContainer">
                                    <img className="coins" src="../coin.png" alt="coin Happy Hub" />
                                    <p className="price">{quest.coins}</p>
                                </div>
                                <div className="questRewards" key={quest.id}>
                                    <p className="questReward">{quest.name}</p>
                                </div>
                            </>
                        ))
                    }
                </div>
                <div className="teamQuests">
                    <Link preserveScroll href="/all-quests" className="seeAll">&gt; &gt; see all </Link>
                    <h1 className="title">Team Quests</h1>
                    <hr className="underline" />
                    {
                        teamQuests.map(teamQuest => (
                            <>
                                <div className="priceContainer">
                                    <img className="coins" src="../coin.png" alt="coin Happy Hub" />
                                    <p className="price">{teamQuest.coins}</p>
                                </div>
                                <div className="questRewards" key={teamQuest.id}>
                                    <p className="questReward"> {teamQuest.name}</p>
                                </div>

                            </>
                        ))
                    }
                </div >


                <div className="rewards">
                    <Link href="/rewards-collection" className="seeAll">&gt; &gt; see all </Link>
                    <h1 className="title">Rewards</h1>
                    <hr className="underline" />
                    {
                        rewards.map(reward => (
                            <>
                                {console.log(reward.id)}
                                <div className="reward"
                                    key={reward.id}
                                >
                                    <div className="totalReward">
                                        <p className="activity">{reward.name}</p>
                                        <div className="priceContainer">
                                            <img className="coins" src="../coin.png" alt="coin Happy Hub" />
                                            <p className="price">{reward.price}</p>
                                        </div>
                                    </div>
                                </div>
                            </>
                        ))
                    }
                </div>
            </div >
        </>
    )
}
export default UserDashboard