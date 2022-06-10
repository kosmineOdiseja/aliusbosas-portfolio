import React from 'react'

const SkillCard = ({ name, url}:  any) => {

  return (
	<div className='flex flex-col gap-3 tablet:flex-row' >
		<h3 className='text-xl px-4 tablet:text-4xl' >{name}</h3>
		<a href={url} className='text-green text-lg px-4 tablet:text-2xl' > </a>
	</div>
	  )
}

export default SkillCard