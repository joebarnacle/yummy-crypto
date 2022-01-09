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
      </Head>
      <Content>{children}</Content>
    </>
  )
}

export default Page
