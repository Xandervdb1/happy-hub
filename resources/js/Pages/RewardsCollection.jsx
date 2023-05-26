import Header from '@/Components/Header'
import '../../css/RewardsCollection.scss'

const RewardsCollection = (props) => {
    console.log(props.rewards)
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