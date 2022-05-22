import React from 'react'
import { AiFillGithub } from 'react-icons/ai';
import { AiFillFacebook } from 'react-icons/ai';
import { AiFillTwitterSquare } from 'react-icons/ai';
import { AiFillLinkedin } from 'react-icons/ai';
import { Link } from 'gatsby'

const SideBar = () => {

  return (
	<nav className='sidebar fixed top-0 bottom-0 lg:left-0 p-2 bg-transparent flex flex-col justify-center items-start gap-5 w-10 '>

		<Link to='https://twitter.com/AliusBosas' target={'_blanck'} className=''>
			<AiFillTwitterSquare className='fill-white w-8 h-9 mx-6'/>
		</Link>
		<Link to='https://github.com/kosmineOdiseja' target={'_blanck'} className=''>
			<AiFillGithub className='fill-white w-8 h-9 mx-6'/>
		</Link>
		<Link to='https://www.facebook.com/aliusbosas' target={'_blanck'} className=''>
			<AiFillFacebook className='fill-white w-8 h-9 mx-6'/>
		</Link>
		<Link to='https://www.linkedin.com/in/alius-bosas-6781b5189/' target={'_blanck'} className=''>
			<AiFillLinkedin className='fill-white w-8 h-9 p mx-6'/>
		</Link>
	</nav>
  )
}

export default SideBar