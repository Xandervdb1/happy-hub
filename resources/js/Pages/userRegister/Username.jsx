import Header from "@/Components/HeaderMobile.jsx"
import HeaderDesktop from "@/Components/HeaderDesktop.jsx"
import { router, usePage } from '@inertiajs/react'
import { useState } from 'react'
// import { Link } from "@inertiajs/react";

const Login = () => {

    const { errors } = usePage().props

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
        router.post('/username', values)
    }

    return (
        <>
            <HeaderDesktop />
            <Header />
            <div className="formContainer">
                <form onSubmit={handleSubmit}>

                    <div className="inputField">
                        <input className="input" type="name" placeholder="Username" value={values.name} onChange={handleChange} name="name" id="name" required />
                        <span className="error-message">{errors.name}</span>

                        <input type="date" name="birthday" id="birthday" value={values.birthday} onChange={handleChange} className="input" />
                        <span className="error-message">{errors.birthday}</span>
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

