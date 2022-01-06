import { useEffect, useState } from 'react';
import { unstable_batchedUpdates } from 'react-dom';
import { styled } from '@mui/material/styles';

import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/opacity.css';

import Alert from '@mui/material/Alert';
import Chip from '@mui/material/Chip';
import Toolbar from '@mui/material/Toolbar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import Skeleton from '@mui/material/Skeleton';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import Link from '@mui/material/Link';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';

import DownloadingIcon from '@mui/icons-material/Downloading';
import LaunchIcon from '@mui/icons-material/Launch';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';

import Page from '../components/Page';
import Header from '../components/Header';
import SearchField from '../components/SearchField';
import ExpandableFilter from '../components/ExpandableFilter';
import ImageGrid from '../components/ImageGrid';
import useData, { Metadata } from '../hooks/UseData';

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: 'flex-start',
}));

const drawerWidth = 340;

const HomePage = () => {
  const [oldTextFilter, setOldTextFilter] = useState('');
  const [textFilter, setTextFilter] = useState('');
  const [filter, setFilter] = useState<Record<string, string[]>>({});
  const [filteredItems, setFilteredItems] = useState<Metadata[]>([]);
  const [pageSize, setPageSize] = useState(50);
  const [wallet, setWallet] = useState<string | null>(null);
  const [selected, setSelected] = useState<Metadata | null>(null);

  const { data, indexedData, loading } = useData();

  useEffect(() => {
    const hasAttributeFilter = Object.entries(filter).some(([, value]) => value.length > 0);
    const hasTextFilter = !!textFilter;
    const hasWalletFilter = !!wallet;

    const itemsFilteredByWallet = hasWalletFilter ? data.filter(item => item.owner === wallet) : data;
    const itemsFilteredByAttribute = hasAttributeFilter
      ? itemsFilteredByWallet.filter(item => {
          return item.attributes.some(attribute => {
            const hasTrait = (key: string) => {
              return attribute.trait_type === key && filter[key].indexOf(attribute.value) > -1;
            };

            return Object.keys(filter).some(hasTrait);
          });
        })
      : itemsFilteredByWallet;

    const normalizedTextFilter = textFilter.toLocaleLowerCase();
    const itemsFilteredByText = hasTextFilter
      ? itemsFilteredByAttribute.filter(
          data =>
            data.name.toLocaleLowerCase().includes(normalizedTextFilter) ||
            (!hasWalletFilter && data.owner.toLocaleLowerCase().includes(normalizedTextFilter))
        )
      : itemsFilteredByAttribute;

    setFilteredItems(itemsFilteredByText);
  }, [wallet, data, filter, textFilter]);

  const handleFilterChange = (filterKey: string) => (options: string[]) => {
    unstable_batchedUpdates(() => {
      setFilteredItems([]);
      setFilter(filter => ({ ...filter, [filterKey]: options }));
    });
  };

  const pagedItems = filteredItems.slice(0, pageSize);

  return (
    <Page
      title="Home"
      header={
        <Header>
          <SearchField value={textFilter} onChange={value => setTextFilter(value)} resultCount={filteredItems.length} />
        </Header>
      }
      leftDrawer={
        <Drawer
          sx={{
            display: { xs: 'none', md: 'block' },
            width: drawerWidth,
            flexShrink: 0,
            '& .MuiDrawer-paper': {
              width: drawerWidth,
              boxSizing: 'border-box',
            },
          }}
          variant="permanent"
          anchor="left"
        >
          <Toolbar />
          <List>
            {Object.entries(indexedData.traits).map(([label, options], index) => (
              <ExpandableFilter
                key={index}
                label={label}
                options={Object.keys(options)}
                onChange={handleFilterChange(label)}
              />
            ))}
          </List>
        </Drawer>
      }
      rightDrawer={
        selected && (
          <Drawer
            sx={{
              display: { xs: 'none', md: 'block' },
              width: 385,
              flexShrink: 0,
              '& .MuiDrawer-paper': {
                width: 385,
                boxSizing: 'border-box',
              },
            }}
            variant="permanent"
            anchor="right"
          >
            <Toolbar />
            <DrawerHeader>
              <IconButton onClick={() => setSelected(null)}>
                <ChevronRightIcon />
              </IconButton>
            </DrawerHeader>
            <Divider />
            <LazyLoadImage height={384} width={384} src={`/images/token/${selected.id}.webp`} />
            <Box p={2}>
              <Box mb={2}>
                <Typography gutterBottom variant="h5" component="div">
                  {selected.name}
                </Typography>
                <Typography gutterBottom variant="body2">
                  Owner: {`${selected.owner.slice(0, 16)}...${selected.owner.slice(selected.owner.length - 4)}`}
                </Typography>
              </Box>
              <Box display="flex" gap={1} maxWidth={384} flexWrap="wrap">
                {selected.attributes.map(attribute => (
                  <Chip key={attribute.trait_type} label={`${attribute.trait_type}: ${attribute.value}`} />
                ))}
              </Box>
            </Box>
          </Drawer>
        )
      }
    >
      {wallet && (
        <Alert
          sx={{ mb: 2 }}
          variant="filled"
          severity="info"
          action={
            <Button
              color="inherit"
              size="small"
              onClick={() => {
                unstable_batchedUpdates(() => {
                  setTextFilter(oldTextFilter);
                  setOldTextFilter('');
                  setWallet(null);
                });
              }}
            >
              Remove
            </Button>
          }
        >
          Showing wallet <strong>{wallet}</strong>. View on{' '}
          <Link
            href={`https://bscscan.com/address/${wallet}`}
            target="_blank"
            rel="noopener noreferrer"
            sx={{ display: 'inline-flex', alignItems: 'center' }}
          >
            BscScan <LaunchIcon sx={{ ml: 0.5 }} fontSize="inherit" />
          </Link>
          .
        </Alert>
      )}
      {loading ? (
        <h4>Loading</h4> // TODO: Skeleton loading?
      ) : (
        <>
          {filteredItems.length > 0 && (
            <>
              <ImageGrid>
                {pagedItems.map(item => (
                  <Paper key={item.id} elevation={1}>
                    <LazyLoadImage
                      alt={item.name}
                      width="100%"
                      effect="opacity"
                      src={`/images/token/${item.id}.webp`}
                      placeholder={<Skeleton variant="rectangular" height={256} width={256} />}
                      onClick={() => {
                        setSelected(data[parseInt(item.id) - 1]);
                      }}
                      style={{ cursor: 'pointer' }}
                    />

                    <Box display="flex" p={1} alignItems="center">
                      <Typography variant="subtitle2" component="div" flex="1">
                        {item.name}
                      </Typography>
                      <Chip
                        color="primary"
                        variant="outlined"
                        size="small"
                        label={`0x...${item.owner.slice(item.owner.length - 4)}`}
                        clickable
                        onClick={() => {
                          unstable_batchedUpdates(() => {
                            setOldTextFilter(textFilter);
                            setTextFilter('');
                            setWallet(item.owner);
                          });
                        }}
                      />
                    </Box>
                  </Paper>
                ))}
              </ImageGrid>
              {filteredItems.length > pageSize && (
                <Box p={5} textAlign="center">
                  <Button
                    variant="outlined"
                    onClick={() => setPageSize(pageSize => pageSize + 50)}
                    endIcon={<DownloadingIcon />}
                  >
                    Load more
                  </Button>
                </Box>
              )}
            </>
          )}
          {data.length > 0 && filteredItems.length === 0 && (
            <Box display="flex" alignItems="center" justifyContent="center" flexDirection="column">
              <Typography mt={2} mb={2} variant="body2" component="div">
                No results found
              </Typography>

              <Button variant="outlined" onClick={() => setTextFilter('')}>
                Clear search
              </Button>
            </Box>
          )}
        </>
      )}
    </Page>
  );
};

export default HomePage;
