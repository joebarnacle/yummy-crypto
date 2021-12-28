import { useState } from 'react';
import { useParams } from 'react-router-dom';

import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/opacity.css';

import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';

import Page from '../components/Page';
import Header from '../components/Header';

import { useToken } from '../hooks/UseData';

type PageParams = {
  tokenId: string;
};

const TokenPage = () => {
  const { tokenId } = useParams<PageParams>();
  const { metadata, loading } = useToken(tokenId);

  return (
    <Page title={`Token | Yummy Dog #${tokenId}`} header={<Header />}>
      <Container>
        <Paper>
          <Grid container>
            <Grid item md={3}>
              <Paper sx={{ height: 256, width: 256, overflow: 'hidden' }}>
                <LazyLoadImage height={256} src={`/images/token/${tokenId}.webp`} />
              </Paper>
            </Grid>
            <Grid item md={9}>
              <Typography variant="h4" gutterBottom>
                Yummy Dog #{tokenId}
              </Typography>
              {loading && <div>Loading</div>}

              {metadata && (
                <div>
                  <div>Owned by {metadata.owner}</div>
                  <div>{metadata.attributes[0].trait_type}</div>
                  <div>{metadata.attributes[0].value}</div>
                </div>
              )}
            </Grid>
          </Grid>
        </Paper>
      </Container>
    </Page>
  );
};

export default TokenPage;
