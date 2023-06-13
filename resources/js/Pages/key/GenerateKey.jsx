import Nav from "@/Components/NavComponent.jsx"
import Header from "@/Components/Header.jsx"
import { useState } from "react";
import { router, usePage } from "@inertiajs/react";

const GenerateKey = () => {

    const { errors } = usePage().props
 
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
            <Header />
            <div className="formContainer">
                    <form onSubmit={handleSubmit}>
                        <div className="inputField">    
                            <input className="input" type="email" name="email" id="email" placeholder="Email" onChange={handleChange} />
                            <span className="error-message">{errors.email}</span> 
                        </div>
                        <div className="buttonContainer">
                                <button type="submit" className="button">Generate Key</button>
                        </div>
                    </form>
            </div>
        </>
    )
}

export default GenerateKey;