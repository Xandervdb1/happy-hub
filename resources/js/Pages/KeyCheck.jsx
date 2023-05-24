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
            <form onsSubmit={handleSubmit}>

                <div className="mb-8">
                    <input type="string"
                        placeholder="Insert Key"

                        value={values.name}
                        onChange={handleChange}
                        name="name"
                        id="name"
                        required
                    />
                </div>

                <div className="">
                    <button type="submit">Add Company
                    </button>
                </div>

            </form>
            <p>Already have an account?</p>
            <Link href="/login">Login</Link>
            <br />
            <br />

            <Nav />
        </>

    )
}

export default KeyCheck;