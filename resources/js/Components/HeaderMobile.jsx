import { useRef, useState } from "react";
import Navigation from "./Navigation";

const Header = (props) => {
    const topBun = useRef();
    const burger = useRef();
    const bottomBun = useRef();
    const [isActive, setIsActive] = useState(false);

    const toggleNavigation = () => {
        topBun.current.classList.toggle('active');
        burger.current.classList.toggle('active');
        bottomBun.current.classList.toggle('active');
        setIsActive(topBun.current.classList.contains('active'))
    }

    return (
        <>
            {isActive ? <Navigation /> : null}
            <div className="HeaderContainer" id="mobile">
                <header>
                    <a href="/wallet">
                        <div className="walletContainer">
                            <p className="wallet">{props.userCoins ? props.userCoins : 0}</p>
                            <img className='coinHeader' src="../coin.png" alt="coin Happy Hub" />
                        </div></a>
                    <a href="/">
                        <img className='logoHeader' src="../happyhub.png" alt="logo Happy Hub" /></a>
                    <div className="hamburger" onClick={toggleNavigation}>
                        <div className="top-bun" ref={topBun} ></div>
                        <div className="burger" ref={burger} ></div>
                        <div className="bottom-bun" ref={bottomBun} ></div>
                    </div>
                </header>
            </div>

        </>
    )

}
export default Header;
