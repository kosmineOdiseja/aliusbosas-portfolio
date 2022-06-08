import React, { useState } from 'react'
import { Link } from 'gatsby'


const Navbar = () => {

	const [ isOpen, setIsOpen ] = useState<boolean>(false)
	const [ hide, setHide ] = useState<boolean>(false)
	
	const handleClick = () => {
		setIsOpen(!isOpen)
		setHide(!hide)
	}

  return (
// 	  <>
// 	<div className='fixed h-full w-screen top-0 right-0  m-auto p-10'>
// 		{ !isOpen ? (
// 			// write conditional here to check if isOpen is true or false and return the position absolute or relative in className 

// 			<button className='flex items-center justify-center w-full h-full' onClick={handleClick}>
// 				<svg className='fill-current text-white h-8 w-8' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>
// 			</button>
// 		) : (
// 			<button className='flex items-center justify-center w-full h-full' onClick={handleClick}>
// 				<svg className='fill-current text-white h-8 w-8' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M10 8.586L2.929 1.515 1.515 2.929 8.586 10l-7.071 7.071 1.414 1.414L10 11.414l7.071 7.071 1.414-1.414L11.414 10l7.071-7.071-1.414-1.414L10 8.586z"/></svg>
// 			</button>
// 		)}
// 	</div>
// 	<div className={`sidebar ${isOpen ? 'showSidebar' : ''}`}>
// 		<button className='close-btn' onClick={handleClick}>
// 			X
// 		</button>
// 		<div className='sidebar-container'>
// 			{/* links goes here */}
// 		</div>
// 	</div>
// 	</>
//   )
// }

<>
<div >

	{ !isOpen ? (
			// <button className='flex items-center justify-center w-12 h-12 rounded-full bg-white text-black hover:bg-gray-100 hover:text-black' onClick={handleClick}>
			<button onClick={() => setIsOpen(!isOpen)} className="top-10 right-10 ${isOpen ? absolute : relative}">
			{/* // <button onClick={() => setIsOpen(!isOpen)} className="top-10 right-10 "> */}
				<div className='w-7 h-1 m-1.5 bg-green'> </div>
				<div className='w-6 h-1 m-1.5 bg-green'> </div>
				<div className='w-7 h-1 m-1.5 bg-green'> </div>
			</button>)
			 : 
			 (<ul className='h-full w-screen absolute x'>
				<button className='text-3xl text-green top-10 right-10 absolute' onClick={()=> setIsOpen(!isOpen)}>X</button> 

				<div className='flex flex-col justify-center items-center bg-nightsky h-full w-screen gap-10'>
					{/* <li className=''>
						<Link to='/' >
							<span className='text-green text-6xl '>Pradžia</span>
						</Link>
					</li> */}
					<li >
						<Link to='/about/' >
							<span className='text-green text-6xl'>Apie mane</span>
						</Link>
					</li>
					<li >
						<Link to='/projects/'  activeClassName='text-green'>
							<span className='text-green text-6xl'>Portfolio</span>
						</Link>
					</li>
					<li >
						<Link to='/contact/'>
							<span className='text-green text-6xl'>Kontaktai</span>
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

