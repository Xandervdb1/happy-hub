import Header from "@/Components/HeaderMobile.jsx";

const Wallet = (props) => {
    console.log(props.logs);
    const userCoins = props.userCoins;
    const teamCoins = props.teamCoins;
    const userLogs = props.logs;

    return (
        <>
            <HeaderDesktop userCoins={userCoins} />
            <Header userCoins={userCoins} />
            <div className="walletContainer">
                <div className="titleBalance">
                    <h1 className="titlePage">Your Wallet</h1>
                </div>
                <div className="balances">
                    <div className="personalBalance">
                        <div className="personalWallet">
                            <h1 className="titleWallet">Personal Balance</h1>
                            <div className="pricesAndCoin">
                                <img className="coin" src="../coin.png" alt="coin" />
                                <p>{userCoins}</p>
                            </div>
                        </div>
                        {userLogs.map(userLog => {
                            if (userLog.type === "Personal") {
                                if (userLog.scope === "Reward") {
                                    return (
                                        <div className="scope" key={userLog.created_at}>
                                            <i><li className="timestamp">{userLog.created_at}</li></i>
                                            <p className="red">Spent <b>{userLog.scopeCoins}</b> coins on <b>{userLog.scopeName}</b></p>
                                            <p className="coinTotal">(Total coins: {userCoins.toLocaleString()} coins.)</p>
                                        </div>
                                    );
                                } else {
                                    return (
                                        <div className="scope" key={userLog.created_at}>
                                            <i><li className="timestamp">{userLog.created_at}</li></i>
                                            <p className="green">Gained <b>{userLog.scopeCoins.toLocaleString()}</b> for <b>{userLog.scopeName}.</b></p>
                                            <p className="coinTotal">(Total coins: {userCoins.toLocaleString()} coins.)</p>
                                        </div>
                                    );
                                }
                            }
                        })}
                    </div>

                    <div className="teamBalance">
                        <div className="teamWallet">
                            <h1 className="titleWallet">Team Balance</h1>
                            <div className="pricesAndCoin">
                                <img className="coin" src="../coin.png" alt="coin" />
                                <p>{teamCoins.toLocaleString()}</p>
                            </div>
                        </div>
                        {userLogs.map(userLog => {
                            if (userLog.type === 'Team') {
                                if (userLog.scope === "Reward") {
                                    return (
                                        <div className="scope" key={userLog.created_at}>
                                            <i><li className="timestamp">{userLog.created_at}</li></i>
                                            <p className="red">Spent <b>{userLog.scopeCoins}</b> coins on <b>{userLog.scopeName}</b></p>
                                            <p className="coinTotal">(Total coins: {teamCoins.toLocaleString()} coins.)</p>
                                        </div>
                                    );
                                } else {
                                    return (
                                        <div className="scope" key={userLog.created_at}>
                                            <i><li className="timestamp">{userLog.created_at}</li></i>
                                            <p className="green">Gained <b>{userLog.scopeCoins.toLocaleString()}</b> for <b>{userLog.scopeName}.</b></p>
                                            <p className="coinTotal">(Total coins: {teamCoins.toLocaleString()} coins.)</p>
                                        </div>
                                    );
                                }
                            }
                        })}
                    </div>
                </div>
            </div>
        </>
    );
};

export default Wallet;