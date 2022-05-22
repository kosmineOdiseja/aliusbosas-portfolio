import React from 'react'
import { StaticImage } from "gatsby-plugin-image"

const Hero = () => {

  return (

	  <div className='bg-indigo-900 h-screen items-center flex  justify-center' >
	  	<section className='container flex flex-row gap-8 w-auto h-auto'>
			<div className='flex justify-center lg items-start gap-5 flex-col '>
				<h1 className='text-lg text-green-400 '> Sveiki, aš esu </h1>
				<h2 className='text-5xl text-yellow-500 font-semibold '> Alius Bosas </h2>
				<code className='text-3xl text-green-600'> Aš noriu užaugti su Jumis </code> 
				<h3 className='text-5xl text-yellow-200 font-bold '> Front-end programuotojo pozicijoje! </h3>
			</div>
		  <StaticImage
		  	src='../../assets/images/programmer-hero.png'
			className='flex-1 '
			alt='programmer'
			placeholder="blurred"
			width={500}
			height={500}
			/>
		</section>
	  </div>
  )
}

export default Hero
