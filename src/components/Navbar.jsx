import React from 'react'

const Navbar = () => {
  return (
    <div className='navbar'>
      <span className='logo'>Hola Chat!</span>
      <div className='user'>
        <img src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
        <span>Utku</span>
        <button>Logout</button>
      </div>
    </div>
  )
}

export default Navbar