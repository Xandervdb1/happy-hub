import Nav from "@/Components/NavComponent.jsx";
import Header from "@/Components/Header.jsx";
import { router } from '@inertiajs/react';
import { useState } from 'react';
import { Link } from "@inertiajs/react";

const KeyCheck = () => {

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
        console.log(values);
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        router.post('/admin-register', values)
    }
    return (

        <>
            <Header />
            <div className="formContainer">
                <form onsSubmit={handleSubmit}>

                    <input type="string" placeholder="Insert Key" className="input" value={values.name} onChange={handleChange} name="name" id="name" required />

                    <div className="buttonContainer">
                        <button type="submit" className="button">Add Company
                        </button>
                        <br />
                        <Link href="/admin-register"> Add Company</Link>
                    </div>

                </form>
                <p>Already have an account?</p>
                <Link href="/login" >Login</Link>
            </div>
        </>

    )
}

export default KeyCheck;