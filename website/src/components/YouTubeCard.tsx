import YouTube from 'react-youtube'
import copyToClipboard from 'copy-to-clipboard'
import { useSnackbar } from 'notistack'

import Button from '@mui/material/Button'
import Card from '@mui/material/Card'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Typography from '@mui/material/Typography'

interface YouTubeProps {
  videoId: string
  title: string
  description: string
}

const YouTubeCard = ({ videoId, title, description }: YouTubeProps) => {
  const { enqueueSnackbar } = useSnackbar()

  const url = `https://www.youtube.com/watch?v=${videoId}`
  return (
    <Card sx={{ display: 'flex', flexDirection: 'column', maxWidth: 345 }}>
      <CardMedia
        component={YouTube}
        videoId={videoId}
        opts={{
          height: '200',
          width: '100%',
          playerVars: {
            // https://developers.google.com/youtube/player_parameters
            autoplay: 0,
          },
        }}
      />
      <CardContent sx={{ flex: 1 }}>
        <Typography gutterBottom variant="h5" component="div">
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {description}
        </Typography>
      </CardContent>
      <CardActions>
        <Button
          onClick={() => {
            copyToClipboard(url)
            enqueueSnackbar('URL copied', { variant: 'success' })
          }}
          size="small"
        >
          Share
        </Button>
        <Button href={url} size="small" target="_blank" rel="noopener">
          Learn More
        </Button>
      </CardActions>
    </Card>
  )
}

export default YouTubeCard
