import type { NextPage, GetStaticProps } from 'next'
import RouterLink from 'next/link'
import Image from 'next/image'

import CountUp from 'react-countup'

import useMediaQuery from '@mui/material/useMediaQuery'

import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Container from '@mui/material/Container'
import Grid from '@mui/material/Grid'
import Paper from '@mui/material/Paper'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import ImageList from '@mui/material/ImageList'
import ImageListItem from '@mui/material/ImageListItem'

import yummyLogo from '../../public/images/yummy-logo-small.svg'
import pancakeSwapLogo from '../../public/images/pancake-swap-logo.png'
import bitmartLogo from '../../public/images/bitmart-logo.png'
import sokuSwapLogo from '../../public/images/soku-swap-logo.png'

import YouTubeCard from '../components/YouTubeCard'
import ContrastButton from '../components/ContrastButton'
import HeroHeader from '../components/HeroHeader'
import Page from '../components/Page'

import contentfulClient from '../lib/ContentfulClient'

import { FeaturedNewsItem, Partner } from '../interfaces'

interface HomePageProps {
  partners: any[]
  featuredNewsItems: any[]
}

const HomePage: NextPage<HomePageProps> = ({ featuredNewsItems, partners }) => {
  const isDesktop = useMediaQuery(`@media (min-width:600px)`)

  return (
    <Page title="Home">
      <HeroHeader>
        <Container>
          <Grid container spacing={{ xs: 3, md: 24 }}>
            <Grid item xs={12} md={8} sx={{ textAlign: { xs: 'center', md: 'left' } }}>
              <Box mb={3}>
                <Typography sx={{ fontSize: { xs: '2.2rem', md: '3rem' } }} variant="h3">
                  Together we&apos;re <strong>changing lives</strong> across the globe
                </Typography>
              </Box>
              <Typography variant="subtitle2">
                Yummy Crypto is a project launched on May 1st with a clear vision to deliver value to holders via{' '}
                <strong>Growth Fund</strong> while providing contributions to help solve some of the world&apos;s most
                pressing issues.
              </Typography>
              <Box mt={4}>
                <Stack direction={{ xs: 'column', md: 'row' }} gap={2}>
                  <Button disableElevation variant="contained" sx={{ bgcolor: 'secondary.main' }}>
                    <RouterLink href="/guides/how-to-buy">How to Buy</RouterLink>
                  </Button>
                  <ContrastButton
                    component="a"
                    href="/resources/yummy-whitepaper-v2.pdf"
                    target="_blank"
                    variant="outlined"
                    sx={{ textAlign: 'center' }}
                  >
                    Read our whitepaper
                  </ContrastButton>
                </Stack>
              </Box>
            </Grid>
            <Grid sx={{ display: { xs: 'none', md: 'block' } }} item xs={12} md={4}>
              <Stack spacing={1}>
                <ContrastButton
                  component="a"
                  href="https://pancakeswap.finance/swap?outputCurrency=0xb003c68917bab76812797d1b8056822f48e2e4fe"
                  target="_blank"
                  rel="noopener"
                  startIcon={<Image width={24} height={24} alt="pancake swap logo" src={pancakeSwapLogo} />}
                  sx={{ justifyContent: 'flex-start' }}
                >
                  Buy on PancakeSwap
                </ContrastButton>
                <ContrastButton
                  component="a"
                  href="https://www.bitmart.com/trade/en?symbol=YUMMY_USDT"
                  target="_blank"
                  rel="noopener"
                  startIcon={<Image width={24} height={24} alt="bitmart logo" src={bitmartLogo} />}
                  sx={{ justifyContent: 'flex-start' }}
                >
                  Buy on Bitmart
                </ContrastButton>

                <ContrastButton
                  component="a"
                  href="https://app.sokuswap.finance/bsc/#/swap?inputCurrency=0xB8c77482e45F1F44dE1745F52C74426C631bDD52?&outputCurrency=0xB003C68917BaB76812797d1b8056822f48E2e4fe"
                  target="_blank"
                  rel="noopener"
                  startIcon={<Image width={24} height={24} alt="soku swap logo" src={sokuSwapLogo} />}
                  sx={{ justifyContent: 'flex-start' }}
                >
                  Buy on SokuSwap
                </ContrastButton>
              </Stack>
            </Grid>
          </Grid>
        </Container>
      </HeroHeader>

      <section className="odd-section">
        <Container>
          <Typography variant="h4" gutterBottom textAlign={{ xs: 'center', md: 'left' }} sx={{ fontWeight: 600 }}>
            Latest News
          </Typography>
          <Stack direction={{ md: 'row', xs: 'column' }} spacing={1}>
            {featuredNewsItems.map(item => (
              <YouTubeCard
                key={item.fields.youTubeVideoId}
                videoId={item.fields.youTubeVideoId}
                title={item.fields.title}
                description={item.fields.description}
                shareUrl={item.fields.shareUrl}
              />
            ))}
          </Stack>
          <Box display="flex" justifyContent="center" mt={5}>
            <Button variant="outlined">
              <RouterLink href="/news">Check out our official news articles</RouterLink>
            </Button>
          </Box>
        </Container>
      </section>
      <section>
        <Container>
          <Grid container spacing={8}>
            <Grid item xs={12} md={6}>
              <Typography variant="h4" gutterBottom textAlign={{ xs: 'center', md: 'left' }} sx={{ fontWeight: 600 }}>
                About the project
              </Typography>
              <Stack spacing={3}>
                <Typography>
                  Within our short history, we&apos;ve already donated over $1.1M, and 35% of the total token supply has
                  been burned as a method to return value to our holders. And that&apos;s just the start of it!
                </Typography>
                <Typography>
                  We recently introduced our <strong>Growth Fund</strong> to further maximize Yummy holders&apos;
                  returns through daily buybacks and burns. In addition, we have secured partnerships with prominent
                  industry players such as Bare Knuckle FC to further advance our social exposure within the crypto
                  space and have much more in the works!
                </Typography>
              </Stack>
            </Grid>
            <Grid item xs={12} md={6}>
              <Box display="flex" justifyContent="center">
                <Image
                  className="floating-image"
                  height={isDesktop ? 256 : 156}
                  width={isDesktop ? 256 : 156}
                  src={yummyLogo}
                  alt="yummy logo"
                />
              </Box>
            </Grid>
          </Grid>
        </Container>
      </section>
      <section className="odd-section">
        <Container>
          <Stack direction={{ xs: 'column', sm: 'row' }} spacing={3}>
            <div style={{ flex: 1, textAlign: 'center' }}>
              <Typography variant="h4">
                <CountUp prefix="$" separator="," start={0} end={1125000} duration={0.8} />
              </Typography>
              <Typography
                variant="h5"
                sx={{
                  borderBottom: '5px solid',
                  borderBottomColor: 'primary.main',
                  borderRadius: 3,
                  mb: 1,
                  pb: 1,
                }}
              >
                DONATED
              </Typography>
              <div>Total of our (blockchain verified) donations to Binance Lunch For Children</div>
            </div>

            <div style={{ flex: 1, textAlign: 'center' }}>
              <Typography variant="h4">
                <CountUp prefix="$" separator="," start={0} end={1150000} duration={0.8} />
              </Typography>
              <Typography
                variant="h5"
                sx={{
                  borderBottom: '5px solid',
                  borderBottomColor: 'primary.main',
                  borderRadius: 3,
                  mb: 1,
                  pb: 1,
                }}
              >
                GROWTH FUND
              </Typography>
              <div>The Growth Fund is a vital part of the V2 Ecosystem that burns Yummy daily.</div>
            </div>
            <div style={{ flex: 1, textAlign: 'center' }}>
              <Typography variant="h4">
                <CountUp separator="," start={0} end={75000} duration={0.8} />+
              </Typography>
              <Typography
                variant="h5"
                sx={{
                  borderBottom: '5px solid',
                  borderBottomColor: 'primary.main',
                  borderRadius: 3,
                  mb: 1,
                  pb: 1,
                }}
              >
                HOLDERS
              </Typography>
              <div>75,000 holders who have decided to join us in our mission to make the World a better place.</div>
            </div>
          </Stack>
        </Container>
      </section>
      <section>
        <Container>
          <Typography variant="h4" gutterBottom textAlign={{ xs: 'center', md: 'left' }} sx={{ fontWeight: 600 }}>
            About the team
          </Typography>
          <Grid container spacing={{ md: 24, xs: 5 }}>
            <Grid item xs={12} md={8}>
              <Stack spacing={3} flex={1}>
                <Typography>
                  Our leadership team is thoroughly passionate about the long term growth of Yummy. We work hard to have
                  a positive impact in the World while also maximizing the returns to our Token Holders through
                  exceptional tokenomics.
                </Typography>
                <Typography>
                  We are placing an emphasis on complete transparency, sustainable strategic growth decisions and
                  innovative marketing campaigns that will ensure Yummy will reach its maximum potential.
                </Typography>
                <Typography>
                  In addition to daily updates throughout our social channels, our leadership is very frequently
                  available on the Yummy Coin Telegram for you to ask questions, give feedback or provide ideas. All are
                  welcome to our Telegram/Discord channels, even non-Yummy holders.
                </Typography>
              </Stack>
            </Grid>
            <Grid item xs={12} md={4}>
              <Box display="flex" justifyContent="center">
                <Image className="floating-image" width={125} height={220} src="/images/sprout.png" alt="yummy logo" />
              </Box>
            </Grid>
          </Grid>
        </Container>
      </section>
      <section className="odd-section">
        <Container>
          <Typography variant="h4" textAlign="center" sx={{ mb: 5, fontWeight: 600 }}>
            Check out our Partners!
          </Typography>
          <Paper sx={{ p: { xs: 0, md: 2 } }} variant={isDesktop ? 'outlined' : undefined} elevation={0}>
            <ImageList cols={isDesktop ? 8 : 2} gap={isDesktop ? 8 : 0} sx={{ m: 0 }}>
              {partners.map(partner => (
                <ImageListItem
                  key={partner.fields.href}
                  component="a"
                  href={partner.fields.href}
                  target="_blank"
                  rel="noopener"
                  sx={{
                    '&:hover img': {
                      transition: 'opacity 0.2s ease',
                      opacity: '0.7',
                    },
                  }}
                >
                  <Box
                    style={{
                      padding: 12,
                      backgroundColor: partner.fields.backgroundColor ?? undefined,
                    }}
                  >
                    <Image
                      objectFit="contain"
                      src={`https:${partner.fields.logo.fields.file.url}`}
                      alt={partner.fields.name}
                      width={132}
                      height={132}
                      loading="lazy"
                    />
                  </Box>
                </ImageListItem>
              ))}
            </ImageList>
          </Paper>
        </Container>
      </section>
    </Page>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const partners = await contentfulClient.getEntries<Partner>({ content_type: 'partner' })
  const featuredNewsItems = await contentfulClient.getEntries<FeaturedNewsItem>({
    content_type: 'featured-news-item',
    limit: 3,
  })

  console.log(featuredNewsItems)

  return {
    props: {
      partners: partners.items,
      featuredNewsItems: featuredNewsItems.items,
    },
  }
}

export default HomePage
