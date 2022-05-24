import React from 'react'
import socialLinks  from '../../../data/socialLinksData.js'

interface socialLinks {
		name: string,
		link: string, 
		target: string,
		icon: any,
}

const SideBar = () => {

  return (
	<nav className=' '>
		{socialLinks.map(({  name, icon, link, target  } : socialLinks ) => (
				<a key={ name } href={ link } target={target} className=''>
					{icon}
				</a>
			))}
	</nav>
  )
}

export default SideBar