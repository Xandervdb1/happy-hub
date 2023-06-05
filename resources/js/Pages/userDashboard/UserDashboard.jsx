import { Link } from "@inertiajs/react";
import Header from "@/Components/Header.jsx";


const UserDashboard = (props) => {
    // console.log(props.userRewards)
    // console.log(props.teamRewards)
    console.log(props.auth.user.coins)
    console.log(props.sumTeamCoins);
    console.log(props.teamName);
    console.log(props.countTeamMembers);
    
    const userName = props.auth.user.name
    const nickName = props.auth.user.username
    const birthday = props.auth.user.birthday
    const rewards = props.userRewards;
    const quests = props.userQuests;
    const teamQuests = props.teamQuests;

    return (
        <>
            <Header />
            <div className="dashboardContainer">
                <div className="progressCarrousel">
                    <p>Next milestone</p>
                </div>
                <div className="profileInfo">
                    <p className="personalInfo">Name: {userName}</p>
                    <p className="personalInfo">Nickname: {nickName}</p>
                    <p className="personalInfo">Birthday: {birthday}</p>
                    <p className="personalInfo">Team:</p>
                    <p className="personalInfo">Team members:</p>
                    <br />
                    <p className="personalInfo">Personal Wallet:</p>
                    <p className="personalInfo">Team Wallet:</p>
                </div>
                <div className="personalQuests">
                    {console.log(props.userQuests)}

                    <Link href="/all-quests" className="seeAll">&gt; &gt; see all </Link>
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
                    <Link href="/all-quests" className="seeAll">&gt; &gt; see all </Link>
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