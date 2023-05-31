import Header from "@/Components/Header.jsx"
import { router } from '@inertiajs/react'
import { useState } from 'react'
import { Link } from "@inertiajs/react";

const Create = () => {
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

                        <input className="input" type="password" placeholder="Password" value={values.password} onChange={handleChange} name="password" id="password" required />
                    </div>

                    <div className="buttonContainer">
                        <button className="button" type="submit">Submit</button>
                    </div>

                </form>
                <p>First time registering as Admin?</p>
                <Link href="/key-check">Click here!</Link>
            </div>
        </>
    )

}
export default Create;

