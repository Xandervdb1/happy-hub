import { Link, usePage } from "@inertiajs/react";

const Reward = (localProps) => {
    const props = usePage().props;
    const disabled = localProps.class;
    const reward = localProps.reward;
    return (
        <>
            <Link href="/claim-reward" as="button" method="post" data={{ userId: props.auth.user.id, rewardId: reward.id }}>
                <div className={disabled ? 'reward disabled' : 'reward'} key={reward.name + reward.id}>
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