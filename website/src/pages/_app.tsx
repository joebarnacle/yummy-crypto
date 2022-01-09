import type { AppProps } from 'next/app'
import { SnackbarProvider } from 'notistack'

import Fab from '@mui/material/Fab'
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp'

import { CssBaseline } from '@mui/material'
import { createTheme, ThemeProvider } from '@mui/material/styles'

import Header from '../components/Header'
import Footer from '../components/Footer'
import ScrollToTop from '../components/ScrollToTop'
import ResetScroll from '../components/ResetScroll'

import '../styles/globals.css'

const theme = createTheme({
  palette: {
    background: {
      default: '#f8f9fb',
    },
    primary: {
      main: '#0b0f27',
    },
    secondary: {
      main: '#f47e14',
    },
  },
})

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <ResetScroll />
        <SnackbarProvider maxSnack={3}>
          <Header />
          <Component {...pageProps} />
          <ScrollToTop>
            <Fab color="primary" size="medium" aria-label="scroll back to top">
              <KeyboardArrowUpIcon />
            </Fab>
          </ScrollToTop>
          <Footer />
        </SnackbarProvider>
      </ThemeProvider>
    </>
  )
}

export default MyApp
