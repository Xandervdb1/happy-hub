import Header from "@/Components/HeaderMobile.jsx"
import { router, usePage } from '@inertiajs/react'
import { useState } from 'react'
import { Link } from "@inertiajs/react";

const Create = () => {

    const { errors } = usePage().props
    const [values, setValues] = useState({
        name: '',
        email: '',
        password: '',
    })

    const handleChange = (e) => {
        const key = e.target.id;
        const value = e.target.value
        setValues(values => ({
            ...values,
            [key]: value,
        }))
        console.log(values);
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        router.post('/login', values)
    }

    return (
        <>
            <Header />
            <div className="formContainer">
                <form onSubmit={handleSubmit}>

                    <div className="inputField">
                        <input className="input" type="email" placeholder="Email" value={values.email} onChange={handleChange} name="email" id="email" required />
                        <span className="error-message">{errors.email}</span>
                        <input className="input" type="password" placeholder="Password" value={values.password} onChange={handleChange} name="password" id="password" required />
                        <span className="error-message">{errors.password}</span>
                    </div>

                    <div className="buttonContainer">
                        <button className="button" type="submit">Submit</button>
                    </div>

                </form>
                <p className="click-here">First time registering as Admin?</p>
                <Link href="/key-check" className="link-click-here">Click here!</Link>
            </div>
        </>
    )

}
export default Create;

