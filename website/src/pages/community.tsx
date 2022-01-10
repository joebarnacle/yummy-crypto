import type { NextPage } from 'next'

import Alert from '@mui/material/Alert'
import Avatar from '@mui/material/Avatar'
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import Button from '@mui/material/Button'
import Container from '@mui/material/Container'
import Divider from '@mui/material/Divider'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'

import TwitterIcon from '@mui/icons-material/Twitter'
import RedditIcon from '@mui/icons-material/Reddit'
import TelegramIcon from '@mui/icons-material/Telegram'
import FacebookIcon from '@mui/icons-material/Facebook'
import InstagramIcon from '@mui/icons-material/Instagram'
import YouTubeIcon from '@mui/icons-material/YouTube'

import List from '@mui/material/List'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemText from '@mui/material/ListItemText'
import ListItemAvatar from '@mui/material/ListItemAvatar'

import Page from '../components/Page'

const Community: NextPage = () => {
  return (
    <Page title="Community">
      <Container sx={{ mt: { xs: 4, md: 10 } }}>
        <Typography textAlign="center" variant="h4" sx={{ fontWeight: 600 }}>
          Join our community!
        </Typography>
        <Typography textAlign="center" variant="body2" gutterBottom>
          Below you&apos;ll find a list of all the places you can find and interact with the Yummy community.
        </Typography>

        <Stack sx={{ mt: { xs: 2, md: 5 }, mb: 2 }} direction={{ xs: 'column', md: 'row' }} gap={2}>
          <Card sx={{ flex: 1 }} variant="outlined">
            <CardContent>
              <Box textAlign="center" position="relative">
                <RedditIcon
                  sx={{
                    fontSize: 64,
                    color: 'text.secondary',
                  }}
                />
              </Box>
              <Typography textAlign="center" variant="h6" component="div">
                Reddit
              </Typography>
              <Typography textAlign="center" variant="body2">
                Join our Reddit subreddit /r/yummycoin/ for the latest news
              </Typography>
            </CardContent>
            <CardActions sx={{ justifyContent: 'center' }}>
              <Button
                size="small"
                LinkComponent="a"
                href="https://www.reddit.com/r/yummycoin/"
                target="_blank"
                rel="noopener"
              >
                Join
              </Button>
            </CardActions>
          </Card>
          <Card sx={{ flex: 1 }} variant="outlined">
            <CardContent>
              <Box textAlign="center" position="relative">
                <TelegramIcon
                  sx={{
                    fontSize: 64,
                    color: 'text.secondary',
                  }}
                />
              </Box>
              <Typography textAlign="center" variant="h6" component="div">
                Telegram
              </Typography>
              <Typography textAlign="center" variant="body2">
                Join our Telegram group and interact more closely with the team
              </Typography>
            </CardContent>
            <CardActions sx={{ justifyContent: 'center' }}>
              <Button size="small" LinkComponent="a" href="https://t.me/yummycoin" target="_blank" rel="noopener">
                Join
              </Button>
            </CardActions>
          </Card>
          <Card sx={{ flex: 1 }} variant="outlined">
            <CardContent>
              <Box textAlign="center" position="relative">
                <TwitterIcon
                  sx={{
                    fontSize: 64,
                    color: 'text.secondary',
                  }}
                />
              </Box>
              <Typography textAlign="center" variant="h6" component="div">
                Twitter
              </Typography>
              <Typography textAlign="center" variant="body2">
                Follow our Twitter account YummyCrypto for the latest news
              </Typography>
            </CardContent>
            <CardActions sx={{ justifyContent: 'center' }}>
              <Button
                size="small"
                LinkComponent="a"
                href="https://twitter.com/YummyCrypto"
                target="_blank"
                rel="noopener"
              >
                Follow
              </Button>
            </CardActions>
          </Card>
        </Stack>
        <Alert severity="warning">
          Admins will <strong>NEVER</strong> send you a direct message first. If anybody reaches out to you directly on
          e.g. Telegram pretending to represent the Yummy team, please block them and report them to an admin.
        </Alert>
        <Divider sx={{ mt: 5, mb: 5 }} />
        <Typography variant="h5">Looking for more?</Typography>
        <List>
          <ListItemButton
            component="a"
            href="https://www.facebook.com/OfficialYummyCoin"
            target="_blank"
            rel="noopener"
          >
            <ListItemAvatar>
              <Avatar>
                <FacebookIcon />
              </Avatar>
            </ListItemAvatar>
            <ListItemText primary="OfficialYummyCoin" secondary="Facebook" />
          </ListItemButton>
          <ListItemButton component="a" href="https://www.instagram.com/yummycharity/" target="_blank" rel="noopener">
            <ListItemAvatar>
              <Avatar>
                <InstagramIcon />
              </Avatar>
            </ListItemAvatar>
            <ListItemText primary="yummycharity" secondary="Instagram" />
          </ListItemButton>
          <ListItemButton
            component="a"
            href="https://www.youtube.com/c/YummyProjectOfficial/"
            target="_blank"
            rel="noopener"
          >
            <ListItemAvatar>
              <Avatar>
                <YouTubeIcon />
              </Avatar>
            </ListItemAvatar>
            <ListItemText primary="YummyProjectOfficial" secondary="YouTube" />
          </ListItemButton>
        </List>
      </Container>
    </Page>
  )
}

export default Community
