import { useState } from 'react'
import Image from 'next/image'
import RouterLink from 'next/link'

import styled from '@emotion/styled'

import AppBar from '@mui/material/AppBar'
import Drawer from '@mui/material/Drawer'
import Toolbar from '@mui/material/Toolbar'
import Stack from '@mui/material/Stack'
import List from '@mui/material/List'
import Divider from '@mui/material/Divider'
import ListItem from '@mui/material/ListItem'
import ListItemIcon from '@mui/material/ListItemIcon'
import ListItemText from '@mui/material/ListItemText'
import ListItemButton from '@mui/material/ListItemButton'
import Link from '@mui/material/Link'

import IconButton from '@mui/material/IconButton'
import MenuIcon from '@mui/icons-material/Menu'

import ShoppingCartIcon from '@mui/icons-material/ShoppingCart'

import Button from './ContrastButton'

import yummyLogoLarge from '../../public/images/yummy-logo-large.svg'
import pancakeSwapLogo from '../../public/images/partners/pancake-swap-logo.png'
import bitmartLogo from '../../public/images/partners/bitmart-logo.png'
import sokuSwapLogo from '../../public/images/partners/soku-swap-logo.png'

const ConstrastImage = styled(Image)`
  background: #01084a;
  padding: 2px !important;
`

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
            <Link component={RouterLink} href="/" sx={{ display: 'flex' }}>
              <a>
                <Image height={24} src={yummyLogoLarge} alt="yummy logo" />
              </a>
            </Link>
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
            <RouterLink href="/guides/how-to-buy">
              <Button>How to buy</Button>
            </RouterLink>
            <RouterLink href="/community">
              <Button>Community</Button>
            </RouterLink>
            <RouterLink href="/nfts">
              <Button>NFTs</Button>
            </RouterLink>
            <RouterLink href="/news">
              <Button>News</Button>
            </RouterLink>
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
        <List onClick={toggleDrawer(false)}>
          <ListItemButton>
            <RouterLink href="/">
              <ListItemText primary="Home" />
            </RouterLink>
          </ListItemButton>
          <ListItemButton>
            <RouterLink href="/guides/how-to-buy">
              <ListItemText primary="How to buy" />
            </RouterLink>
          </ListItemButton>
          <ListItem
            button
            component="a"
            href="https://bscscan.com/address/0xB003C68917BaB76812797d1b8056822f48E2e4fe"
            target="_blank"
            rel="noopener"
          >
            <ListItemText primary="Contract" />
          </ListItem>
          <ListItemButton>
            <RouterLink href="/community">
              <ListItemText primary="Community" />
            </RouterLink>
          </ListItemButton>
          <ListItemButton>
            <RouterLink href="/nfts">
              <ListItemText primary="NFTs" />
            </RouterLink>
          </ListItemButton>
          <ListItem button component="a" href="https://yummycryptomerch.com/" target="_blank" rel="noopener">
            <ListItemText primary="Shop" />
          </ListItem>
          <Divider />
          <ListItem
            button
            component="a"
            href="https://www.bitmart.com/trade/en?symbol=YUMMY_USDT"
            target="_blank"
            rel="noopener"
          >
            <ListItemIcon>
              <Image alt="pancake swap logo" height={24} width={24} src={pancakeSwapLogo} />
            </ListItemIcon>
            <ListItemText primary="Buy on PancakeSwap" />
          </ListItem>
          <ListItem
            button
            component="a"
            href="https://www.bitmart.com/trade/en?symbol=YUMMY_USDT"
            target="_blank"
            rel="noopener"
          >
            <ListItemIcon>
              <Image alt="bitmart logo" height={24} width={24} src={bitmartLogo} />
            </ListItemIcon>
            <ListItemText primary="Buy on Bitmart" />
          </ListItem>
          <ListItem
            button
            component="a"
            href="https://www.bitmart.com/trade/en?symbol=YUMMY_USDT"
            target="_blank"
            rel="noopener"
          >
            <ListItemIcon>
              <ConstrastImage alt="soku swap logo" height={24} width={24} src={sokuSwapLogo} />
            </ListItemIcon>
            <ListItemText primary="Buy on SokuSwap" />
          </ListItem>
        </List>
      </Drawer>
    </>
  )
}

export default Header
