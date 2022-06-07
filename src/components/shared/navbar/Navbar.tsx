import React, { useState } from 'react'
import { Link } from 'gatsby'
import { RiMenu5Line } from 'react-icons/ri'


const Navbar = () => {

	const [ isOpen, setIsOpen ] = useState<boolean>(false)
	const [ hide, setHide ] = useState<boolean>(false)
	
	const handleClick = () => {
		setIsOpen(!isOpen)
		setHide(!hide)
	}

  return (
	  <>
	<div className='fixed h-full w-[35vw] top-0 right-0 p-10' >
		{ !isOpen ? (
			<button onClick={() => setIsOpen(!isOpen)} className='cursor-pointer'>
				<div className='w-7 h-1 m-1.5 bg-green'> </div>
				<div className='w-6 h-1 m-1.5 bg-green'> </div>
				<div className='w-7 h-1 m-1.5 bg-green'> </div>
			</button>)
			 : 
			 (<ul>
				<button className='text-3xl text-light-text' onClick={()=> setIsOpen(!isOpen)}>X</button> 
				<div className='top-50'>
					<li className='text-light-text'>
						<Link to='/' >
							<span className='text-green text-4xl'>Pradžia</span>
						</Link>
					</li>
					<li >
						<Link to='/about/index' >
							<span className='text-green text-4xl'>Apie mane</span>
						</Link>
					</li>
					<li >
						<Link to='/projects/index'  activeClassName='text-green'>
							<span className='text-green text-4xl'>Portfolio</span>
						</Link>
					</li>
					<li >
						<Link to='/contact'  >
							<span className='text-green text-4xl'>Kontaktai</span>
						</Link>
					</li>
				</div>
			</ul>
			)}
		</div>
	</>
  )
}

export default Navbar

