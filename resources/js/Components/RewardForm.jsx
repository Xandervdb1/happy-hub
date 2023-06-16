import React from "react"
import { useState } from 'react'
import { router, usePage } from '@inertiajs/react'

const FormReward = () => {

    const { errors } = usePage().props

    const [values, setValues] = useState({
        name: '',
        slug: '',
        price: '',
        type: '',

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
        setValues({
            name: '',
            slug: '',
            price: '',
            type: '',
        })
        router.post('/company-dashboard-reward', values)
    }
    const showModal = (e) => {
        const modal = e.target.parentElement.nextElementSibling
        const overlay = modal.nextElementSibling
        modal.classList.remove("hidden")
        overlay.classList.remove("hidden")
    }
    const closeModal = (e) => {
        const modal = e.target.closest(".modal")
        const overlay = modal.nextElementSibling
        modal.classList.add("hidden")
        overlay.classList.add("hidden")
    }
    return (
        <>
            <div>
                <h1 className="titleDashboard">Add Reward</h1>
                <button className="addLink" onClick={showModal} >+</button>
            </div>
            <section className="modal hidden" >
                <div className="flex">
                    <button className="btn-close" id="btn" onClick={closeModal}> X</button>
                </div>
                <div className="formContainer">
                    <h1>Add new Reward</h1>
                    <form onSubmit={handleSubmit}>
                        <input type="text" name="name" id="name" value={values.name} onChange={handleChange} placeholder="Name" className="input" />
                        <span className="error-message">{errors.name}</span>

                        <input type="text" name="slug" id="slug" value={values.slug} onChange={handleChange} placeholder="Slug" className="input" />
                        <span className="error-message">{errors.slug}</span>

                        <input type="text" name="Price" id="price" value={values.price} onChange={handleChange} placeholder="Price" className="input" />
                        <span className="error-message">{errors.price}</span>

                        <select name="type" className="input" id="type" value={values.type} onChange={handleChange} placeholder="type">
                            <option>Choose type</option>
                            <option value="Personal">Personal</option>
                            <option value="Team">Team</option>
                        </select>
                        <span className="error-message">{errors.type}</span>

                        <button className="button">Submit</button>
                    </form>
                </div>
            </section>
            <div className="overlay hidden"></div>
        </>
    )
}
export default FormReward;