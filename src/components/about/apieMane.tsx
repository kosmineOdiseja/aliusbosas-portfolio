import { title } from 'process'
import React, { useState } from 'react'
import personalInfo from '../../constants/apieMane.js'


interface socialLinks {
		title: string,
		description: string,
}

const apieMane = () => {
	console.log(personalInfo, 'this is pesonal info')

	const [ info, setInfo ] = useState<socialLinks[]>(personalInfo)
	console.log(info, 'this is info')
	
  return (
		<div className='bg-nightsky' id='pradzia' >
	  	<section className=' m-auto w-9/12 h-1/2'>
			  <div className='flex flex-col gap-3 h-screen mx-auto p-6 items-start justify-center'>

				{info.map((item: socialLinks, index: number) => {
					return (
						<>
							<h3 className='text-light-text font-normal text-3xl' key={index}>{item.title}</h3>
							<code className='text-green text-xl'> {item.description} </code>
						</>
					)})
				}
			</div>
		</section>
	  </div>
  )
}

export default apieMane