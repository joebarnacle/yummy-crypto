import copyToClipboard from 'copy-to-clipboard'
import { useSnackbar } from 'notistack'

import IconButton from '@mui/material/IconButton'
import ContentCopyIcon from '@mui/icons-material/ContentCopy'

interface ContractBlockProps {
  value: string
}

const ContractBlock = ({ value }: ContractBlockProps) => {
  const { enqueueSnackbar } = useSnackbar()

  return (
    <span style={{ display: 'flex', alignItems: 'center' }}>
      <code style={{ wordBreak: 'break-word', paddingTop: 24, paddingBottom: 24 }}>{value}</code>
      <IconButton
        aria-label="copy"
        size="small"
        sx={{ width: 44, height: 44 }}
        onClick={() => {
          copyToClipboard(value)
          enqueueSnackbar('Contract copied', { variant: 'success' })
        }}
      >
        <ContentCopyIcon fontSize="inherit" />
      </IconButton>
    </span>
  )
}

export default ContractBlock
