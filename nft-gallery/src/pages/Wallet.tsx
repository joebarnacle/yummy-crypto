import { Link, useParams } from 'react-router-dom';

import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/opacity.css';

import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import Skeleton from '@mui/material/Skeleton';

import Page from '../components/Page';
import Header from '../components/Header';

import { useWallet } from '../hooks/UseData';

type PageParams = {
  walletId: string;
};

const WalletPage = () => {
  const { walletId } = useParams<PageParams>();
  const { data } = useWallet(walletId);

  return (
    <Page title="Wallet | 0x...1234" header={<Header />}>
      <Container>
        <Grid container spacing={{ xs: 2 }}>
          {data.map((item, index) => (
            <Grid item key={index}>
              <Paper elevation={1} sx={{ maxWidth: 256 }}>
                <Link to={`/token/${item.id}`}>
                  <LazyLoadImage
                    height={256}
                    width={256}
                    alt={item.name}
                    effect="opacity"
                    src={`/images/token/${item.id}.webp`}
                    placeholder={<Skeleton variant="rectangular" height={256} width={256} />}
                  />
                </Link>
                <Box display="flex" p={1} alignItems="center">
                  <Typography variant="subtitle2" component="div" flex="1">
                    {item.name}
                  </Typography>
                </Box>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Page>
  );
};

export default WalletPage;
