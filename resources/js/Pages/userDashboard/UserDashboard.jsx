import { Link } from "@inertiajs/react";
import Header from "@/Components/Header.jsx";

const UserDashboard = (props) => {
    // console.log(props.auth.user)
    // console.log(props.userRewards)
    // console.log(props.teamRewards)
    const userName = props.auth.user.name
    const nickName = props.auth.user.username
    const birthday = props.auth.user.birthday
    console.log(props.userRewards)
    console.log(props.teamRewards)
    const { userRewards, teamRewards } = props;

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
                    <Link href="/all-quests" className="seeAll">&gt; &gt; see all </Link>
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
                    <Link href="/all-quests" className="seeAll">&gt; &gt; see all </Link>
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
                    <Link href="/rewards-collection" className="seeAll">&gt; &gt; see all </Link>
                    <h1 className="title">Rewards</h1>
                    <hr className="underline" />
                    <table>
                        <tbody>
                            {
                                userRewards.map((userReward) => (
                                    <tr key={userReward.id}>
                                        <td> {userReward.name}</td>
                                    </tr>
                                ))}
                        </tbody>
                    </table>
                    {/* {
                        userRewardList().map(reward => (
                            <>
                                <div className="reward" key={reward.id}>
                                    <div className="totalReward">
                                        <p className="activity">{reward.id}</p>
                                        <div className="priceContainer">
                                            <img className="coins" src="../coin.png" alt="coin Happy Hub" />
                                            <p className="price">200</p>
                                        </div>
                                    </div>
                                </div>
                            </>
                        ))
                    } */}


                </div>
            </div>
        </>
    )
}
export default UserDashboard