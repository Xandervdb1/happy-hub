import { Link } from "@inertiajs/react";

const Index = () => {
    return (
        <>
            <div className="Container">
                <div className="LogoContainer">
                    <img className="logo" src="../happyhub.png" alt="Happy Hub logo" />
                </div>
                <img className="imageIndex" src="../teamwork1.jpg" alt="image teamwork" />
                <Link href="/login" as="button" className="buttonLogin">Log in</Link>
                <Link href="/admin-register" as="button" className="buttonBuyProduct">Buy Product</Link>
                <Link href="/logout" method="post">Log out</Link>
            </div>

        </>
    );
}
export default Index
