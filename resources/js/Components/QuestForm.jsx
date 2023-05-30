import React from "react"

const popupFormQuest = () => {
    return (
        <div className="formContainer">
            <h1>Add new Quest</h1>
            <input type="text" name="name" id="name" placeholder="Name" className="input" />

            <input type="text" name="slug" id="slug" placeholder="Slug" className="input" />

            <input type="text" name="Price" id="price" v placeholder="Price" className="input" />

            <input type="text" name="Type" id="type" placeholder="Type" className="input" />
        </div>
    )
}
export default popupFormQuest;