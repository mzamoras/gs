import React from 'react';
import Card from '@mui/material/Card';
import Paper from '@mui/material/Paper';
import CardContent from '@mui/material/CardContent';
import { Typography } from '@mui/material';
import LaptopMac from '@mui/icons-material/LaptopMac';
import DoNotStep from '@mui/icons-material/DoNotStep';
import Tv from '@mui/icons-material/Tv';
import Archive from '@mui/icons-material/Archive';
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';

function ProductItem({ product }) {
  const { name, sku, brand, price, category, attributes } = product;
  const CategoryIcon =
    category?.id === 2 ? (
      <LaptopMac />
    ) : category?.id === 1 ? (
      <Tv />
    ) : category?.id === 3 ? (
      <DoNotStep />
    ) : (
      <Archive />
    );
  return (
    <Card sx={{ maxWidth: 345, margin: '30px 30px' }} elevation={2}>
      <CardContent>
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
        >
          <Avatar variant="square">{CategoryIcon}</Avatar>
          <div>
            <Typography variant="title" component="h2">
              {product.name}
            </Typography>
            <Typography variant="body2" component="h5">
              {product.brand}
            </Typography>
          </div>
        </Box>
        {product.name} - {product.sku} - {product.brand} - {product.price}${' '}
        {product.price.toFixed(2)} | $ {(product.price * 1.35).toFixed(2)}
        {attributes.map((attr) => {
          return <div key={attr.id}>{attr.attribute.name} | {attr.value}</div>;
        })}
        <Typography gutterBottom variant="subtitle" component="h2">
          $ {(product.price * 1.35).toFixed(2)}
        </Typography>
      </CardContent>
    </Card>
  );
}

export default ProductItem;
