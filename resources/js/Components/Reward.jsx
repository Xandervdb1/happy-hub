import { Link, usePage } from "@inertiajs/react";

const Reward = (localProps) => {
    const props = usePage().props;
    const disabledClass = localProps.class;
    const reward = localProps.reward;
    const disabledButton = localProps.disabled;

    return (
        <>
            <Link href="/claim-reward" as="button" method="post" data={{ userId: props.auth.user.id, rewardId: reward.id }} disabled={disabledButton === true ? true : null}>
                <div className={disabledClass ? 'reward disabled' : 'reward'} key={reward.name + reward.id} style={disabledButton === true ? { cursor: 'not-allowed' } : null}>
                    <div className="totalReward">
                        <p className='activity'> {reward.slug}</p>
                        <div className="priceContainer">
                            <img className="coins" src="../coin.png" alt="coin Happy Hub" />
                            <p className="price">{reward.price.toLocaleString()}</p>
                        </div>
                    </div>
                </div>
            </Link>
        </>
    )
}

export default Reward;