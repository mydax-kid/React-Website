import { Link} from 'react-router-dom'
import React from 'react'

const Button= ({name, children}) => {

  return(
    <>
      <Link to='/Signup' className= 'btn'>
       <button className= {name}> {children} </button>
      </Link>
    </>
  )
}

export default Button;