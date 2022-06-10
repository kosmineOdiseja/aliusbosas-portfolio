import React, { useState } from 'react'
import  skillIknow  from  '../../constants/skillsIKnow.js'
import skillIwant  from  '../../constants/skillsIWant.js'
import SkillCard from '../shared/SkillCard'
// src\constants\skillsIKnow.js

interface skillIknow {
	name: string,
	url: string,
}


function Skills() {
	const [ skills, setSkills ] = useState(skillIknow)
	const [ learnMore, setLearnMore ] = useState(skillIwant)

  return (
	<div>
		<div className='bg-nightsky' >
			<section className='m-auto w-9/12'>
				<div className='flex flex-col gap-6 h-screen mx-auto p-6 items-center justify-center '>
					<h2 className='text-6xl bg-green p-5 rounded-2xl text-nightsky '>Ką aš galiu naudoti projektuose?</h2>
						<div className='flex flex-row gap-5 mx-auto p-6 items-start justify-center  bg-light-text rounded-2xl'>
							{skills.map((item: skillIknow, index: number) => {
									return (
										// <SkillCard key={index} item={item} />
										<div className='bg-green rounded-2xl text-right' >
											<h3 className='text-xl px-4 tablet:text-4xl' >{item.name}</h3>
											<a href={item.url} className='text-green text-lg px-4 tablet:text-2xl' ></a>
										</div>
									)
							})}

						</div>
					<h2 className='text-6xl bg-green p-5 rounded-2xl text-nightsky '>Ką aš noriu išmokti?</h2>
					<div className='flex flex-row gap-5 mx-auto p-6 items-start justify-center '>
						{learnMore.map((item: skillIwant, index: number) => {
								return (
									<div className='bg-green rounded-2xl text-right' key={index}>
										<h3 className='text-xl px-4 tablet:text-4xll' >{item.name}</h3>
										<a href={item.url} className='text-green text-lg px-4 tablet:text-2xl' > </a>
									</div>
								)
							})
						}
					</div>
				</div>
			</section>
		</div>
	</div>
  )
}

export default Skills