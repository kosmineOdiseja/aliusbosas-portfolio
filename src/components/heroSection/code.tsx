import React from 'react' 
import { StaticImage } from 'gatsby-plugin-image'

 const HeroSection = () => {
	 return (
	<section className='bg-indigo-900 h-screen justify-items-center items-center flex'>  
		<div className='container max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 flex m-0 p-0 justify-items-center items-center '>
			<StaticImage
				src='../../assets/images/programmer-hero.png'
				className='flex-1 '
				alt='programmer'
				placeholder="blurred"
			/>
			<div> 
				<div className='bg-transparant'>
					<div className=''> // My self introdcution </div>
					<div className=''> const Alius = {'{'} </div>
					<div className=''> 	name: 'Alius', </div>
					<div className=''>  lastName: 'Bosas', </div>
					<div className=''> 	age: '35', </div>	
					<div className=''>  country: 'Lietuva'</div>
					<div className=''>  city: 'Kaunas'</div>
					<div className=''> 	type: 'front-end' </div>
					<div className=''>  level: 'junior' </div>
					<div className=''> {'}'} </div>
				</div>

			</div>

		</div>
	</section>
	 )
}

export default HeroSection