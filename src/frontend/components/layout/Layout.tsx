import React from 'react';
import type { NextPage } from 'next';
import Link from 'next/link'
import Image from 'next/image';
import Head from 'next/head'
import Header from './Header';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Typography from '@mui/material/Typography';
import logo from '../../../public/logo.png';

type LayoutType = {
  title?: string;
  logged?: boolean;
  children?: React.ReactNode;
};

const boxStyle = {
  position: 'absolute',
  top: '64px',
  left: 0,
  right: 0,
  bottom: 0,
};

const Layout: NextPage<LayoutType> = (props) => {
  const { title } = props;
  return (
    <Box sx={{ display: 'flex' }}>
      <Header title={title} />
      <AppBar position="fixed" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}>
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
      <Drawer
        variant="permanent"
        sx={{
          width: 240,
          flexShrink: 0,
          [`& .MuiDrawer-paper`]: { width: 240, boxSizing: 'border-box' },
        }}
      >
        <Toolbar />
        <List>
          <ListItem>
            <Link href="/products">Products</Link>
          </ListItem>
          <ListItem>
            <Link href="/categories">Categories</Link>
          </ListItem>
          <ListItem>C</ListItem>
        </List>
      </Drawer>
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>{props.children}</Box>
    </Box>
  );
};

export default Layout;
