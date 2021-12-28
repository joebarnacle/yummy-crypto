import useScrollTrigger from '@mui/material/useScrollTrigger'
import Box from '@mui/material/Box'
import Zoom from '@mui/material/Zoom'
import React from 'react'

const ScrollToTop: React.FC = ({ children }) => {
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 100,
  })

  const handleClick = () => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' })
  }

  return (
    <Zoom in={trigger}>
      <Box onClick={handleClick} role="presentation" sx={{ position: 'fixed', bottom: 16, right: 16 }}>
        {children}
      </Box>
    </Zoom>
  )
}

export default ScrollToTop
