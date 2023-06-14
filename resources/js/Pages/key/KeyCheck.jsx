import Header from "@/Components/HeaderMobile.jsx";
import HeaderDesktop from "@/Components/HeaderDesktop.jsx"
import { router, usePage } from '@inertiajs/react';
import { useState } from 'react';
import { Link } from "@inertiajs/react";

const KeyCheck = () => {

    const { errors } = usePage().props

    const [values, setValues] = useState({
        name: '',
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
        router.post('/key-check', values)
    }
    return (

        <>
            <HeaderDesktop />
            <Header />
            <div
                className="backgroundImage"
                style={{ backgroundImage: "url('../teamwork3.jpg')" }}
            >
                <div className="formContainer">
                    <form onSubmit={handleSubmit}>
                        <div className="inputField">
                            <input type="string" placeholder="Insert Key" className="input" value={values.name} onChange={handleChange} name="name" id="name" />
                            <span className="error-message">{errors.name}</span>
                        </div>
                        <div className="buttonContainer">
                            <button className="button">Add Company</button>
                        </div>
                    </form>

                    <p className="click-here">Already have an account?</p>
                    <Link href="/login" className="link-click-here">Login</Link>
                </div>
            </div>
        </>

    )
}

export default KeyCheck;