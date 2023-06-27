import React, { useState } from 'react'

import { Link } from 'react-router-dom'

const Header = () => {

  const [openModal, setModal] = useState(false)

  return (
    <div>
      <h1 className='text-center bg-dark text-white p-3'>Add Conatct
        <Link to={"/add"} >
          <button  > <i className="fa-solid fa-plus"></i></button>
        </Link>
      </h1>

    </div>
  )
}

export default Header
