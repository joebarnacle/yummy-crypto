import Chip from '@mui/material/Chip';
import InputBase from '@mui/material/InputBase';
import IconButton from '@mui/material/IconButton';
import InputAdornment from '@mui/material/InputAdornment';
import Paper from '@mui/material/Paper';

import SearchIcon from '@mui/icons-material/Search';
import CloseIcon from '@mui/icons-material/Close';

interface SearchFieldProps {
  onChange?: (value: string) => void;
  onDelayedChange?: (value: string) => void;
  value?: string;
  resultCount: number;
}

const getResultCountText = (count: number) => `${count} result${count === 1 ? '' : 's'}`;
const SearchField = ({ value = '', onChange, resultCount }: SearchFieldProps) => {
  const handleChange = (value: string) => {
    onChange && onChange(value);
  };

  return (
    <Paper sx={{ display: { xs: 'none', md: 'flex' }, alignItems: 'center', width: '30vw', margin: 'auto' }}>
      <InputBase
        autoFocus
        sx={{ ml: 1, flex: 1 }}
        placeholder="Search"
        inputProps={{ 'aria-label': 'search nfts' }}
        onChange={event => handleChange(event.target.value)}
        startAdornment={
          <InputAdornment position="start">
            <SearchIcon />
          </InputAdornment>
        }
        value={value}
      />

      <IconButton
        sx={{ p: '10px', opacity: value.length > 0 ? 100 : 0 }}
        aria-label="clear"
        onClick={() => {
          handleChange('');
          window.scrollTo(0, 0);
        }}
      >
        <CloseIcon />
      </IconButton>
      <Chip sx={{ ml: 1, mr: 2 }} size="small" label={getResultCountText(resultCount)} />
    </Paper>
  );
};

export default SearchField;
