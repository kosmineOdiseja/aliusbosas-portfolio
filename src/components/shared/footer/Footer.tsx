import React, { useState } from 'react'
import SocialIcons from '../../../constants/social.js'
interface socialLinks {
		name: string,
		url: string, 
		icon: any,
}

const Footer = () => {
	console.log(SocialIcons, 'this is Social icons ')
	const [ socialIcons, setSocialIcons ] = useState<socialLinks[]>(SocialIcons)

  return (
	<nav className='flex flex-row gap-4 align-center justify-center bg-nightsky text-6xl text-light-text py-4 '>
		{socialIcons.map(({  name, icon, url  } : socialLinks ) => (
				<a key={ name } href={ url } target='_blank' >
					{name}
				</a>
			))}
	</nav>
  )
}

export default Footer