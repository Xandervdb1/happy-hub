import { Link } from "@inertiajs/react";
export default function Index() {
    return (
        <>
            <div className="Container">
                <div className="LogoContainer">
                    <img className="logo" src="../logo.png
                    " alt="Happy Hub logo" />
                </div>
            <button className="buttonLogin">Log in</button>
            <button className="buttonBuyProduct"> Buy Product</button>
            </div>
            <Link href="/wallet">Wallet</Link>
        </>
    );
}
