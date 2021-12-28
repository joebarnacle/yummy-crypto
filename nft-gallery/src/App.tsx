import { useLayoutEffect, useMemo, useState, createContext } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';

import useMediaQuery from '@mui/material/useMediaQuery';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Fab from '@mui/material/Fab';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';

import { ColorModeContext } from './hooks/UseColorMode';
import ScrollToTop from './components/ScrollToTop';

import HomePage from './pages/Home';
import WalletPage from './pages/Wallet';
import TokenPage from './pages/Token';

function App() {
  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');
  const [mode, setMode] = useState<'dark' | 'light'>(prefersDarkMode ? 'dark' : 'light');
  const colorMode = useMemo(
    () => ({
      toggleColorMode: () => {
        setMode(prevMode => (prevMode === 'light' ? 'dark' : 'light'));
      },
    }),
    []
  );

  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode,
          primary: {
            main: mode === 'dark' ? '#ffffff' : 'rgb(11, 15, 39)',
            contrastText: '#ffffff',
          },
        },
      }),
    [mode]
  );

  useLayoutEffect(() => {
    setMode(prefersDarkMode ? 'dark' : 'light');
  }, [prefersDarkMode]);

  return (
    <HelmetProvider>
      <ColorModeContext.Provider value={colorMode}>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Router>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/token/:tokenId" element={<TokenPage />} />
              <Route path="/wallet/:walletId" element={<WalletPage />} />
            </Routes>
            <ScrollToTop>
              <Fab color="secondary" size="medium" aria-label="scroll back to top">
                <KeyboardArrowUpIcon />
              </Fab>
            </ScrollToTop>
          </Router>
        </ThemeProvider>
      </ColorModeContext.Provider>
    </HelmetProvider>
  );
}

export default App;
