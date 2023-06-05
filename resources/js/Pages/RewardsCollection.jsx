import Header from '@/Components/Header';
import Reward from '@/Components/Reward';
import '../../css/RewardsCollection.scss';

const RewardsCollection = (props) => {
    const userRewards = props.userRewards;
    const teamRewards = props.teamRewards;
    const wallet = 5000;

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
                        wallet >= reward.price ? (
                                <Reward reward={reward} />
                        ) : null
                    ))
                }
        </div>
        <div className='rewardsContainer'>
            <p className='title'>Team</p>
                {
                    teamRewards.map(reward => (
                        wallet >= reward.price ? (
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
                        wallet < reward.price ? (
                            <Reward reward={reward} class='disabled'/>
                        ) : null
                    ))
                }
            <p className='subTitle'>Team</p>
                {
                    teamRewards.map(reward => (
                        wallet < reward.price ? (
                            <Reward reward={reward} class='disabled' />
                        ) : null
                    ))
                }
        </div>
    </>
    )
}

export default RewardsCollection;