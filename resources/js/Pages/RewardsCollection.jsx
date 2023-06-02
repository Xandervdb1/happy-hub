import Header from '@/Components/Header'
import '../../css/RewardsCollection.scss'

const RewardsCollection = (props) => {
    const rewards = props.userRewards;
    const teamRewards = props.teamRewards;

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
                    rewards.map(reward => (
                        <>
                        {console.log(reward.id)}
                        <div className="reward" key={reward.name + reward.id}>
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
                    teamRewards.map(reward => (
                        <>
                        <div className="reward" key={reward.name + reward.id}>
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
                {/* {
                    teamRewards.map(reward => (
                        <>
                        <div className="reward" key={reward.name}>
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
                } */}
        </div>
    </>
    )
}

export default RewardsCollection;