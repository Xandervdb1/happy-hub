import React from "react"
import { useState } from 'react'
import { router, usePage } from '@inertiajs/react'

const FormMember = (props) => {

    const { errors } = usePage().props


    const [values, setValues] = useState({
        firstname: '',
        lastname: '',
        email: '',
        team: '',
        function: '',
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
        setValues({
            firstname: '',
            lastname: '',
            email: '',
            team: '',
            function: '',
            adminCheck: false
        });
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
                    <h1 className="title">Add new Member</h1>
                    <form onSubmit={handleSubmit}>
                        <input type="text" name="firstname" id="firstname" value={values.firstname} onChange={handleChange} placeholder="First name" className="input" />
                        <span className="error-message">{errors.firstname}</span>
                        <input type="text" name="lastname" id="lastname" value={values.lastname} onChange={handleChange} placeholder="Last name" className="input" />
                        <span className="error-message">{errors.lastname}</span>
                        <input type="email" name="email" id="email" value={values.email} onChange={handleChange} placeholder="Email" className="input" />
                        <span className="error-message">{errors.email}</span>
                        <select name="team" className="input" id="team" value={values.team} onChange={handleChange} placeholder="Team">
                            <option value="Team">Choose Team</option>
                            {
                                props.teams.map(team => {
                                    return (
                                        <option key={team.id} value={team.id}>{team.name}</option>
                                    )
                                })
                            }
                        </select>
                        <span className="error-message">{errors.team}</span>

                        <select name="function" className="input" id="function" value={values.function} onChange={handleChange} placeholder="function">
                            <option value="Team">Choose Function</option>
                            {
                                props.roles.map(role => {
                                    return (
                                        <option key={role.id} value={role.id}>{role.name}</option>
                                    )
                                })
                            }
                        </select>
                        <span className="error-message">{errors.function}</span>

                        <div>
                            <input className="checkbox" type="checkbox" id="adminCheck" name="adminCheck" onChange={handleChange} />
                            <label htmlFor="adminCheck">Admin?</label>
                        </div>


                        <button className="button">Submit</button>
                    </form>
                </div>
            </section>
            <div className="overlay hidden"></div>
        </>
    )
}
export default FormMember;