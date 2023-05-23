import Nav from "@/Components/NavComponent.jsx"
import { Link } from "@inertiajs/react";

const GenerateKey = () => {
    
    return(
    
        <>
        <Link href="/key-check" method="post" as="button" type="button">Generate Key</Link>
    
        <Nav />
        </>

    )
}

export default GenerateKey;