export default function Header() {
    return (
        <>
            <div className="HeaderContainer">
                <header>
                    <div className="walletContainer">
                        <p className="wallet">50</p>
                        <img className='coinHeader' src="../coin.png" alt="coin Happy Hub" />
                    </div>
                    <img className='logoHeader' src="../happyhub.png" alt="logo Happy Hub" />
                    <img className='hamburgerIcon' src="../hamburger.png" alt="icon hamburger menu" />
                </header>
            </div>
        </>
    )
}