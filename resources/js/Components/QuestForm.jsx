import React from "react"
import { useState } from 'react'
import { router, usePage } from '@inertiajs/react'


const FormQuest = () => {

    const { errors } = usePage().props

    const [values, setValues] = useState({
        name: '',
        slug: '',
        prize: '',
        type: '',

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
        e.preventDefault();
        setValues({
            name: '',
            slug: '',
            prize: '',
            type: '',
        })
        router.post('/company-dashboard-quest', values)
    }

    const showModal = (e) => {
        const modal = e.target.nextElementSibling
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
            <button className="addLink " onClick={showModal}>+</button>
            <section className="modal hidden" >
                <div className="flex">
                    <button className="btn-close" id="btn" onClick={closeModal}>X</button>
                </div>
                <div className="formContainer">
                    <h1 className="title">Add new Quest</h1>
                    <form onSubmit={handleSubmit}>
                        <input type="text" name="name" id="name" value={values.name} onChange={handleChange} placeholder="Name" className="input" />
                        <span className="error-message">{errors.name}</span>
                        <input type="text" name="slug" id="slug" value={values.slug} onChange={handleChange} placeholder="Slug" className="input" />
                        <span className="error-message">{errors.slug}</span>
                        <input type="text" name="prize" id="prize" value={values.prize} onChange={handleChange} placeholder="Prize" className="input" />
                        <span className="error-message">{errors.prize}</span>
                        <select name="type" className="input" id='type' value={values.type} onChange={handleChange}>
                            <option> Choose type</option>
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
export default FormQuest;