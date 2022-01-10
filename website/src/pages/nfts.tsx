import type { NextPage } from 'next'
import Image from 'next/image'

import Alert from '@mui/material/Alert'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import ImageList from '@mui/material/ImageList'
import ImageListItem from '@mui/material/ImageListItem'
import Accordion from '@mui/material/Accordion'
import AccordionSummary from '@mui/material/AccordionSummary'
import AccordionDetails from '@mui/material/AccordionDetails'
import Divider from '@mui/material/Divider'

import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import OpenInNewIcon from '@mui/icons-material/OpenInNew'

import useMediaQuery from '@mui/material/useMediaQuery'

import Page from '../components/Page'

const itemData = Array(8)
  .fill(0)
  .map((_, index) => ({
    img: `/images/nfts/nft-preview-${index + 1}.png`,
    title: `NFT preview ${index + 1}`,
  }))

const NFTs: NextPage = () => {
  const sm = useMediaQuery(`@media (min-width:600px)`)
  const md = useMediaQuery(`@media (min-width:900px)`)

  const getResponsiveCols = () => {
    if (md) {
      return 4
    } else if (sm) {
      return 3
    }

    return 2
  }

  return (
    <Page title="NFTs">
      <Container sx={{ mt: { xs: 4, md: 10 }, mb: 5 }}>
        <Typography variant="h4" sx={{ fontWeight: 600, mb: 2 }}>
          Yummy NFTs
        </Typography>
        <Typography variant="body2">
          Yummy Dogs are 10,000 cute NFTs created from hundreds of possible traits. Each NFT is proveably unique, with
          traits randomly assigned at mint. Each Yummy Dog grants its owner access to the Yummy ecosystem, including
          educational content, additional staking rewards, and more!
        </Typography>

        <Alert icon={false} severity="info" sx={{ mt: 5, mb: 5 }}>
          <ul>
            <li>10,000 NFTs Limited Minting</li>
            <li>Discounts on Yummy Academy</li>
            <li>Yummy Staking Boosts</li>
            <li>Tax Free Yummy</li>
            <li>Growth Fund Yield for life</li>
          </ul>
        </Alert>

        <Box textAlign="center">
          <Button
            endIcon={<OpenInNewIcon />}
            variant="contained"
            href="https://yummy-crypto-nft.com/"
            component="a"
            target="_blank"
            rel="noopener"
          >
            Mint here
          </Button>
        </Box>

        <Divider flexItem sx={{ mt: 5, mb: 5 }} />

        <Box mb={10}>
          <Typography textAlign="center" variant="h5" sx={{ fontWeight: 600 }} gutterBottom>
            FAQs
          </Typography>
          <Accordion>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <Typography>What are Yummy Dogs</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Yummy Dogs are 10,000 cute NFTs with created from hundreds of possible traits. Each NFT is proveably
                unique, with traits randomly assigned at mint.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <Typography>What are the utility of Yummy Dogs?</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <ul>
                <li>
                  Each Yummy Dog held gives you discount 10% in Yummy Academy. 10 gets you FREE Academy as long as you
                  hold the NFTs.
                </li>
                <li>
                  Each Yummy Dog (up to 100) gives you more in the Yummy Staking Pools for a max of 100%. Example:
                  staking pool is yielding 140%. If you have 100 NFTs, yield is 280% instead (or 2x).
                </li>
                <li>
                  Each Yummy Dog held gives you discount 10% in Yummy Academy. 10 gets you FREE Academy as long as you
                  hold the NFTs.
                </li>
                <li>
                  Anyone with 50 Yummy Dog NFTs or more can buy up to $3,000 a month of Yummy Token tax free. At 100
                  Yummy NFTs that bonus is tripled to $9,000.
                </li>
                <li>
                  Whoever reaches 1000 NFTs first can burn them to create the Hand of Thanos, a one-of-a-kind NFT that
                  cannot be obtained through any other method. The Hand of Thanos gives you all above benefits PLUS 0.2%
                  of Thanos Growth Fund yield for LIFE.
                </li>
              </ul>
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <Typography>How will Yummy Dogs be launched?</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Join our Telegram or follow us on Twitter for updates. All Yummy Dog minting will be done at TBA.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <Typography>How much does each Yummy Dog cost?</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>0.2 BNB.</Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <Typography>How many Yummy Dogs can I mint?</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                You can mint up to 50 per transaction. There is no limit to the number of Yummy Dogs you can own.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <Typography>Can I buy on mobile/use Metamask/TrustWallet?</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Yes! The minting process on works with all of them. You can buy on your phone, tablet, or computer. Any
                device with a valid BSC wallet will work.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <Typography>Are there any special Yummy Dogs?</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Yes! There are <strong>8</strong> Yummy Team admin NFTs, including our CEO Joe Foot, and COO Adam.
                Additionally, there are <strong>10</strong> community member NFTs, representing some notable users from
                our telegram. These <strong>18</strong> NFTs have attributes not found in any of the other NFTs.
              </Typography>
              <Typography>Finally, there is a single Alpha Yummy Dog NFT, the most exciting NFT in the set.</Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <Typography>What is the Alpha Yummy Dog?</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Whoever mints the Alpha Yummy Dog will immediately receive $10,000 in BNB, plus an all expenses paid
                trip to Las Vegas for the 1st Yummy Conference Event. When they arrive in Las Vegas, they will receive a
                $5,000 Visa Gift Card.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <Typography>Can I win Yummy Dogs in a giveaway?</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>Yes! We have reserved some Yummy Dog NFTs for giveaways.</Typography>
            </AccordionDetails>
          </Accordion>
        </Box>

        <Box mt={10} mb={10}>
          <Typography textAlign="center" variant="h5" sx={{ fontWeight: 600 }}>
            Check out a preview of the gallery!
          </Typography>
          <ImageList cols={getResponsiveCols()}>
            {itemData.map(item => (
              <ImageListItem key={item.img}>
                <Image src={`${item.img}`} alt={item.title} loading="lazy" height={256} width={256} />
              </ImageListItem>
            ))}
          </ImageList>
        </Box>
      </Container>
    </Page>
  )
}

export default NFTs
