const Reward = (props) => {
    const disabled = props.class;
    const reward = props.reward;

    return (
        <>
            <div className={disabled ? 'reward disabled' : 'reward'} key={reward.name + reward.id}>
                <div className="totalReward">
                    <p className='activity'> {reward.name}</p>
                    <div className="priceContainer">
                        <img className="coins" src="../coin.png" alt="coin Happy Hub" />
                        <p className="price">{reward.price}</p>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Reward;