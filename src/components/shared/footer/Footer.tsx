import React from 'react'
import socialLinks  from '../../../data/socialLinksData.js'

interface socialLinks {
		name: string,
		link: string, 
		target: string,
		icon: any,
}

const Footer = () => {

  return (
	<nav className='flex flex-row gap-2 align-center justify-center bg-transparent w-full  '>
		{socialLinks.map(({  name, icon, link, target  } : socialLinks ) => (
				<a key={ name } href={ link } target={target} >
					{icon}
				</a>
			))}
	</nav>
  )
}

export default Footer