import RouterLink from 'next/link'

import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import IconButton from '@mui/material/IconButton'

import TwitterIcon from '@mui/icons-material/Twitter'
import RedditIcon from '@mui/icons-material/Reddit'
import TelegramIcon from '@mui/icons-material/Telegram'
import FacebookIcon from '@mui/icons-material/Facebook'
import InstagramIcon from '@mui/icons-material/Instagram'
import YouTubeIcon from '@mui/icons-material/YouTube'

import styled from '@emotion/styled'

const List = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  > li {
    padding-top: 8px;
    padding-bottom: 8px;
  }
`

const linkStyles = `
  text-decoration: none;
  color: #222;
  &:hover {
    color: #f47e14;
  }
`

const StyledLink = styled.a`
  ${linkStyles}
`
const StyledRouterLink = styled(RouterLink)`
  ${linkStyles}
`

const Footer = () => {
  return (
    <Box component="footer" p={{ xs: 1, md: 4 }} sx={{ borderTop: '1px solid #eee' }}>
      <Container sx={{ mb: 5 }}>
        <Grid container spacing={2}>
          <Grid item xs={6} md={4}>
            <h4>ABOUT</h4>
            <List>
              <li>
                <StyledRouterLink href="/community">Community</StyledRouterLink>
              </li>
              <li>
                <StyledLink href="/resources/yummy-whitepaper-v2.pdf" target="_blank">
                  Whitepaper
                </StyledLink>
              </li>
              <li>
                <StyledLink
                  href="https://www.binance.charity/binance-lunch-for-children"
                  target="_blank"
                  rel="noopener"
                >
                  Donation records
                </StyledLink>
              </li>
              <li>
                <StyledLink
                  href="https://apeboard.finance/dashboard/0x50573352064DfC51abee7Bccb6113642abe80908?chain=BSC"
                  target="_blank"
                  rel="noopener"
                >
                  Growth Fund
                </StyledLink>
              </li>
            </List>
          </Grid>
          <Grid item xs={6} md={4}>
            <h4>HELP</h4>
            <List>
              <li>
                <StyledRouterLink href="/guides/how-to-buy">How to buy</StyledRouterLink>
              </li>
              <li>
                <StyledRouterLink href="/guides/how-to-migrate">Migrate to v2</StyledRouterLink>
              </li>
            </List>
          </Grid>
          <Grid item xs={6} md={4}>
            <h4>DEVELOPERS</h4>
            <List>
              <li>
                <StyledLink
                  href="https://github.com/Quillhash/Audit_Reports/blob/master/YummyToken%20Smart%20Contract%20Audit%20Report%20-%20QuillAudits.pdf"
                  target="_blank"
                  rel="noopener"
                >
                  Audits
                </StyledLink>
              </li>
              <li>
                <StyledLink
                  href="https://bscscan.com/address/0xB003C68917BaB76812797d1b8056822f48E2e4fe"
                  target="_blank"
                  rel="noopener"
                >
                  Contract
                </StyledLink>
              </li>
              <li>
                <StyledLink
                  href="https://poocoin.app/tokens/0xb003c68917bab76812797d1b8056822f48e2e4fe"
                  target="_blank"
                  rel="noopener"
                >
                  Chart
                </StyledLink>
              </li>
            </List>
          </Grid>
        </Grid>

        <Box display="flex" mt={5} mb={5} justifyContent="center">
          <IconButton
            component="a"
            href="https://twitter.com/YummyCrypto"
            target="_blank"
            rel="noopener"
            aria-label="Twitter"
            size="large"
          >
            <TwitterIcon fontSize="inherit" />
          </IconButton>
          <IconButton
            component="a"
            href="https://t.me/yummycoin"
            target="_blank"
            rel="noopener"
            aria-label="Telegram"
            size="large"
          >
            <TelegramIcon fontSize="inherit" />
          </IconButton>
          <IconButton
            component="a"
            href="https://www.facebook.com/OfficialYummyCoin"
            target="_blank"
            rel="noopener"
            aria-label="Facebook"
            size="large"
          >
            <FacebookIcon fontSize="inherit" />
          </IconButton>
          <IconButton
            component="a"
            href="https://www.instagram.com/yummycharity/"
            target="_blank"
            rel="noopener"
            aria-label="Instagram"
            size="large"
          >
            <InstagramIcon fontSize="inherit" />
          </IconButton>
          <IconButton
            component="a"
            href="https://www.youtube.com/c/YummyProjectOfficial/"
            target="_blank"
            rel="noopener"
            aria-label="Youtube"
            size="large"
          >
            <YouTubeIcon fontSize="inherit" />
          </IconButton>
          <IconButton
            component="a"
            href="https://www.reddit.com/r/yummycoin/"
            target="_blank"
            rel="noopener"
            aria-label="Reddit"
            size="large"
          >
            <RedditIcon fontSize="inherit" />
          </IconButton>
        </Box>

        <Typography variant="subtitle2" sx={{ fontSize: 10, mb: 1 }}>
          <strong>LEGAL DISCLAIMER:</strong> The information provided on YummyCrypto.com does not constitute investment
          advice, financial advice, trading advice, or any other sort of advice and you should not treat any of the
          website&apos;s content as such. The Yummy team does not recommend that any cryptocurrency should be bough,
          sold, or held by you. Do conduct your own due diligence and consult your financial advisor before making any
          investment decisions. By purchasing Yummy, you agree that you are not purchasing a security or investment and
          you agree to hold the team harmless and not liable for any losses or taxes you may incur. You also agree that
          the team is presenting the token “as is” and is not required to provide any support or services. You should
          have no expectation of any form from Yummy and its team. Although Yummy is a community driven token for social
          networking and not a registered digital currency, the team strongly recommends that citizens in areas with
          government bans on Crypto do not purchase it because the team cannot ensure compliance with your
          territory&apos;s regulations. Always make sure that you are in compliance with your local laws and regulations
          before you make any purchase.
        </Typography>
        <Typography variant="subtitle2" sx={{ fontSize: 10 }}>
          <strong>RISK DISCLOSURE:</strong> Please note there are always risks associated with smart-contracts. Please
          use at your own risk. Yummy is not a registered broker, analyst, or investment advisor. Everything that&apos;s
          provided on this site is purely for guidance, informational and educational purposes, and fun. All information
          contained herein should be independently verified and confirmed. We do not accept any liability for any loss
          or damage whatsoever caused in reliance upon such information or services. Please be aware of the risks
          involved with any trading done in any financial market. Do not trade with money that you cannot afford to
          lose.
        </Typography>
        <Typography sx={{ mt: 3 }} variant="body2">
          © {new Date().getFullYear()} YUMMY CRYPTO. All rights reserved.
        </Typography>
      </Container>
    </Box>
  )
}

export default Footer
