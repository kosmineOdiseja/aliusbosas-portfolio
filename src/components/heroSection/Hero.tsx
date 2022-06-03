import React from 'react'
import { StaticImage } from "gatsby-plugin-image"

const Hero = () => {

  return (

	  <div className='bg-nightsky ' >
	  	<section className=' '>
			<div className='flex flex-col gap-3 relative container h-screen mx-auto p-6 items-start justify-center'>
				<code className='text-green'> Sveiki, aš esu </code>
				<h2 className='text-light-text font-semibold text-5xl'> Alius Bosas. </h2>
				<code className=' text-darker-text font-semibold text-5xl'> Aš noriu Jums padėti augti</code> 
				<h3 className='text-green font-normal text-3xl'> Front-end programuotojo pozicijoje! </h3>
				<div className='text-light-text'>Mano tikslas - Full-Stack developer. Šiuo metu koncentruojuosi ties Front-End technologijomis: <a href="https://reactjs.org/" className='text-green' target='ReactWindow' > React biblioteka </a>, <a href="https://www.gatsbyjs.com/" className='text-green' target='GatsbyWindow'>Gatsby karkasu.</a> Vėliau prijungsiu Back-End technologijas.</div>
				{/* <button className='text-light-text border-2 rounded px-5 py-2'>Daugiau</button> */}
			</div>
		  {/* <StaticImage
		  	// src='./images/svg/programmer-hero.png'
			  //I should use getImage helper? 
		// idk why it doesn't work with gatsby-image from gatsby config file
		  	src='../../assets/images/programmer-hero.png'
			className='hidden lg:block'
			alt='programmer'
			placeholder="blurred"
			width={400}
			height={400}
			/> */}
		</section>
	  </div>
  )
}

export default Hero
