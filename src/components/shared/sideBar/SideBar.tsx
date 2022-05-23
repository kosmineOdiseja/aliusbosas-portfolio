import React from 'react'
import { AiFillGithub } from 'react-icons/ai';
import { AiFillFacebook } from 'react-icons/ai';
import { AiFillTwitterSquare } from 'react-icons/ai';
import { AiFillLinkedin } from 'react-icons/ai';

const SideBar = () => {

  return (
	<nav className='sidebar fixed top-0 bottom-0 lg:left-0 p-2 bg-transparent flex flex-col justify-center items-start gap-5 w-10 '>
		<a href='https://twitter.com/AliusBosas/' target='twitterWindow' className=''>
			<AiFillTwitterSquare className='fill-white w-8 h-9 mx-6 hover:w-10 hover:h-11 hover:fill-yellow-500 '/>
		</a>
		<a href='https://github.com/kosmineOdiseja/' target='githubWindow' className=''>
			<AiFillGithub className='fill-white w-8 h-9 mx-6 hover:w-10 hover:h-11 hover:fill-yellow-500'/>
		</a>
		<a href='https://www.facebook.com/aliusbosas/' target='facebookWindow' className=''>
			<AiFillFacebook className='fill-white w-8 h-9 mx-6 hover:w-10 hover:h-11 hover:fill-yellow-500 '/>
		</a>
		<a href='https://www.linkedin.com/in/alius-bosas-6781b5189/' target='linkedinWindow' className=''>
			<AiFillLinkedin className='fill-white w-8 h-9 p mx-6 hover:w-10 hover:h-11 hover:fill-yellow-500' />
		</a>
	</nav>
  )
}

export default SideBar