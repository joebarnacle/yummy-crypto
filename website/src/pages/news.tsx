import type { NextPage, GetStaticProps } from 'next'
import RouterLink from 'next/link'

import { documentToReactComponents } from '@contentful/rich-text-react-renderer'

import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import Divider from '@mui/material/Divider'
import Typography from '@mui/material/Typography'

import Page from '../components/Page'
import { formatDate } from '../utils'

import contentfulClient from '../lib/ContentfulClient'

interface NewsPageProps {
  items: any[]
}

const NewsPage: NextPage<NewsPageProps> = ({ items }) => {
  return (
    <Page title="News">
      <Container>
        {items.map((item, index) => (
          <Box key={index} mt={5}>
            <Box mb={2}>
              <Typography variant="body2">Published · {formatDate(item.sys.createdAt)}</Typography>
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

export const getStaticProps: GetStaticProps = async () => {
  const { items } = await contentfulClient.getEntries({
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

export default NewsPage
