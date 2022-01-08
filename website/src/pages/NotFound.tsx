import { Link as RouterLink } from 'react-router-dom'

import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import Stack from '@mui/material/Stack'

import ArrowBackIcon from '@mui/icons-material/ArrowBack'

import Page from '../components/Page'

const NotFound = () => {
  return (
    <Page title="Page not found">
      <Container>
        <Box
          textAlign="center"
          display="flex"
          sx={{ height: 'calc(100vh - 80px)' }}
          alignItems="center"
          justifyContent="center"
        >
          <Stack>
            <Typography variant="h3">Oops</Typography>
            <Typography variant="h6">Page not found</Typography>
            <Button sx={{ mt: 3 }} variant="outlined" startIcon={<ArrowBackIcon />} to="/" component={RouterLink}>
              Back to Home
            </Button>
          </Stack>
        </Box>
      </Container>
    </Page>
  )
}

export default NotFound
