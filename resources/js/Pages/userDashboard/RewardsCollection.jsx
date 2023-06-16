import Header from '@/Components/HeaderMobile';
import HeaderDesktop from "@/Components/HeaderDesktop.jsx"
import Reward from '@/Components/Reward';
import { Link } from '@inertiajs/react';
// import { useNavigate } from 'react-router-dom';
// import '../../css/RewardsCollection.scss';

//TODO: change .personalRewards,.teamRewards,.disabledPersonalRewards,.disabledTeamRewards to 1 general class (rewardsWrap?)

const RewardsCollection = (props) => {
    const userRewards = props.userRewards;
    const teamRewards = props.teamRewards;
    const personalWallet = props.auth.user.coins;
    const teamWallet = props.teamCoins;
    const userCoins = props.userCoins;

    const goBackHandler = () => {
        window.history.back();
    }

    return (
        <>
            <HeaderDesktop userCoins={userCoins} />
            <Header userCoins={userCoins} />
            <div className="rewardsContainerParent">
                <div className='titleContainer'>
                    <p>REWARDS</p>
                </div>
                <div className='rewardsContainerWrap'>
                    <div className='rewardsContainer'>
                        <p className='title'>Personal</p>
                        <div className='personalRewards'>
                            {
                                userRewards.map((reward, index) => (
                                    personalWallet >= reward.price ? (
                                        <Reward reward={reward} disabled={false} key={reward + index} />
                                    ) : null
                                ))
                            }
                        </div>
                    </div>
                    <div className='rewardsContainer'>
                        <p className='title'>Team</p>
                        <div className="teamRewards">
                            {
                                teamRewards.map((reward, index) => (
                                    teamWallet >= reward.price ? (
                                        <Reward reward={reward} disabled={false} key={reward + index} />
                                    ) : null
                                ))
                            }
                        </div>
                    </div>
                    <div className='rewardsContainer'>
                        <p className='title'>Earn more, unlock bigger</p>
                        <div className="disabledRewards">
                            <div className='disabledPersonalRewards'>
                                <p className='subTitle'>Personal</p>
                                {
                                    userRewards.map((reward, index) => (
                                        personalWallet < reward.price ? (
                                            <Reward reward={reward} class='disabled' disabled={true} key={reward + index} />
                                        ) : null
                                    ))
                                }
                            </div>
                            <div className='disabledTeamRewards'>
                                <p className='subTitle'>Team</p>
                                {
                                    teamRewards.map((reward, index) => (
                                        teamWallet < reward.price ? (
                                            <Reward reward={reward} class='disabled' disabled={true} key={reward + index} />
                                        ) : null
                                    ))
                                }
                            </div>
                        </div>
                    </div>
                </div>
                <div className="goBackButtonContainer">
                    <Link onClick={goBackHandler} className="goBackButton button">Go back</Link>
                </div>
            </div>
        </>
    )
}

export default RewardsCollection;