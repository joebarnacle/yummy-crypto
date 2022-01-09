import type { NextPage, GetStaticProps, GetStaticPaths } from 'next'

import { createClient } from 'contentful'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'

import Box from '@mui/material/Box'
import Container from '@mui/material/Container'

import Typography from '@mui/material/Typography'

import Page from '../../components/Page'

import { formatDate } from '../../utils'

interface Article {
  title: string
  slug: string
  content: any
  author: any
}

interface ArticleProps {
  item: Article
  createdAt: string
}

const Article: NextPage<ArticleProps> = ({ item, createdAt }) => {
  return (
    <Page title={item.title}>
      <Container sx={{ mt: { xs: 4, md: 10 }, mb: 5 }}>
        <Box mb={2}>
          <Typography variant="body2">Published · {createdAt}</Typography>
        </Box>
        <Typography variant="h4" sx={{ flex: 1, fontWeight: 600 }}>
          {item.title}
        </Typography>

        {documentToReactComponents(item.content)}
      </Container>
    </Page>
  )
}

const client = createClient({
  space: process.env.CONTENTFUL_SPACE_ID || '',
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN || '',
})

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { items } = await client.getEntries<Article>({
    content_type: 'news-item',
    'fields.slug': params?.slug,
  })

  return {
    props: {
      item: items[0].fields,
      createdAt: formatDate(items[0].sys.createdAt),
    },
  }
}

export const getStaticPaths: GetStaticPaths = async () => {
  const { items } = await client.getEntries<Article>({
    content_type: 'news-item',
  })

  const paths = items.map(item => {
    return {
      params: {
        slug: item.fields.slug,
      },
    }
  })

  return {
    paths,
    fallback: false,
  }
}

export default Article
