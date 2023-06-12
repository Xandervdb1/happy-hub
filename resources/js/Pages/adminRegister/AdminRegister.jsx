import { useState } from 'react'
import { router } from '@inertiajs/react'
import Header from '@/Components/Header.jsx'


const AdminRegister = () => {

    const [values, setValues] = useState({
        name: '',
        lastname: '',
        username: '',
        birthday: '',
        email: '',
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
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        router.post('/admin-register', values)
    }

    return (
        <>
            <Header />
            <div className='formContainer'>
                <form onSubmit={handleSubmit}>
                    <div className="inputField">
                        <input type="text" name="name" id="name" value={values.name} onChange={handleChange} placeholder="Name" className="input" />

                        <input type="text" name="lastname" id="lastname" value={values.lastname} onChange={handleChange} placeholder="Last name" className="input" />

                        <input type="text" name="username" id="username" value={values.username} onChange={handleChange} placeholder="Username" className="input" />

                        <input type="date" name="birthday" id="birthday" value={values.birthday} onChange={handleChange} className="input" />

                        <input type="email" name="email" id="email" value={values.email} onChange={handleChange} placeholder="Email" className="input" />

                        <input type="password" name="password" id="password" value={values.password} onChange={handleChange} placeholder="Password" className="input" />

                        <input type="password" name="password_confirmation" id="password_confirmation" value={values.password_confirmation} onChange={handleChange} placeholder="Repeat password" className="input" />
                    </div>
                    <div className='buttonContainer'>
                        <button type="submit" className='button'>Next</button>
                    </div>
                </form>
            </div>

        </>
    )
}

export default AdminRegister;