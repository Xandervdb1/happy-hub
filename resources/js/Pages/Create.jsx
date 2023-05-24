import { router } from '@inertiajs/react'
import { useState } from 'react'

const Create = () => {
    const [values, setValues] = useState({
        name: '',
        email: '',
        password: '',
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
        e.preventDefault()
        router.post('/', values)
    }

    return (
        <>
            <h1>Register New User</h1>

            <form onsSubmit={handleSubmit} className="max-w-xs mx-auto mt-8">

                <div className="mb-8">
                    <label htmlFor="name"
                        className="block mb-2 uppercase font-bold text-xs"
                    >Name
                    </label>
                    <input type="text"
                        className="border p-2 w-full"
                        value={values.name}
                        onChange={handleChange}
                        name="name"
                        id="name"
                        required
                    />
                </div>

                <div className="mb-8">
                    <label htmlFor="email"
                        className="block mb-2 uppercase font-bold text-xs"
                    >Email
                    </label>
                    <input type="email"
                        className="border p-2 w-full"
                        value={values.email}
                        onChange={handleChange}
                        name="email"
                        id="email"
                        required
                    />
                </div>

                <div className="mb-8">
                    <label htmlFor="password"
                        className="block mb-2 uppercase font-bold text-xs"
                    >Password
                    </label>
                    <input type="password"
                        className="border p-2 w-full"
                        value={values.password}
                        onChange={handleChange}
                        name="password"
                        id="password"
                        required
                    />
                </div>

                <div className="">
                    <button type="submit"
                        className="rounded bg-cyan-950 text-white py-2 px-6 hover:bg-cyan-900"
                    >Submit
                    </button>
                </div>

            </form>

            <script setup>

            </script>
        </>
    )

}
export default Create;

