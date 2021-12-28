import React from 'react';
import { Link as RouterLink } from 'react-router-dom';

import { useTheme } from '@mui/material/styles';

import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import Chip from '@mui/material/Chip';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Divider from '@mui/material/Divider';

import IconButton from '@mui/material/IconButton';

import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';

import useColorMode from '../hooks/UseColorMode';
import usePancakeSwap from '../hooks/UsePancakeSwap';

const Header: React.FC = ({ children }) => {
  const theme = useTheme();
  const { toggleColorMode } = useColorMode();
  const pcsData = usePancakeSwap();

  return (
    <AppBar position="fixed" sx={{ zIndex: theme => theme.zIndex.drawer + 1 }} color="primary" elevation={0}>
      <Toolbar>
        <RouterLink style={{ display: 'flex', width: 316 }} to="/">
          <img src="/images/yummy-logo-large.svg" height={24} alt="logo" />
        </RouterLink>
        <div style={{ flex: 1 }}>{children}</div>

        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'right', width: 316 }}>
          {pcsData && (
            <Chip
              avatar={<Avatar alt="Yummy logo" src="/images/yummy-logo-small-dark.svg" />}
              label={`$${pcsData?.price.slice(0, 13)}`}
              sx={{ color: 'primary.contrastText' }}
              component="a"
              href="https://dexscreener.com/bsc/0x09ae75e7884f347103dc0f586331611da8b7b824"
              target="_blank"
              rel="noopener noreferrer"
              clickable
            />
          )}

          <IconButton sx={{ ml: 1 }} color="inherit" onClick={toggleColorMode}>
            {theme.palette.mode === 'dark' ? <Brightness7Icon /> : <Brightness4Icon />}
          </IconButton>
        </Box>
      </Toolbar>
      <Divider />
    </AppBar>
  );
};

export default Header;
