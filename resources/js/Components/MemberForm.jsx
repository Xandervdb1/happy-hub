import React from "react"

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

                        <input type="text" name="slug" id="slug" value={values.slug} onChange={handleChange} placeholder="Slug" className="input" />

                        <input type="text" name="Price" id="price" value={values.price} onChange={handleChange} placeholder="Price" className="input" />

                        <select name="function" className="input" id="function" value={values.function} onChange={handleChange} placeholder="function">
                            <option value="Personal">Front -end</option>
                            <option value="Team">Back- end</option>
                        </select>
                        <button className="btn">Submit</button>
                    </form>
                </div>
            </section>
            <div className="overlay hidden"></div>
        </>
    )
}
export default FormMember;