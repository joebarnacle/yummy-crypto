import Avatar from '@mui/material/Avatar'
import Divider from '@mui/material/Divider'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemText, { ListItemTextProps } from '@mui/material/ListItemText'
import ListItemAvatar from '@mui/material/ListItemAvatar'
import Typography from '@mui/material/Typography'
import React from 'react'

interface Step {
  primary: ListItemTextProps['primary']
  secondary: ListItemTextProps['secondary']
}

export interface StepsProps {
  steps: Step[]
}

const Steps = ({ steps }: StepsProps) => {
  return (
    <List>
      {steps.map(({ primary, secondary }, index) => {
        return (
          <React.Fragment key={index}>
            <ListItem sx={{ alignItems: 'flex-start', p: { xs: 1, md: 4 }, pt: { xs: 2, md: 4 } }}>
              <ListItemAvatar sx={{ minWidth: 100 }}>
                <Avatar
                  sx={{ mt: { xs: 2, md: 0 }, width: 64, height: 64, fontWeight: 'bold', bgcolor: 'primary.main' }}
                >
                  {index + 1}
                </Avatar>
              </ListItemAvatar>
              <ListItemText primary={<Typography variant="h6">{primary}</Typography>} secondary={secondary} />
            </ListItem>
            {index < steps.length - 1 && <Divider />}
          </React.Fragment>
        )
      })}
    </List>
  )
}

export default Steps
