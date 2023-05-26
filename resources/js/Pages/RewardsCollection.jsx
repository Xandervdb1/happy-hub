import Header from '@/Components/Header'
import '../../css/RewardsCollection.scss'

const RewardsCollection = (props) => {
    const rewards = props.rewards;

    const rewardList = () => {
        const rewardList = [];

        for(let i = 0; i < 9; i++){
            rewardList.push(rewards[i]);
        }

        return rewardList;
    }

    return (
    <>
        <Header />
        <div className='titleContainer'>
            <p>REWARDS</p>
        </div>
        <div className='rewardsContainer'>
            <div className='personalRewards'>
                <p>Personal</p>
                <div className='rewardList'>
                    {
                        rewardList().map(reward => (
                            <div key={reward.id}>{reward.name}</div>
                        ))
                    }
                </div>
            </div>
            <div className='teamRewards'>
                <p>Team</p>
                <div className='rewardList'>

                </div>
            </div>
            <div className='futureRewards'>
                <p>Earn more, unlock bigger</p>
                <div className='rewardList'>

                </div>
            </div>
        </div>
    </>
    )
}

export default RewardsCollection;