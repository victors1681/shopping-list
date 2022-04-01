import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';
import React from 'react';

import { Header } from './parts/header';

const MainLayout = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.background.default,
  display: 'flex',
  flexDirection: 'column',
  minHeight: '100vh',
}));

interface Props {
  children: React.ReactNode;
}
const Layout = ({ children }: Props): JSX.Element => {
  return (
    <MainLayout> 
        <Header />
        {children}
    </MainLayout>
  );
};

export default Layout;
