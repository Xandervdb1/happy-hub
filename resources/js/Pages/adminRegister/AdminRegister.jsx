import { useState } from 'react'
import { router, usePage } from '@inertiajs/react'
import Header from '@/Components/HeaderMobile.jsx'


const AdminRegister = () => {

    const { errors } = usePage().props

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
            <HeaderDesktop />
            <Header />
            <div className='formContainer'>
                <form onSubmit={handleSubmit}>
                    <div className="inputField">
                        <input type="text" name="name" id="name" value={values.name} onChange={handleChange} placeholder="Name" className="input" />
                        <span className="error-message">{errors.name}</span> 

                        <input type="text" name="lastname" id="lastname" value={values.lastname} onChange={handleChange} placeholder="Last name" className="input" />
                        <span className="error-message">{errors.lastname}</span> 

                        <input type="text" name="username" id="username" value={values.username} onChange={handleChange} placeholder="Username" className="input" />
                        <span className="error-message">{errors.username}</span> 
                        
                        {/* <input type="text" name="function" id="function" value={values.function} onChange={handleChange} placeholder="Function" className="input" /> */}
                        {/* <span className="error-message">{errors.function}</span>  */}
                        
                        <input type="date" name="birthday" id="birthday" value={values.birthday} onChange={handleChange} className="input" />
                        <span className="error-message">{errors.birthday}</span> 

                        <input type="email" name="email" id="email" value={values.email} onChange={handleChange} placeholder="Email" className="input" />
                        <span className="error-message">{errors.email}</span> 

                        <input type="password" name="password" id="password" value={values.password} onChange={handleChange} placeholder="Password" className="input" />
                        <span className="error-message">{errors.password}</span> 

                        <input type="password" name="password_confirmation" id="password_confirmation" value={values.password_confirmation} onChange={handleChange} placeholder="Repeat password" className="input" />
                        <span className="error-message">{errors.password_confirmation}</span> 
                    
                    </div>
                    <div className="buttonContainer">
                        <button type="submit" className="button">Next</button>
                    </div>
                </form>
            </div>

        </>
    )
}

export default AdminRegister;