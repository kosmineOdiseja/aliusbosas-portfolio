import React from 'react'
import { StaticImage } from "gatsby-plugin-image"

const Hero = () => {

  return (

	  <div className='bg-indigo-900 h-screen items-center flex justify-center' >
	  	<section className='container flex lg:flex-row gap-8 w-auto h-auto sm:flex-col sm:p-2 sm:gap-1 '>
			<div className='flex justify-center lg items-start gap-5 flex-col '>
				<h1 className='text-lg text-green-400 xl:text-lg md:text-xl sm:text-sm '> Sveiki, aš esu </h1>
				<h2 className='text-5xl text-yellow-300 font-semibold xl:text-4xl md:text-xl sm:text-sm'> Alius Bosas </h2>
				<code className='text-3xl text-yellow-400 xl:text-2xl lg:text-md md:text-xl sm:text-sm sm:text-yellow-50'> Aš noriu padėti Jums augti </code> 
				<h3 className='text-9xl text-green-300 font-bold xl:text-3xl lg:text-3xl md:text-xl sm:text-sm'> Front-end programuotojo pozicijoje! </h3>
			</div>
		  <StaticImage
		  	// src='./images/svg/programmer-hero.png'
		// idk why it doesn't work with gatsby-image from gatsby config file
		  	src='../../assets/images/programmer-hero.png'
			className='hidden lg:block'
			alt='programmer'
			placeholder="blurred"
			width={400}
			height={400}
			/>
		</section>
	  </div>
  )
}

export default Hero
