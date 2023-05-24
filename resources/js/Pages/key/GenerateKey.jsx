import Nav from "@/Components/NavComponent.jsx"
import { Link } from "@inertiajs/react";
import Header from "@/Components/Header.jsx"

const GenerateKey = () => {

    return (

        <>
            <Header />
            <div className="formContainer">
                <div className="buttonContainer">
                    <Link href="key/key-check" method="post" as="button" type="button" className="generateKeyButton">Generate Key</Link>
                </div>
            </div>
        </>

    )
}

export default GenerateKey;