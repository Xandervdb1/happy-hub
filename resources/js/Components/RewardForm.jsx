import React from "react"

const popupFormReward = () => {
    return (
        <div className="formContainer">
            <h1>Add new Reward</h1>
            <input type="text" name="name" id="name" placeholder="Name" className="input" />

            <input type="text" name="slug" id="slug" placeholder="Slug" className="input" />

            <input type="text" name="Price" id="price" v placeholder="Price" className="input" />

            <input type="text" name="Type" id="type" placeholder="Type" className="input" />
        </div>
    )
}
export default popupFormReward;