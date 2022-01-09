import type { NextPage, GetStaticProps } from 'next'
import RouterLink from 'next/link'

import { createClient } from 'contentful'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'

import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import Divider from '@mui/material/Divider'
import Typography from '@mui/material/Typography'
import Link from '@mui/material/Link'

import Page from '../components/Page'

interface NewsProps {
  items: any[]
}

const News: NextPage<NewsProps> = ({ items }) => {
  return (
    <Page title="News">
      <Container>
        {items.map((item, index) => (
          <Box key={index} mt={5}>
            <Box mb={2}>
              <Typography variant="body2">Published · Dec 27, 2021</Typography>
            </Box>
            <Typography variant="h4" sx={{ flex: 1, fontWeight: 600 }}>
              {item.fields.title}
            </Typography>

            <Box sx={{ maxHeight: 150, overflow: 'hidden', textOverflow: 'ellipsis', mb: 3 }}>
              {documentToReactComponents(item.fields.content)}
            </Box>
            <RouterLink href={`/article/${item.fields.slug}`}>Read more</RouterLink>

            {index < items.length - 1 && <Divider sx={{ mt: 5 }} />}
          </Box>
        ))}
      </Container>
    </Page>
  )
}

const client = createClient({
  space: process.env.CONTENTFUL_SPACE_ID || '',
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN || '',
})

export const getStaticProps: GetStaticProps = async () => {
  const { items } = await client.getEntries({
    content_type: 'news-item',
    limit: 10,
    include: 10,
  })

  return {
    props: {
      items,
    },
  }
}

export default News
