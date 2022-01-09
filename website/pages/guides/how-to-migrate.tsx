import type { NextPage } from 'next'
import Image from 'next/image'

import Alert from '@mui/material/Alert'
import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import Divider from '@mui/material/Divider'
import Typography from '@mui/material/Typography'
import Stack from '@mui/material/Stack'

import ContractBlock from '../../src/components/ContractBlock'
import Steps, { StepsProps } from '../../src/components/Steps'
import ResourceVideo from '../../src/components/ResourceVideo'
import Page from '../../src/components/Page'

import migrationQRCode from '../../public/images/migration-qrcode.jpg'

const steps: StepsProps['steps'] = [
  {
    primary: 'Send your v1 tokens',
    secondary: (
      <>
        <Typography variant="body2" gutterBottom>
          Send your Yummy v1 tokens to
          <ContractBlock value="0x1F94DEB7CD97E2aC1A72dd8c9fbf177625aa240B" />
        </Typography>
        <Box mt={2} mb={2}>
          <Image src={migrationQRCode} alt="qr code for yummy address" />
        </Box>
        <Alert severity="warning">
          DO NOT send <strong>YummyMig</strong> tokens to this address!
        </Alert>
      </>
    ),
  },
  {
    primary: 'Wait 12-24 hours',
    secondary: 'The airdrop is done only every 12-24 hours',
  },
  {
    primary: 'Add the v2 token address to your wallet',
    secondary: (
      <Typography variant="body2" gutterBottom>
        Add the new v2 contract to your wallet so that you will see your new tokens
        <ContractBlock value="0xB003C68917BaB76812797d1b8056822f48E2e4fe" />
      </Typography>
    ),
  },
]

const HowToMigrate: NextPage = () => {
  return (
    <Page title="Guides | How to migrate">
      <Container sx={{ mt: { xs: 2, md: 5 } }}>
        <Stack sx={{ mb: 5 }} gap={1}>
          <Alert severity="info">The first migration phase to Yummy V2 is now concluded.</Alert>
          <Alert severity="warning">
            Yummy V1 bought after Sept 19th 4:30pm EDT (20:30 UTC) is <strong>NOT</strong> eligible for conversion to V2
          </Alert>
        </Stack>
        <Typography variant="h4" sx={{ fontWeight: 600 }}>
          How to migrate v1 to v2 tokens
        </Typography>
        <Typography variant="body2">
          Yummy Token has migrated from its v1 contract to a new v2 contract. This page should help guide you to migrate
          your tokens.
        </Typography>

        <Steps steps={steps} />
      </Container>
      <Divider sx={{ mt: 2, mb: 5 }} />
      <Container sx={{ mb: 5 }}>
        <Typography variant="h5" gutterBottom>
          Resources
        </Typography>
        <ResourceVideo src="https://www.youtube.com/embed/9_VbPKRnPUg" />
      </Container>
    </Page>
  )
}

export default HowToMigrate
