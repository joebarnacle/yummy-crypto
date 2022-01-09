import React from 'react'
import Head from 'next/head'

interface PageProps {
  title?: string
}

const Page: React.FC<PageProps> = ({ children, title }) => {
  return (
    <>
      <Head>
        <title>{title ? `${title} - ` : ''}Yummy Crypto</title>
      </Head>
      {children}
    </>
  )
}

export default Page
