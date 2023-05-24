import { useState } from 'react'
import { router } from '@inertiajs/react'

const AdminRegister = () => {

    const [ values, setValues ] = useState({
        name: '',
        lastname: '',
        username: '',
        birthday: '',
        role: '',
        department: '',
        email: '',
        password: '',
        confirmpassword: '',
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
        console.log(values);
        // router.post('', values)
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <div>
                    <input type="text" name="name" id="name" value={values.name} onChange={handleChange} placeholder="Name" />
                </div>
                <div>
                    <input type="text" name="lastname" id="lastname" value={values.lastname} onChange={handleChange} placeholder="Last name" />
                </div>
                <div>
                    <input type="text" name="username" id="username" value={values.username} onChange={handleChange} placeholder="Username" />
                </div>
                <div>
                    <label htmlFor="birthday">Birthday: </label>
                    <input type="date" name="birthday" id="birthday" value={values.birthday} onChange={handleChange} />
                </div>
                <div>
                    <input type="text" name="role" id="role" value={values.role} onChange={handleChange} placeholder="Role" />
                </div>
                <div>
                    <input type="text" name="department" id="department" value={values.department} onChange={handleChange} placeholder="Department" />
                </div>
                <div>
                    <input type="email" name="email" id="email" value={values.email} onChange={handleChange} placeholder="Email" />
                </div>
                <div>
                    <input type="password" name="password" id="password" value={values.password} onChange={handleChange} placeholder="Password" />
                </div>
                <div>
                    <input type="password" name="confirmpassword" id="confirmpassword" value={values.confirmpassword} onChange={handleChange} placeholder="Repeat password" />
                </div>
                <button type="submit">Next</button>
            </form>
        </>
    )
}

export default AdminRegister;