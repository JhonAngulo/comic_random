import React from 'react'
import OppsImagen from '../../public/images/oops.png'

const Error = ({ title, text }) => {
  return (
    <div className='error'>
      <img className='error--imagen' src={OppsImagen} width='500' height='500' alt="Error"/>
      <h2 className='error--badge' >{title}</h2>
      <p className='error--text' >{text}</p>
    </div>
  )
}

export default Error
