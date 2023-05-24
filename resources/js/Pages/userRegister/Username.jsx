import Header from "@/Components/Header.jsx"
import { router } from '@inertiajs/react'
import { useState } from 'react'
import { Link } from "@inertiajs/react";

const Login = () => {
    const [values, setValues] = useState({
        name: '',
        birthday: '',
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
        router.post('/new-password', values)
    }

    return (
        <>
        <Header/>
        <div className="formContainer">
            <form onsSubmit={handleSubmit}>

                <div className="inputField">
                    <input className="input" type="name" placeholder="Username" value={values.name} onChange={handleChange} name="name" id="name" required />
                    <input type="date" name="birthday" id="birthday" value={values.birthday} onChange={handleChange} className="input" />
                </div>

                <div className="buttonContainer">
                    <button type="submit">Confirm</button>
                </div>

            </form>
           
            </div>
        </>
    )

}
export default Login;

