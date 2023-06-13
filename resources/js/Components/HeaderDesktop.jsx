import { Link } from "@inertiajs/react"

const HeaderDesktop = (props) => {
    return (
        <>
            <div className="HeaderContainer" id='Desktop'>
                <header>
                    <img className='logoHeader' src="../happyhub.png" alt="logo Happy Hub" />
                    <div className="navigation">
                        <Link href='/company-dashboard' className="navLink">Company Dashboard</Link>
                        <Link href='/user-dashboards' className="navLink">User Dashboard</Link>
                        <Link href='/wallet' className="navLink"> Wallet</Link>
                        <Link href='/logout' method="post" as="button" className="navLink"> Log out</Link>
                    </div>
                    <div className="walletContainer">
                        <p className="wallet">{props.userCoins ? props.userCoins : 0}</p>
                        <img className='coinHeader' src="../coin.png" ahref='' lt="coin Happy Hub" />
                    </div>

                </header >
            </div>
        </>




    )
};
export default HeaderDesktop;