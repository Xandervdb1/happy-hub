import React from "react"

const popupFormMember = () => {
    return (
        <div className="formContainer">
            <h1>Add new Member</h1>
            <input type="text" name="name" id="name" placeholder="Name" className="input" />

            <input type="text" name="slug" id="slug" placeholder="Slug" className="input" />

            <input type="text" name="Price" id="price" placeholder="Price" className="input" />

            <input type="text" name="Type" id="type" placeholder="Type" className="input" />
        </div>
    )
}
export default popupFormMember;