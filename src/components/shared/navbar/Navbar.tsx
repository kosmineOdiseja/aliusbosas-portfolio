import React, { useState } from 'react'
import { Link } from 'gatsby'
import { RiMenu5Line } from 'react-icons/ri'


const Navbar = () => {
	const [ open, setOpen ] = useState(false)
  return (

	<div className=''>
		<RiMenu5Line onClick={() => setOpen(!open)} />
	</div>
  )
}

export default Navbar