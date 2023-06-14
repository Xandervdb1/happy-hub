import Header from '@/Components/HeaderMobile';
import HeaderDesktop from "@/Components/HeaderDesktop.jsx"
import Reward from '@/Components/Reward';
import { Link } from '@inertiajs/react';
import '../../css/RewardsCollection.scss';

const RewardsCollection = (props) => {
    const userRewards = props.userRewards;
    const teamRewards = props.teamRewards;
    const personalWallet = props.auth.user.coins;
    const teamWallet = props.teamCoins;
    const userCoins = props.userCoins;

    return (
        <>
            <HeaderDesktop userCoins={userCoins} />
            <Header userCoins={userCoins} />
            <div className='titleContainer'>
                <p>REWARDS</p>
            </div>
            <div className='rewardsContainerWrap'> 
                <div className='rewardsContainer'>
                    <p className='title'>Personal</p>
                    {
                        userRewards.map(reward => (
                            personalWallet >= reward.price ? (
                                <Reward reward={reward} disabled={false}/>
                            ) : null
                        ))
                    }
                </div>
                <div className='rewardsContainer'>
                    <p className='title'>Team</p>
                    {
                        teamRewards.map(reward => (
                            teamWallet >= reward.price ? (
                                <Reward reward={reward} disabled={false}/>
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
                                <Reward reward={reward} class='disabled' disabled={true} />
                            ) : null
                        ))
                    }
                    <p className='subTitle'>Team</p>
                    {
                        teamRewards.map(reward => (
                            teamWallet < reward.price ? (
                                <Reward reward={reward} class='disabled' disabled={true} />
                            ) : null
                        ))
                    }
                </div>
            </div>   
            <Link href='/user-dashboard' className="goBackButton">Go back</Link>
        </>
    )
}

export default RewardsCollection;