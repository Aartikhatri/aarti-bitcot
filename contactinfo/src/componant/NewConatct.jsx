import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import { addContact } from '../reduxfile/contactReducer'
import { Link, useNavigate } from 'react-router-dom'


const NewConatct = () => {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [Mobile, setMobile] = useState("")

    const navigate = useNavigate();

    const contacters = useSelector((state) => state.contactDetails)
    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(addContact({
            id: contacters[contacters.length - 1].id + 1,
            name: name,
            mobile: Mobile,
            email: email
        }))
        navigate("/")
    }



    return (
        <div className=' text-center m-5'>

            <form action="" onSubmit={handleSubmit}>


                <div className="form-floating mb-3">

                    <input type="text" className="p-2 rounded w-50 ms-4 text-center" id="floatingInput" placeholder="Enter your name"
                        onChange={e => setName(e.target.value)}
                    />

                </div>
                <div className="form-floating mb-3">
                    <input type="email" className="p-2 rounded w-50 ms-4 text-center" id="floatingPassword" placeholder="name@example.com"
                        onChange={e => setEmail(e.target.value)}
                    />

                </div>
                <div className="form-floating mb-3">
                    <input type="text" className="p-2 rounded w-50 ms-4 text-center" id="floatingPassword" placeholder="Enter your number"
                        onChange={e => setMobile(e.target.value)}
                    />

                </div>

                    <button className='p-2 rounded' >Submit</button>
                

            </form>

        </div>
    )
}

export default NewConatct
