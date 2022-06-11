import React, { useState } from 'react'
import  skillIknow  from  '../../constants/skillsIKnow.js'
import skillIwant  from  '../../constants/skillsIWant.js'
import SkillCard from '../shared/SkillCard'
// src\constants\skillsIKnow.js

interface skillIknow {
	name: string,
	url: string,
}
interface skillIwant {
	name: string,
	url: string,
}


function Skills() {
	const [ skills, setSkills ] = useState(skillIknow)
	const [ learnMore, setLearnMore ] = useState(skillIwant)

  return (
		<section className='bg-nightsky relative'>
				<div className='h-full phone:h-screen tablet:w-9/12 mx-auto p-6 items-center justify-center flex flex-col gap-5 '>
					<h2 className='bg-green text-nightsky mx-auto text-4xl rounded-lg font-semibold py-5 px-4 tablet:text-5xl text-center '>Ką aš galiu naudoti projektuose?</h2>
						<div className='bg-light-text rounded-2xl mx-auto p-5 flex flex-row gap-5 flex-wrap'>
							{skills.map((item: skillIknow, index: number) => {
									return (
										// <SkillCard key={index} item={item} />
										<div className='bg-green rounded-2xl m-auto px-5 py-2.5'  > 
											<a href={item.url} className='text-3xl' target="_blank">
												<h3 className='text-3xl text-light-text text-center'>{item.name}</h3>
											</a>
										</div>
									)
							})}
						</div>
					<h2 className='bg-green text-nightsky mx-auto text-4xl rounded-lg font-semibold py-5 px-4 tablet:text-5xl text-center'>Ką aš noriu išmokti?</h2>
					<div className='bg-light-text rounded-2xl mx-auto p-5 flex flex-row gap-5 flex-wrap'>
						{learnMore.map((item: skillIwant, index: number) => {
								return (
									<div className='bg-green rounded-2xl px-5 py-2.5 m-auto relative' > 
										<a href={item.url} className='text-3xl' target="_blank">
											<h3 className='text-3xl text-light-text text-center'>{item.name}</h3>
										</a>
									</div>
								)
							})
						}
					</div>
				</div>
	</section>
  )
}

export default Skills