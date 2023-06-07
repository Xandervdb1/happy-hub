import React from "react"
import { useState } from 'react'
import { router } from '@inertiajs/react'

const FormTeam = (props) => {
    const [values, setValues] = useState({
        teamname: '',
        adminCheck: false
    })
    const handleChange = (e) => {
        const key = e.target.id;
        let value;
        if (key == "adminCheck") {
            value = e.target.checked;
        } else {
            value = e.target.value;
        }
        console.log(value);
        setValues(values => ({
            ...values,
            [key]: value,
        }))
        console.log(values);
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(values);
        router.post('/company-dashboard-user', values)
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
                    <h1>Add new Team</h1>
                    <form onSubmit={handleSubmit}>
                        <input type="text" name="teamname" id="teamname" value={values.teamname} onChange={handleChange} placeholder="Teamname" className="input" />

                        <button className="btn">Submit</button>
                    </form>
                </div>
            </section>
            <div className="overlay hidden"></div>
        </>
    )
}
export default FormTeam;