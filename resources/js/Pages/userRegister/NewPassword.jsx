import Header from "@/Components/HeaderMobile.jsx"
import HeaderDesktop from "@/Components/HeaderDesktop.jsx"
import { router, usePage } from '@inertiajs/react'
import { useState } from 'react'
import { Link } from "@inertiajs/react";

const NewPassword = () => {

    const { errors } = usePage().props

    const [values, setValues] = useState({
        password: '',
        password_confirmation: '',
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
        router.post('/newpassword', values)
    }

    return (
        <>
            <HeaderDesktop />
            <Header />
            <div className="formContainer">
                <form className="form" onSubmit={handleSubmit}>

                    <div className="inputField">
                        <input className="input" type="password" placeholder="New password" value={values.password} onChange={handleChange} name="password" id="password" required />
                            <span className="error-message">{errors.password}</span> 
                        
                        <input className="input" type="password" placeholder="Confirm new password" value={values.password_confirmation} onChange={handleChange} name="newpassword" id="password_confirmation" required /> 
                            <span className="error-message">{errors.password}</span>
                    </div>
                    <div className="buttonContainer">
                        <button className="button" type="submit">Confirm</button>
                    </div>

                </form>
                <Link href="/defaultpassword" method="post" as="button" className="link-click-here">Continue with current password</Link>
                <p className="click-here">-</p>
                <p className="click-here">First time registering as Admin?</p>
                <Link href="/generate-key" className="link-click-here">Click here!</Link>
            </div>
        </>
    )

}
export default NewPassword;

