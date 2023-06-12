import Header from '@/Components/Header';
import Reward from '@/Components/Reward';
import { Link } from '@inertiajs/react';
import '../../css/RewardsCollection.scss';

const RewardsCollection = (props) => {
    const userRewards = props.userRewards;
    const teamRewards = props.teamRewards;
    // const wallet = props.auth.user.coins;
    const personalWallet = props.auth.user.coins;
    const teamWallet = 5000;
    const walletTeam = props.teamCoins
    console.log(walletTeam)

    console.log(props);
    console.log(props.auth.user.team)

    return (
        <>
            <Header />
            <div className='titleContainer'>
                <p>REWARDS</p>
            </div>
            <div className='rewardsContainer'>
                <p className='title'>Personal</p>
                {
                    userRewards.map(reward => (
                        personalWallet >= reward.price ? (
                            <Reward reward={reward} />
                        ) : null
                    ))
                }
            </div>
            <div className='rewardsContainer'>
                <p className='title'>Team</p>
                {
                    teamRewards.map(reward => (
                        teamWallet >= reward.price ? (
                            <Reward reward={reward} />
                        ) : null
                    ))
                }
            </div>
            <div className='rewardsContainer'>
                <p className='title'>Earn more, unlock bigger</p>
                <p className='subTitle'>Personal</p>
                {
                    userRewards.map(reward => (
                        personalWallet < reward.price ? (
                            <Reward reward={reward} class='disabled' />
                        ) : null
                    ))
                }
                <p className='subTitle'>Team</p>
                {
                    teamRewards.map(reward => (
                        teamWallet < reward.price ? (
                            <Reward reward={reward} class='disabled' />
                        ) : null
                    ))
                }
                <Link href='/user-dashboard' className="goBackButton">Go back</Link>
            </div>

        </>
    )
}

export default RewardsCollection;