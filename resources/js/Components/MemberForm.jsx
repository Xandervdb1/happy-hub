import React from "react"
import { useState } from 'react'
import { router } from '@inertiajs/react'

const FormMember = () => {
    const [values, setValues] = useState({
        name: '',
        slug: '',
        price: '',
        function: '',

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
        router.post('/company-dashboard', values)
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
            <button className="addLink" onClick={showModal}>+</button>
            <section className="modal hidden" >
                <div className="flex">
                    <button className="btn-close" id="btn" onClick={closeModal}>X</button>
                </div>
                <div className="formContainer">
                    <h1>Add new Member</h1>
                    <form onSubmit={handleSubmit}>
                        <input type="text" name="name" id="name" value={values.name} onChange={handleChange} placeholder="Name" className="input" />

                        <input type="email" name="email" id="email" value={values.email} onChange={handleChange} placeholder="Email" className="input" />

                        <select name="team" className="input" id="team" value={values.team} onChange={handleChange} placeholder="Team">
                            <option value="Team">Choose Team</option>
                            <option value="Team">Team 1</option>
                            <option value="Team">Team 2</option>
                        </select>
                        <select name="function" className="input" id="function" value={values.function} onChange={handleChange} placeholder="function">
                            <option value="Team">Choose Function</option>
                            <option value="Personal">Front -end</option>
                            <option value="Team">Back- end</option>
                        </select>
                        <div>
                            <input type="checkbox" id="adminCheck" name="adminCheck"
                                checked />
                            <label for="adminCheck">Admin?</label>
                        </div>


                        <button className="btn">Submit</button>
                    </form>
                </div>
            </section>
            <div className="overlay hidden"></div>
        </>
    )
}
export default FormMember;