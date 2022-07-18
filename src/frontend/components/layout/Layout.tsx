import React from 'react';
import type { NextPage } from 'next';
import Image from 'next/image';
import Header from './Header';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import logo from '../../../public/logo.png';

type LayoutType = {
  title?: string;
  logged?: boolean;
  children?: React.ReactNode;
};

const boxStyle = {
  position: 'absolute',
  top: '42px',
  left: 0,
  right: 0,
};

const Layout: NextPage<LayoutType> = (props) => {
  const { title } = props;
  return (
    <React.Fragment>
      <Header title={title} />
      <AppBar position="fixed">
        <Toolbar>
          <Box sx={{ display: 'flex', flexGrow: 1 }} alignItems="center">
            <Image src={logo} width={150} height={30} />
          </Box>
          <Box sx={{ display: 'flex' }}>
            <Typography variant="h6" color="inherit" component="div">
              Warehousing
            </Typography>
          </Box>
        </Toolbar>
      </AppBar>
      <Box sx={boxStyle}>{props.children}</Box>
    </React.Fragment>
  );
};

export default Layout;
