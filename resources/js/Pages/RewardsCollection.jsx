import Header from '@/Components/Header'
import '../../css/RewardsCollection.scss'

const RewardsCollection = (props) => {
    const rewards = props.userRewards;
    const teamRewards = props.teamRewards;

    const userRewardList = () => {
        const rewardList = [];

        for(let i = 0; i < 9; i++){
            rewardList.push(rewards[i]);
        }

        return rewardList;
    }

    const teamRewardList = () => {
        const rewardList = [];

        for(let i = 0; i < 9; i++){
            rewardList.push(teamRewards[i]);
        }

        return rewardList;
    }
                // TODO: make a component for a reward section
    return (
    <>
        <Header />
        <div className='titleContainer'>
            <p>REWARDS</p>
        </div>
        <div className='rewardsContainer'>
            <p className='title'>Personal</p>
                {
                    userRewardList().map(reward => (
                        <>
                        <div className="reward" key={reward.id}>
                            <div className="totalReward">
                                <p className='activity'> {reward.name}</p>
                                <div className="priceContainer">
                                    <img className="coins" src="../coin.png" alt="coin Happy Hub" />
                                    <p className="price">200</p>
                                </div>
                            </div>
                        </div>
                        </>
                    ))
                }
        </div>
        <div className='rewardsContainer'>
            <p className='title'>Team</p>
                {
                    teamRewardList().map(reward => (
                        <>
                        <div className="reward" key={reward.id}>
                            <div className="totalReward">
                                <p className='activity'> {reward.name}</p>
                                <div className="priceContainer">
                                    <img className="coins" src="../coin.png" alt="coin Happy Hub" />
                                    <p className="price">200</p>
                                </div>
                            </div>
                        </div>
                        </>
                    ))
                }
        </div>
        <div className='rewardsContainer'>
            <p className='title'>Earn more, unlock bigger</p>
                {/* TODO: Logic to only display rewards which cost more than the current amount of coins */}
        </div>
    </>
    )
}

export default RewardsCollection;