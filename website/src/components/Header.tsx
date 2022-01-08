import { useState } from 'react'
import { Link as RouterLink } from 'react-router-dom'

import AppBar from '@mui/material/AppBar'
import Drawer from '@mui/material/Drawer'
import Toolbar from '@mui/material/Toolbar'
import Stack from '@mui/material/Stack'
import List from '@mui/material/List'
import Divider from '@mui/material/Divider'
import ListItem from '@mui/material/ListItem'
import ListItemIcon from '@mui/material/ListItemIcon'
import ListItemText from '@mui/material/ListItemText'

import IconButton from '@mui/material/IconButton'
import MenuIcon from '@mui/icons-material/Menu'

import HomeIcon from '@mui/icons-material/Home'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart'

import Button from './ContrastButton'

import yummyLogoLarge from '../../public/images/yummy-logo-large.svg'
import pancakeSwapLogo from '../../public/images/partners/pancake-swap-logo.png'
import bitmartLogo from '../../public/images/partners/bitmart-logo.png'
import sokuSwapLogo from '../../public/images/partners/soku-swap-logo.png'

const Header = () => {
  const [drawerOpen, setDrawerOpen] = useState(false)

  const toggleDrawer = (open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
    if (
      event.type === 'keydown' &&
      ((event as React.KeyboardEvent).key === 'Tab' || (event as React.KeyboardEvent).key === 'Shift')
    ) {
      return
    }

    setDrawerOpen(open)
  }

  return (
    <>
      <AppBar position="sticky" elevation={0} sx={{ bgcolor: 'primary.main', p: 1, paddingBottom: 1 }}>
        <Toolbar id="back-to-top-anchor">
          <div style={{ flex: 1 }}>
            <RouterLink to="/" style={{ display: 'flex' }}>
              <img height={24} src={yummyLogoLarge} alt="yummy logo" />
            </RouterLink>
          </div>
          <IconButton
            sx={{ display: { xs: 'block', md: 'none' } }}
            size="large"
            edge="start"
            color="inherit"
            aria-label="open drawer"
            onClick={toggleDrawer(true)}
          >
            <MenuIcon />
          </IconButton>
          <Stack sx={{ display: { xs: 'none', md: 'flex' } }} direction="row" gap={3}>
            <Button to="/" component={RouterLink} startIcon={<HomeIcon />}>
              Home
            </Button>
            <Button to="/guides/how-to-buy" component={RouterLink}>
              How to buy
            </Button>
            <Button
              href="https://poocoin.app/tokens/0xb003c68917bab76812797d1b8056822f48e2e4fe"
              component="a"
              target="_blank"
              rel="noopener"
            >
              Chart
            </Button>
            <Button
              href="https://bscscan.com/address/0xB003C68917BaB76812797d1b8056822f48E2e4fe"
              component="a"
              target="_blank"
              rel="noopener"
            >
              Contract
            </Button>
            <Button to="/community" component={RouterLink}>
              Community
            </Button>
            <Button to="/nfts" component={RouterLink}>
              NFTs
            </Button>
            <Button
              href="https://yummycryptomerch.com/"
              variant="outlined"
              component="a"
              target="_blank"
              rel="noopener"
              startIcon={<ShoppingCartIcon />}
            >
              Shop
            </Button>
          </Stack>
        </Toolbar>
      </AppBar>
      <Drawer anchor="top" open={drawerOpen} onClose={toggleDrawer(false)}>
        <List>
          <ListItem button component={RouterLink} to="/" onClick={toggleDrawer(false)}>
            <ListItemText primary="Home" />
          </ListItem>
          <ListItem button component={RouterLink} to="/guides/how-to-buy" onClick={toggleDrawer(false)}>
            <ListItemText primary="How to buy" />
          </ListItem>
          <ListItem
            button
            component="a"
            href="https://bscscan.com/address/0xB003C68917BaB76812797d1b8056822f48E2e4fe"
            target="_blank"
            rel="noopener"
            onClick={toggleDrawer(false)}
          >
            <ListItemText primary="Contract" />
          </ListItem>
          <ListItem button component={RouterLink} to="/community" onClick={toggleDrawer(false)}>
            <ListItemText primary="Community" />
          </ListItem>
          <ListItem button component={RouterLink} to="/nfts" onClick={toggleDrawer(false)}>
            <ListItemText primary="NFTs" />
          </ListItem>
          <ListItem
            button
            component="a"
            href="https://yummycryptomerch.com/"
            target="_blank"
            rel="noopener"
            onClick={toggleDrawer(false)}
          >
            <ListItemText primary="Shop" />
          </ListItem>
          <Divider />
          <ListItem
            button
            component="a"
            href="https://www.bitmart.com/trade/en?symbol=YUMMY_USDT"
            target="_blank"
            rel="noopener"
            onClick={toggleDrawer(false)}
          >
            <ListItemIcon>
              <img width={24} src={pancakeSwapLogo} />
            </ListItemIcon>
            <ListItemText primary="Buy on PancakeSwap" />
          </ListItem>
          <ListItem
            button
            component="a"
            href="https://www.bitmart.com/trade/en?symbol=YUMMY_USDT"
            target="_blank"
            rel="noopener"
            onClick={toggleDrawer(false)}
          >
            <ListItemIcon>
              <img width={24} src={bitmartLogo} />
            </ListItemIcon>
            <ListItemText primary="Buy on Bitmart" />
          </ListItem>
          <ListItem
            button
            component="a"
            href="https://www.bitmart.com/trade/en?symbol=YUMMY_USDT"
            target="_blank"
            rel="noopener"
            onClick={toggleDrawer(false)}
          >
            <ListItemIcon>
              <img width={24} src={sokuSwapLogo} style={{ background: '#01084a', padding: 2 }} />
            </ListItemIcon>
            <ListItemText primary="Buy on SokuSwap" />
          </ListItem>
        </List>
      </Drawer>
    </>
  )
}

export default Header
