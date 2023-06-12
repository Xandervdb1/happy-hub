import { Link } from "@inertiajs/react";

const Reward = (props) => {
    const disabled = props.class;
    const reward = props.reward;
    // console.log(props.auth);
    return (
        <> 
            <Link as="button" method="post" >
                <div className={disabled ? 'reward disabled' : 'reward'} key={reward.name + reward.id}>
                    <div className="totalReward">
                        <p className='activity'> {reward.slug}</p>
                        <div className="priceContainer">
                            <img className="coins" src="../coin.png" alt="coin Happy Hub" />
                            <p className="price">{reward.price}</p>
                        </div>
                    </div>
                </div>
            </Link>
        </>
    )
}
export default Reward;