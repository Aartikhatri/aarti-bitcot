import React, { useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { useDispatch, useSelector } from "react-redux" 
import { updateContact } from '../reduxfile/contactReducer'

const Update = () => {
 
    const { id} = useParams();

    const contacters = useSelector((state) => state.contactDetails)
   
    const existingContact = contacters.filter(data => data.id == id);

    const {  name , email , mobile} = existingContact[0];
    const [updateName  , setName] = useState(name)
    const [updateEmail, setEmail] = useState(email)
    const [updateMobile, setMobile] = useState(mobile)

    const navigate = useNavigate()

    const dispatch = useDispatch()

    const  handleUpdate = (e) => {
        console.log("in");
        console.log(contacters);
        e.preventDefault() ;
        dispatch(updateContact({
            id : id ,
            name : updateName ,
            email :updateEmail ,
            mobile : updateMobile
        }));
        navigate('/')
    }


    return (
        <div>
            <div className=' text-center m-5'>

                <form  onSubmit={handleUpdate} >


                    <div className="form-floating mb-3">

                        <input type="text" className="p-2 rounded w-50 ms-4 text-center" id="floatingInput" placeholder="Enter your name"
                         value={updateName} onChange={e => setName(e.target.value)}
                        />

                    </div>
                    <div className="form-floating mb-3">
                        <input type="email" className="p-2 rounded w-50 ms-4 text-center" id="floatingPassword" placeholder="name@example.com"
                          value={updateEmail} onChange={e => setEmail(e.target.value)}
                        />

                    </div>
                    <div className="form-floating mb-3">
                        <input type="text" className="p-2 rounded w-50 ms-4 text-center" id="floatingPassword" placeholder="Enter your number"
                          value={updateMobile}  onChange={e => setMobile(e.target.value)}
                        />

                    </div>

                        <button className='p-2 rounded' >Update</button>
                    
                </form>

            </div>
        </div>
    )
}

export default Update

