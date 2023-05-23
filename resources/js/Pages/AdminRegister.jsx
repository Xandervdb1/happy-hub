const AdminRegister = () => {
    return (
<>
        <form>
            <div>
                <input type="text" name="name" id="name" placeholder="Name" />
            </div>
            <div>
                <input type="text" name="lastName" id="lastName" placeholder="Last name" />
            </div>
            <div>
                <input type="text" name="username" id="username" placeholder="Username" />
            </div>
            <div>
                <label htmlFor="birthday">Birthday: </label>
                <input type="date" name="birthday" id="birthday" />
            </div>
            <div>
                <input type="text" name="function" id="function" placeholder="Function" />
            </div>
            <div>
                <input type="text" name="department" id="department" placeholder="Department" />
            </div>
            <div>
                <input type="email" name="email" id="email" placeholder="Email" />
            </div>
            <div>
                <input type="password" name="password" id="password" placeholder="Password" />
            </div>
            <div>
                <input type="password" name="password" id="password" placeholder="Repeat password"/>
            </div>
            <button type="submit">Next</button>
        </form>
</>
    )
}

export default AdminRegister;