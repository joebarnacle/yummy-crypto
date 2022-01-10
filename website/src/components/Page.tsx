import React from 'react'
import Head from 'next/head'

import styled from '@emotion/styled'

const Content = styled.div`
  padding-bottom: 48px;
`

interface PageProps {
  title?: string
}

const Page: React.FC<PageProps> = ({ children, title }) => {
  return (
    <>
      <Head>
        <title>{title ? `${title} - ` : ''}Yummy Crypto</title>
        <meta name="description" content="Returning value to holders via Growth Fund" />

        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        <link rel="apple-touch-icon" href="/logo192.png" />
        <link rel="manifest" href="/manifest.json" />
      </Head>
      <Content>{children}</Content>
    </>
  )
}

export default Page
