import type { NextPage } from 'next'

import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'

import Divider from '@mui/material/Divider'

import ContractBlock from '../../src/components/ContractBlock'
import Steps, { StepsProps } from '../../src/components/Steps'
import ResourceVideo from '../../src/components/ResourceVideo'
import Page from '../../src/components/Page'

const steps: StepsProps['steps'] = [
  {
    primary: 'Download MetaMask or use an existing wallet',
    secondary:
      'Head to metamask.io and download their wallet to your Smart Phone or Chrome/Firefox browser. (This is where your Yummy Coins will be securely stored)',
  },
  {
    primary: 'Send BNB to your wallet',
    secondary:
      'You can buy BNB Smart chain directly on MetaMask or transfer it to your MetaMask Wallet from exchanges like Coinbase, Binance, etc.',
  },
  {
    primary: 'Connect your wallet to Pancake Swap',
    secondary: "Access your wallet to Pancake Swap by clicking 'Connect to a wallet' and selecting MetaMask.",
  },
  {
    primary: 'Add YUMMY token contract to Pancake Swap',
    secondary: (
      <Typography variant="body2" gutterBottom>
        Click on the “Select a Currency” button, and then enter the $YUMMY token contract:
        <ContractBlock value="0xB003C68917BaB76812797d1b8056822f48E2e4fe" />
      </Typography>
    ),
  },
  {
    primary: 'Adjust slippage',
    secondary: 'Click “Settings” at the top right, and adjust your slippage to 12.',
  },
  {
    primary: 'Swap BNB for YUMMY',
    secondary: (
      <Typography variant="body2" sx={{ color: 'text.secondary' }}>
        <strong>Important:</strong> You&apos;ll be charged separately for Gas Fees, which is usually a single BNB fee
        that is under (or around) a dollar, so it&apos;s helpful to always keep at least a few dollars in BNB at all
        times.
      </Typography>
    ),
  },
]

const HowToBuy: NextPage = () => {
  return (
    <Page title="Guides | How to buy">
      <Container sx={{ mt: { xs: 4, md: 10 } }}>
        <Typography variant="h4" sx={{ fontWeight: 600, mb: 2 }}>
          How to Buy
        </Typography>
        <Typography variant="body2">
          Yummy Token can be easily bought and sold through <strong>Pancake Swap</strong>, but can also be found on{' '}
          <strong>Bitmart</strong> and <strong>SokuSwap</strong>.
        </Typography>

        <Typography variant="h5" sx={{ mt: { xs: 2, md: 5 } }}>
          Quick Start
        </Typography>
        <Typography variant="body2">
          The below steps offer a quick guide for getting started with buying Yummy.
        </Typography>
        <Steps steps={steps} />
      </Container>
      <Divider sx={{ mt: 2, mb: 5 }} />
      <Container sx={{ mb: 5 }}>
        <Typography variant="h5" gutterBottom>
          Resources
        </Typography>
        <ResourceVideo src="https://www.youtube.com/embed/bZup7IK7qrM" />
      </Container>
    </Page>
  )
}

export default HowToBuy
