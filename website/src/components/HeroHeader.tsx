import Paper, { PaperProps } from '@mui/material/Paper'

import './HeroHeader.scss'

const HeroHeader: React.FC<PaperProps> = ({ children, sx, ...props }) => {
  return (
    <Paper
      elevation={0}
      sx={{
        position: 'relative',
        bgcolor: 'primary.main',
        color: 'primary.contrastText',
        p: { xs: 2, md: 15, lg: 25 },
        pb: { xs: 5 },
        borderRadius: 0,
      }}
      {...props}
    >
      <div className="stars">
        <div className="stars-s" />
        <div className="stars-m" />
        <div className="stars-l" />
      </div>

      {children}
    </Paper>
  )
}

export default HeroHeader
