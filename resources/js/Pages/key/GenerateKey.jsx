import Nav from "@/Components/NavComponent.jsx"
import Header from "@/Components/HeaderMobile.jsx"
import HeaderDesktop from "@/Components/HeaderDesktop.jsx"
import { useState } from "react";
import { router } from "@inertiajs/react";

const GenerateKey = () => {
    const [values, setValues] = useState({
        email: '',
    })

    const handleChange = (e) => {
        const key = e.target.id;
        const value = e.target.value
        setValues(values => ({
            ...values,
            [key]: value,
        }))
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        router.post('/generate-key', values)
    }
    return (
        <>
            <HeaderDesktop />
            <Header />
            <div className="formContainer">
                <div className="buttonContainer">
                    <form onSubmit={handleSubmit}>
                        <input type="text" name="email" id="email" placeholder="Email" onChange={handleChange} />
                        <button type="submit" className="button">Generate Key</button>
                    </form>
                </div>
            </div>
        </>
    )
}

export default GenerateKey;