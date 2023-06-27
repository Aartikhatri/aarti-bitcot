import React from 'react'
import { useDispatch, useSelector } from "react-redux"

import { Link } from 'react-router-dom';
import { deleteContact } from '../reduxfile/contactReducer';

const ContactInfo = () => {
    const contacters = useSelector((state) => state.contactDetails)
    console.log(contacters);

    const dispatch = useDispatch();

    const handleDelete = (id)=> {
       dispatch(deleteContact({
         id : id
       }))
    }

    return (
      <>
    
        <div className='mt-4'>
            <table className='table w-50 ms-auto me-auto'>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th></th>
                        <th>Name</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {contacters.map((data) => (

                        <tr key={data.id}>
                            <td>{data.id}</td>
                            <td ><i className="fa-solid fa-user fa-lg"  ></i> </td>
                            <td> {data.name} <br /> <span> {data.mobile} </span> </td>
                            <td>
                                <Link to={`/view/${data.id}`} >   <button className='m-1 p-1 bg-transparent border-0'><i className="fa-solid fa-eye"></i></button></Link>
                               <Link to={`/edit/${data.id}`} > <button className='m-1 p-1 bg-transparent border-0'><i className="fa-solid fa-pen"></i></button> </Link>
                               <button onClick={()=>handleDelete(data.id)} className='m-1 p-1 bg-transparent border-0'><i className="fa-solid fa-trash"></i></button> 
                                
                            </td>
                        </tr>


                    ))}

                </tbody>
            </table>
        </div>
      </>
    )
}

export default ContactInfo

