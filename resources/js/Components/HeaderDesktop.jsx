import { Link, usePage } from "@inertiajs/react"


const HeaderDesktop = () => {
    const props = usePage().props;
    let userCoins;
    if (props.auth.user) {
        userCoins = props.auth.user.coins;
    }
    return (
        <>
            <div className="HeaderContainer" id='Desktop'>
                <header>
                    <img className='logoHeader' src="../happyhub.png" alt="logo Happy Hub" />
                    <div className="navigation">
                        {props.auth.user ? (
                            <>
                                <Link href='/user-dashboard' className="navLink">User Dashboard</Link>
                                {props.auth.user.is_admin ? <Link className="navLink" href="/company-dashboard">Company Dashboard</Link> : ""}
                                <Link href='/wallet' className="navLink"> Wallet</Link>
                                <Link href='/logout' method="post" as="button" className="navLink"> Log out</Link>
                            </>
                        ) : (
                            <>
                                <Link className="navLink" href="/">Home</Link>
                                <Link className="navLink" href="/login">Log in</Link>
                                <Link className="navLink" href="/generate-key">Buy key</Link>
                            </>
                        )}
                    </div>
                    <div className="walletContainer">
                        {props.auth.user ? (
                            <>
                                <p className="wallet">{userCoins ? userCoins : 0}</p>
                                <img className='coinHeader' src="../coin.png" ahref='' lt="coin Happy Hub" />
                            </>
                        ) : (
                            <div></div>
                        )}
                    </div>

                </header >
            </div>
        </>
    )
};
export default HeaderDesktop;