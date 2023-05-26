import { useState } from 'react'
import { router } from '@inertiajs/react'
import Header from '@/Components/Header'

const CompanyRegister = () => {

    const [values, setValues] = useState({
        companyname: '',
        vatnumber: '',
        country: '',
        city: '',
        zip: '',
        adress: ''
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
            <Header />
            <div className='formContainer'>
                <form onSubmit={handleSubmit}>
                    <input className='input' type="text" name="companyname" id="companyname" value={values.companyname} onChange={handleChange} placeholder="Company name" />
                    <input className='input' type="text" name="vatnumber" id="vatnumber" value={values.vatnumber} onChange={handleChange} placeholder="VAT number" />
                    <input className='input' type="text" name="country" id="country" value={values.country} onChange={handleChange} placeholder="Country" />
                    <input className='input' type="text" name="city" id="city" value={values.city} onChange={handleChange} placeholder="City" />
                    <input className='input' type="text" name="zip" id="zip" value={values.zip} onChange={handleChange} placeholder="ZIP" />
                    <input className='input' type="text" name="adress" id="adress" value={values.department} onChange={handleChange} placeholder="Street & nr" />
                    <div className='buttonContainer'>
                        <button type="submit">Next</button>
                    </div>
                </form>
            </div>
        </>
    )
}

export default CompanyRegister;