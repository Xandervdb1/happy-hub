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
                    <h1 className="titleWallet">Personal Balance</h1>
                    <div className="pricesAndCoin">
                        <img className="coin" src="../coin.png" alt="coin" />
                        <p >100</p>
                    </div>
                    <div className="transactions">
                        <div className="transaction">
                            <p>17/05/2023 - 12:56</p>
                            <div className="priceContainer">
                                <p></p>
                                <img className="coin" src="../coin.png" alt="coin" />
                            </div>
                            <p>Help a colleague</p>
                        </div>
                    </div>
                    <p>see all</p>
                </div>
                <div className="teamBalance">
                    <h1 className="titleWallet"> Team Balance</h1>
                    <div className="pricesAndCoin">
                        <img className="coin" src="../coin.png" alt="coin" />
                        <p >100</p>
                    </div>
                </div>
            </div>

        </>
    )
}
export default Wallet