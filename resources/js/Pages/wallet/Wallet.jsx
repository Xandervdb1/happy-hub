import Header from "@/Components/Header.jsx";


const Wallet = () => {
    return (
        <>
            <Header />
            <div className="walletContainer">
                <div className="titleBalance">
                    <h1 className="titlePage"> Your Wallet</h1>
                </div>
                <div className="personalBalance">
                    <div className="personalWallet">
                        <h1 className="titleWallet">Personal Balance</h1>
                        <div className="pricesAndCoin">
                            <img className="coin" src="../coin.png" alt="coin" />
                            <p >100</p>
                        </div>
                    </div>
                    <div className="transactions">
                        <p className="timestamp">17/05/2023 - 12:56</p>
                        <div className="priceAndCoin">
                            <p>100</p>
                            <img className="coin" src="../coin.png" alt="coin" />
                        </div>
                        <p className="activity">Help a colleague</p>
                    </div>
                    <div className="transactions">
                        <p className="timestamp">17/05/2023 - 12:56</p>
                        <div className="priceAndCoin">
                            <p>100</p>
                            <img className="coin" src="../coin.png" alt="coin" />
                        </div>
                        <p className="activity">Help a colleague</p>
                    </div>
                    <div className="transactions">
                        <p className="timestamp">17/05/2023 - 12:56</p>
                        <div className="priceAndCoin">
                            <p>100</p>
                            <img className="coin" src="../coin.png" alt="coin" />
                        </div>
                        <p className="activity">Help a colleague</p>
                    </div>

                </div>
                <div className="teamBalance">
                    <div className="teamWallet">
                        <h1 className="titleWallet">Team Balance</h1>
                        <div className="pricesAndCoin">
                            <img className="coin" src="../coin.png" alt="coin" />
                            <p >65410</p>
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