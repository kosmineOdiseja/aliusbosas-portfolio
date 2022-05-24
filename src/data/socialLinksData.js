import React from 'react';
import { AiFillGithub } from 'react-icons/ai';
import { AiFillFacebook } from 'react-icons/ai';
import { AiFillTwitterSquare } from 'react-icons/ai';
import { AiFillLinkedin } from 'react-icons/ai';

const social = [
	  {
		  name: "facebook",
		  link: "https://www.facebook.com/aliusbosas/",
		  target: "facebookWindow", 
		  icon: <AiFillFacebook className='fill-white w-8 h-9 mx-6 hover:w-10 hover:h-11 hover:fill-yellow-200'/>
	  },
	  {
		  name: "twitter",
		  link: "https://twitter.com/AliusBosas/",
		  target: "twitterWindow", 
		  icon: <AiFillTwitterSquare className='fill-white w-8 h-9 mx-6 hover:w-10 hover:h-11 hover:fill-yellow-200 '/>
	  },
	  {
		  name: "instagram",
		  link: "https://www.github.com/kosimineOdiseja/",
		  target: "githubWindow",
		  icon:	<AiFillGithub className='fill-white w-8 h-9 mx-6 hover:w-10 hover:h-11 hover:fill-yellow-200'/>
	  },
	  {
		  name: "linkedin",
		  link: "https://www.linkedin.com/alius-bosas-6781b5189",
		  target: "linkedinWindow",
		  icon: <AiFillLinkedin className='fill-white w-8 h-9 p mx-6 hover:w-10 hover:h-11 hover:fill-yellow-200' />
	  }
  ];

  export default social;