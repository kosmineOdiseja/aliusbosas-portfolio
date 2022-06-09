import React, { useState } from 'react'
// import { Link as AnchorLink } from 'gatsby'
import { AnchorLink } from "gatsby-plugin-anchor-links";

const Navbar = () => {

	const [ isOpen, setIsOpen ] = useState<boolean>(false)
	const [ hide, setHide ] = useState<boolean>(false)
	
	const handleClick = () => {
		setIsOpen(!isOpen)
		setHide(!hide)
	}

  return (
	<>
		<div className='fixed top-0 right-0 flex w-screen '>
			{ !isOpen ? (
				<button onClick={() => setIsOpen(!isOpen)} className="top-10 right-10 absolute">
					<div className='w-7 h-1 m-1.5 bg-green'> </div>
					<div className='w-6 h-1 m-1.5 bg-green'> </div>
					<div className='w-7 h-1 m-1.5 bg-green'> </div>
				</button>)
				: 
				(<ul className='w-full h-screen absolute flex items-center justify-center'>
					<button className='text-3xl text-green top-10 right-10 absolute' onClick={()=> setIsOpen(!isOpen)}>X</button> 

					<div className='flex flex-col justify-center items-center bg-nightsky h-full w-screen gap-10'>
						<li className=''>
							<AnchorLink to='/#pradzia' >
								<span className='text-green text-6xl '>Pradžia</span>
							</AnchorLink>
						</li>
						<li >
							<AnchorLink to='/about/' >
								<span className='text-green text-6xl hover:text-7xl'>Apie mane</span>
							</AnchorLink>
						</li>
						<li >
							<AnchorLink to='/projects/' >
								<span className='text-green text-6xl hover:text-7xl'>Portfolio</span>
							</AnchorLink>
						</li>
						<li >
							<AnchorLink to='/contact/'>
								<span className='text-green text-6xl hover:text-7xl'>Kontaktai</span>
							</AnchorLink>
						</li>
					</div>
				</ul>
				)}
			</div>
		</>
  )
}

export default Navbar

