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
                    <a href='/'>
                        <img className='logoHeader' src="../happyhub.png" alt="logo Happy Hub" /></a>
                    <div className="navigation">
                        {props.auth.user && props.auth.user.company_id ? (
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
                                <Link className="navLink" href="/admin-register">Buy key</Link>
                            </>
                        )}
                    </div>
                    <a href="/wallet">
                        <div className="walletContainer">
                            {props.auth.user && props.auth.user.company_id ? (
                                <>
                                    <p className="wallet">{userCoins ? userCoins : 0}</p>
                                    <img className='coinHeader' src="../coin.png" ahref='' lt="coin Happy Hub" />
                                </>
                            ) : (
                                <>
                                    <div></div>
                                    <div></div>
                                </>
                            )}
                        </div>
                    </a>
                </header >
            </div>
        </>
    )
};
export default HeaderDesktop;