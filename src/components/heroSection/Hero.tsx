import React from 'react'
import { StaticImage } from "gatsby-plugin-image"

const Hero = () => {

  return (
	  <div className='bg-indigo-900 h-screen flex justify-center' >
	  	<section className='container lg w-full	h-auto flex flex-row items-center justify-start '>
			<div className='flex justify-center container lg items-start gap-5 flex-col mx-0 my-auto'>
				<h1 className='text-lg text-green-400 '> Sveiki, aš esu </h1>
				<h2 className='text-5xl text-yellow-500 font-semibold '> Alius Bosas </h2>
				<code className='text-3xl text-green-600'> Aš noriu užaugti su Jumis </code> 
			</div>
		  <StaticImage
		  	src='../../assets/images/programmer-hero.png'
			className='flex-1 '
			alt='programmer'
			placeholder="blurred"
			/>
		</section>
	  </div>
  )
}

export default Hero
