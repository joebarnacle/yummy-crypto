import React from 'react'
import { Helmet, HelmetProps } from 'react-helmet'

interface PageProps {
  title?: string
  metaTags?: HelmetProps['children']
}

const Page: React.FC<PageProps> = ({ children, metaTags, title }) => {
  return (
    <>
      <Helmet>
        <title>{title ? `${title} - ` : ''}Yummy Crypto</title>
        {metaTags}
      </Helmet>
      {children}
    </>
  )
}

export default Page
