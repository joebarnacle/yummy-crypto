import Button, { ButtonProps } from '@mui/material/Button'

import { styled } from '@mui/material/styles'

const ContrastButton = styled(Button)<ButtonProps>(({ theme }) => ({
  color: theme.palette.primary.contrastText,
  borderColor: theme.palette.primary.contrastText,
  '&:hover': {
    backgroundColor: 'rgba(255,255,255,0.1)',
    borderColor: theme.palette.primary.contrastText,
  },
})) as typeof Button

export default ContrastButton
