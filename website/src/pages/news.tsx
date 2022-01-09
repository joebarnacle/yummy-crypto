import type { NextPage, GetStaticProps } from 'next'
import { createClient } from 'contentful'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'

import Container from '@mui/material/Container'

import Page from '../components/Page'

interface NewsProps {
  items: any[]
}

const News: NextPage<NewsProps> = ({ items }) => {
  return (
    <Page title="News">
      <Container>
        <h1>News</h1>
        <ul>
          {items.map((item, index) => (
            <li key={index}>
              <h3>{item.fields.title}</h3>
              {documentToReactComponents(item.fields.content)}
            </li>
          ))}
        </ul>
      </Container>
    </Page>
  )
}

const client = createClient({
  space: process.env.CONTENTFUL_SPACE_ID || '',
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN || '',
})

export const getStaticProps: GetStaticProps = async () => {
  const { items } = await client.getEntries({ content_type: 'news-item' })

  return {
    props: {
      items,
    },
  }
}

export default News
