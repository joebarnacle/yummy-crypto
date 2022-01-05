import React from 'react';
import { styled } from '@mui/material/styles';

const Root = styled('div')(({ theme }) => ({
  display: 'grid',
  gap: theme.spacing(2),
  [theme.breakpoints.up('sm')]: {
    gridTemplateColumns: 'repeat(2, 1fr)',
  },
  [theme.breakpoints.up('md')]: {
    gridTemplateColumns: 'repeat(2, 1fr)',
  },
  [theme.breakpoints.up('lg')]: {
    gridTemplateColumns: 'repeat(3, 1fr)',
  },
  [theme.breakpoints.up('xl')]: {
    gridTemplateColumns: 'repeat(5, 1fr)',
  },
  [theme.breakpoints.up(2500)]: {
    gridTemplateColumns: 'repeat(8, 1fr)',
  },
}));

const ImageGrid: React.FC = ({ children }) => {
  return <Root>{children}</Root>;
};

export default ImageGrid;
