import { Link } from "@inertiajs/react";

const Index = () => {
    return (
        <>
            <div className="Container">
                <div className="LogoContainer">
                    <img className="logo" src="../happyhub.png" alt="Happy Hub logo" />
                </div>
                {/* <img className="imageIndex" src="../teamwork1.jpg" alt="image teamwork" /> */}
                <div className="btncontainer">
                    <Link href="/login" as="button" className="buttonLogin">Log in</Link>
                    <Link href="/admin-register" as="button" className="buttonBuyProduct">Buy Product</Link>
                </div>
            </div>

        </>
    );
}
export default Index
