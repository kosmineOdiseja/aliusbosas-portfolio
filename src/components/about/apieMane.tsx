import { title } from 'process'
import React, { useState } from 'react'
import personalInfo from '../../constants/apieMane.js'


interface aboutInfo {
		title: string,
		description: string,
}

const apieMane = () => {
	console.log(personalInfo, 'this is pesonal info')

	const [ info, setInfo ] = useState<aboutInfo[]>(personalInfo)
	console.log(info, 'this is info')
	
  return (
	<section className='bg-nightsky relative '>
		<div className='tablet:w-9/12 mx-auto py-5' id='pradzia' >
			  <div className='flex flex-col gap-3 tablet:gap-4'>

				{info.map((item: aboutInfo, index: number) => {
					return (
						<div className='px-4'>
							<h3 className='text-light-text text-xl px-4 tablet:text-4xl ' key={index}>{item.title}</h3>
							<code className='text-green text-lg px-4 tablet:text-2xl'> {item.description} </code>
						</div>
					)})
				}
			</div>
		</div>
	</section>
  )
}

export default apieMane