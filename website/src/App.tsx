import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import { SnackbarProvider } from 'notistack'

import { CssBaseline } from '@mui/material'
import { createTheme, ThemeProvider } from '@mui/material/styles'

import Box from '@mui/material/Box'
import Fab from '@mui/material/Fab'
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp'

import Header from './components/Header'
import Footer from './components/Footer'
import ScrollToTop from './components/ScrollToTop'
import ResetScroll from './components/ResetScroll'

import NotFound from './pages/NotFound'
import Home from './pages/Home'
import Community from './pages/Community'
import NFTs from './pages/NFTs'
import HowToBuy from './pages/guides/HowToBuy'
import HowToMigrate from './pages/guides/HowToMigrate'

import './App.css'

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

function App() {
  return (
    <>
      <CssBaseline />
      <ThemeProvider theme={theme}>
        <Router>
          <ResetScroll />
          <SnackbarProvider maxSnack={3}>
            <Header />
            <Box component="main">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/community" element={<Community />} />
                <Route path="/nfts" element={<NFTs />} />
                <Route path="/guides/how-to-buy" element={<HowToBuy />} />
                <Route path="/guides/how-to-migrate" element={<HowToMigrate />} />
                <Route element={<NotFound />} />
              </Routes>
              <ScrollToTop>
                <Fab color="primary" size="medium" aria-label="scroll back to top">
                  <KeyboardArrowUpIcon />
                </Fab>
              </ScrollToTop>
            </Box>
            <Footer />
          </SnackbarProvider>
        </Router>
      </ThemeProvider>
    </>
  )
}

export default App
