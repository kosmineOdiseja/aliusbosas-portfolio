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
	<nav className='sidebar fixed top-0 bottom-0 lg:left-0 p-2 bg-transparent flex flex-col justify-center items-start gap-5 w-10 '>
		{socialLinks.map(({  name, icon, link, target  } : socialLinks ) => (
				<a key={ name } href={ link } target={target} className=''>
					{icon}
				</a>
			))}
	</nav>
  )
}

export default SideBar