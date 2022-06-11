import React, { useState } from 'react'
import SocialIcons from '../../../constants/social.js'

interface socialLinks {
		name: string,
		url: string, 
		icon: any,
}

const Footer = () => {
	// console.log(SocialIcons, 'this is Social icons ')

	// const [ socialIcons, setSocialIcons ] = useState<socialLinks[]>(SocialIcons)

  return (
	<footer className=' bg-nightsky relative'>
		<div className='font-semibold text-3xl mx-auto p-4 h-1/3 tablet:w-9/12 flex flex-col phone:flex-row  gap-4 justify-center items-center flex-wrap'>
		{/* <footer className='flex flex-col lg:flex-row gap-4 align-center justify-center bg-nightsky text-4xl text-light-text py-4 flex-wrap: wrap relative '> */}
			<h3 className='text-green text-center' > Pasikalbekime: </h3>
			{/* <h3 className='text-green' > Pasikalbekime: </h3> */}
			{SocialIcons.map(({  name, icon, url  } : socialLinks ) => (
					<a key={ name } href={ url } target='_blank' className='hover:text-green text-center text-3xl text-light-text'>
						{name }
					</a>
				))}
		</div>
	</footer>
  )
}

export default Footer