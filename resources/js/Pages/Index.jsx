import { Link } from "@inertiajs/react";

const Index = () => {
    return (
        <>
            <div className="Container">
                <div className="LogoContainer">
                    <img className="logo" src="../happyhub.png
                    " alt="Happy Hub logo" />
                </div>
                <Link href="/login" as="button" className="buttonLogin">Log in</Link>
                <Link href="/generate-key" as="button" className="buttonBuyProduct">Buy Product</Link>
            </div>
        </>
    );
}
export default Index
