import Header from "@/Components/Header.jsx"
import { router } from '@inertiajs/react'
import { useState } from 'react'
import { Link } from "@inertiajs/react";

const NewPassword = () => {
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
            <Header />
            <div className="formContainer">
                <form onSubmit={handleSubmit}>

                    <div className="inputField">
                        <input className="input" type="password" placeholder="New password" value={values.password} onChange={handleChange} name="password" id="password" required />
                        <input className="input" type="password" placeholder="Confirm new password" value={values.password_confirmation} onChange={handleChange} name="newpassword" id="password_confirmation" required />
                    </div>

                    <div className="buttonContainer">
                        <button type="submit">Confirm</button>
                    </div>

                </form>
                <Link href="/defaultpassword" method="post" as="button">Continue with current password</Link>
                <p>First time registering as Admin?</p>
                <Link href="/generate-key">Click here!</Link>
            </div>
        </>
    )

}
export default NewPassword;

