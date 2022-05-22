import React from 'react'
import { StaticImage } from "gatsby-plugin-image"

const Hero = () => {

  return (

	  <div className='bg-indigo-900 h-screen items-center flex  justify-center' >
	  	<section className='container flex flex-row gap-8 w-auto h-auto'>
			<div className='flex justify-center lg items-start gap-5 flex-col '>
				<h1 className='text-lg text-green-400 xl:text-lg md:text-xl '> Sveiki, aš esu </h1>
				<h2 className='text-5xl text-yellow-300 font-semibold xl:text-4xl md:text-xl'> Alius Bosas </h2>
				<code className='text-3xl text-yellow-400 xl:text-2xl lg:text-md md:text-xl '> Aš noriu padėti Jums augti </code> 
				<h3 className='text-9xl text-green-300 font-bold xl:text-3xl lg:text-3xl md:text-xl sm:text-lg'> Front-end programuotojo pozicijoje! </h3>
			</div>
		  <StaticImage
		  	src='../../assets/images/programmer-hero.png'
			className='flex-1 '
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
