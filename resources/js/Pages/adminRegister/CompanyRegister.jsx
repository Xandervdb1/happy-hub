import { useState } from 'react'
import { router, usePage } from '@inertiajs/react'
import Header from '@/Components/HeaderMobile'
import HeaderDesktop from "@/Components/HeaderDesktop.jsx"

const CompanyRegister = () => {

    const { errors } = usePage().props

    const [values, setValues] = useState({
        companyname: '',
        vatnumber: '',
        country: '',
        function: '',
        city: '',
        zip: '',
        address: '',
        addressnumber: '',
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
        router.post('/company-register', values)
    }

    return (
        <>
            <HeaderDesktop />
            <Header />
            <div className='formContainer'>
                <form onSubmit={handleSubmit}>
                    <div className="inputField">    
                        <input className="input" type="text" name="companyname" id="companyname" value={values.companyname} onChange={handleChange} placeholder="Company name" />
                        <span className="error-message">{errors.companyname}</span> 

                        <input className="input" type="text" name="vatnumber" id="vatnumber" value={values.vatnumber} onChange={handleChange} placeholder="VAT number" />
                        <span className="error-message">{errors.vatnumber}</span> 
                        
                        <input type="text" name="function" id="function" value={values.function} onChange={handleChange} placeholder="Role" className="input" />
                        <span className="error-message">{errors.function}</span> 
                        
                        <input className="input" type="text" name="country" id="country" value={values.country} onChange={handleChange} placeholder="Country" />
                        <span className="error-message">{errors.country}</span> 
                        
                        <input className="input" type="text" name="city" id="city" value={values.city} onChange={handleChange} placeholder="City" />
                        <span className="error-message">{errors.city}</span> 
                        
                        <input className="input" type="text" name="zip" id="zip" value={values.zip} onChange={handleChange} placeholder="ZIP" />
                        <span className="error-message">{errors.zip}</span> 
                        
                        <input className="input" type="text" name="address" id="address" value={values.address} onChange={handleChange} placeholder="Street" />
                        <span className="error-message">{errors.address}</span> 
                        
                        <input className="input" type="text" name="addressnumber" id="addressnumber" value={values.addressnumber} onChange={handleChange} placeholder="Nr" />
                        <span className="error-message">{errors.addressnumber}</span> 
                    </div>
                    <div className="buttonContainer">
                        <button type="submit" className="button">Next</button>
                    </div>
                </form>
            </div>
        </>
    )
}

export default CompanyRegister;