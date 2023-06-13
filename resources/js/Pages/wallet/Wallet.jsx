import Header from "@/Components/Header.jsx";


const Wallet = (props) => {
    // console.log(props.userCoins);
    // console.log(props.teamCoins);
    console.log(props.logs);
    const userCoins = props.userCoins;
    const teamCoins = props.teamCoins;
    const userLogs = props.logs;



    return (
        <>
            <Header userCoins={userCoins} />
            <div className="walletContainer">

                <div className="titleBalance">
                    <h1 className="titlePage"> Your Wallet</h1>
                </div>

                <div className="personalBalance">
                    <div className="personalWallet">
                        <h1 className="titleWallet">Personal Balance</h1>
                        <div className="pricesAndCoin">
                            <img className="coin" src="../coin.png" alt="coin" />
                            <p>{userCoins}</p>
                        </div>
                    </div>

                    {
                        userLogs.map(userLog => {
                            if (userLog.type === "Personal") {
                                if (userLog.scope === "Reward") {
                                    return (
                                        <>
                                            <div className="scope">
                                                <i><li className="timestamp">
                                                    {userLog.created_at}</li></i>
                                                <p className="red">Spent <b> {userLog.scopeCoins} </b>coins on <b>{userLog.scopeName}</b></p>
                                                <p className="coinTotal">(Total coins: {userCoins.toLocaleString()} coins.)</p>
                                            </div>
                                        </>
                                    )
                                } else {
                                    return (
                                        <>
                                            <div className="scope">
                                                <i><li className="timestamp"> {userLog.created_at}</li></i>
                                                <p className="green">Gained <b>{userLog.scopeCoins.toLocaleString()} </b> for <b> {userLog.scopeName}.</b></p>
                                                <p className="coinTotal">(Total coins:{userCoins.toLocaleString()}) </p>
                                            </div>
                                        </>
                                    )
                                }
                            }
                        })
                    }
                </div>

                <div className="teamBalance">
                    <div className="teamWallet">
                        <h1 className="titleWallet">Team Balance</h1>
                        <div className="pricesAndCoin">
                            <img className="coin" src="../coin.png" alt="coin" />
                            <p>{teamCoins}</p>
                        </div>
                    </div>

                    <div className="transactions">
                        <p className="timestamp">17/05/2023 - 12:56</p>
                        <div className="priceAndCoin">
                            <p>125213500</p>
                            <img className="coin" src="../coin.png" alt="coin" />
                        </div>
                        <p className="activity">Help a colleague</p>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Wallet