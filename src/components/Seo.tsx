import React from 'react'
import { graphql, useStaticQuery } from 'gatsby' 
import { Helmet } from 'react-helmet'

interface SeoProps {
	  title: string
	  description?: string
	  lang?: string
}

const query = graphql`
  {
    site {
      siteMetadata {
        description
        siteUrl
        title
      }
    }
  }
`
const Seo = ( { title, description }: SeoProps ) => {

const { site } = useStaticQuery(query)
const metaDescription = description || site.siteMetadata.description

  return (
	<Helmet 
		htmlAttributes={ { lang: 'lt' } }
		title={`${title} | ${site.siteMetadata.title}`} 
		meta={[{name:`description`, content: metaDescription }]}
	>
	</Helmet>
  )
}

export default Seo