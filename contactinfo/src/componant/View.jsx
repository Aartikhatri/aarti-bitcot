import React from 'react'

import { Link, useNavigate, useParams } from 'react-router-dom'
import { useDispatch, useSelector } from "react-redux" 
import { updateContact } from '../reduxfile/contactReducer'




const View = () => {

    const { id} = useParams();

const contacters = useSelector((state) => state.contactDetails)

const existingContact = contacters.filter(data => data.id == id);

const {  name , email , mobile} = existingContact[0];

  return (
    <div className='text-center'>
        <h1>Contact Details :-</h1>
         <div>
           <p><span className='fw-bold'>Name :- </span><span>{name} </span></p>
         </div>
         <div> 
           <p><span className='fw-bold'>Email :- </span><span>{email} </span></p>
         </div>
         <div>
           <p><span className='fw-bold'>Mobile :- </span><span> {mobile} </span></p>
         </div>
         <Link to={"/"} > <button className='px-3 py-2 rounded' > Back</button> </Link>
         
    </div>
  )
}

export default View
