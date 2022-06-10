import React from 'react'
import { StaticImage } from "gatsby-plugin-image"

const Hero = () => {

  return (

	  <div className='bg-nightsky' >
	  	<section className='h-[90vh] tablet:w-9/12 mx-auto flex'>
			<div className='flex flex-col px-4 items-start justify-center gap-3 tablet:gap-4'>
				<code className='text-green text-lg tablet:text-lg'> Sveiki, aš esu </code>
				<h2 className='text-light-text font-semibold text-4xl tablet:text-5xl tablet:font-bold tablet:tracking-wide' > Alius Bosas. </h2>
				<code className='text-darker-text font-semibold text-2xl tablet:text-4xl'> Aš noriu Jums padėti augti</code> 
				<h3 className='text-green font-semibold text-4xl tracking-wide tablet:text-5xl '> Front-end programuotojo pozicijoje! </h3>
				<div className='text-light-text tracking-wide tablet:tracking-wider tablet:text-xl'>Mano tikslas - Full-Stack engineer. Šiuo metu koncentruojuosi ties Front-End technologijomis: <a href="https://reactjs.org/" className='text-green' target='ReactWindow' > React biblioteka </a>, <a href="https://www.gatsbyjs.com/" className='text-green' target='GatsbyWindow'>Gatsby karkasu.</a> Vėliau prijungsiu Back-End technologijas.</div>
			</div>
		</section>
	  </div>
  )
}

export default Hero
