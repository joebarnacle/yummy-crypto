import React from 'react';
import { Helmet, MetaProps } from 'react-helmet-async';

import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';

interface PageProps {
  title?: string;
  header?: React.ReactNode;
  leftDrawer?: React.ReactNode;
  rightDrawer?: React.ReactNode;
  metaTags?: MetaProps['children'];
}

const Page: React.FC<PageProps> = ({ header, leftDrawer, rightDrawer, children, metaTags, title }) => {
  return (
    <>
      <Helmet>
        <title>{title ? `${title} - ` : ''}Yummy Dog Gallery</title>
        {metaTags}
      </Helmet>
      {header}
      <Box display="flex">
        {leftDrawer}
        <Box component="main" sx={{ flexGrow: 1, bgcolor: 'background.default', p: 3 }}>
          {header && <Toolbar />}
          {children}
        </Box>
        {rightDrawer}
      </Box>
    </>
  );
};

export default Page;
