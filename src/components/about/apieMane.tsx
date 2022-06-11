import { title } from 'process'
import React, { useState } from 'react'
import personalInfo from '../../constants/apieMane.js'

interface aboutInfo {
		title: string,
		description: string,
}

const apieMane = () => {

	const [ info, setInfo ] = useState<aboutInfo[]>(personalInfo)
	
  return (
	// <section className='bg-nightsky relative '> this prevents from particles to be displayed on the section background
	<section className='bg-nightsky '>
		<div className='tablet:w-9/12 mx-auto py-5' id='pradzia' >
			  <div className='flex flex-col gap-4 tablet:gap-4 mx-4'>

				{info.map((item: aboutInfo, index: number) => {
					return (
						<div className=''>
							<h3 className='text-light-text text-xl tablet:text-4xl py-3 ' key={index}>{item.title}</h3>
							<code className='text-green text-lg tablet:text-2xl'> {item.description} </code>
						</div>
					)})
				}
			</div>
		</div>
	</section>
  )
}

export default apieMane