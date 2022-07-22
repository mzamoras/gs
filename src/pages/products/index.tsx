import React, { useState, useEffect } from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import Box from '@mui/material/Box';
import { getProducts, getCategories } from 'src/frontend/utilities/fetchers';
import Layout from '../../frontend/components/layout/Layout';
import ProductItem from '../../frontend/components/pages/ProductItem';
import { Product } from '@globalTypes/global';
import Link from 'next/link';

const URL = 'http://localhost:3000/api';

const sendProduct = async (product: Product) => {
  return await fetch(`${URL}/products`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(product),
  });
};

const newProductInit = () => ({
  name: '',
  sku: '',
  brand: '',
  price: 0,
  category: 1,
});

type Props = {
  props: {
    products: Product[];
  };
};

function ProductsPage({ props }: Props) {
  const { products } = props;
  const [productsList, setProductsList] = useState([]);
  const [filteredProductsList, setFilteredProductsList] = useState(products);
  const [categoriesList, setCategoriesList] = useState([]);
  const [newProduct, setNewProduct] = useState(newProductInit());
  const [search, setSearch] = useState('');
  // const [productName, setProductName] = useState('');
  // const [productSKU, setProductSKU] = useState('');
  // const [productBrand, setProductBrand] = useState('');
  // const [productPrice, setProductPrice] = useState('');
  const setProductName = (e) => {
    setNewProduct({ ...newProduct, name: e.target.value });
  };
  const setProductSKU = (e) => {
    setNewProduct({ ...newProduct, sku: e.target.value });
  };
  const setProductBrand = (e) => {
    setNewProduct({ ...newProduct, brand: e.target.value });
  };
  const setProductPrice = (e) => {
    setNewProduct({ ...newProduct, price: e.target.value });
  };
  const setProductCategory = (e) => {
    setNewProduct({ ...newProduct, category: e.target.value });
  };

  const handleSetSearch = (e) => {
    const value = e.target.value;
    setSearch(value);
    setFilteredProductsList(
      products.filter((product) =>
        product.name.toLowerCase().includes(value.toLowerCase()),
      ),
    );
  };

  const currentCatAttributes = categoriesList.findIndex(
    (c) => c.id === newProduct.category,
  );
  const { attributes = [] } = categoriesList[currentCatAttributes] || {};

  const sendNewProduct = () => {
    sendProduct(newProduct)
      .then((response) => {
        console.log(response);
        setProductsList([...productsList, newProduct]);
        setNewProduct(newProductInit());
      })
      .catch((error) => {
        console.log(error);
      });
  };
  useEffect(() => {
    getCategories().then((data) => {
      setCategoriesList([...data]);
    });
  }, []);

  const boxAbsolute = {
    position: 'absolute',
    left: '50%',
    bottom: 0,
    right: 0,
    top: 0,
  };

  const boxStyle = {
    ...boxAbsolute,
    left: '50%',
    right: 0,
    backgroundImage:
      "url('https://images.unsplash.com/photo-1624023749602-02bc0cda1278?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80')",
    // backgroundImage: "url('https://source.unsplash.com/random/?warehouse')",
  };

  return (
    <Box
      sx={{
        top: 0,
        bottom: 0,
        left: 240,
        right: 0,
        position: 'absolute',
      }}
    >
      <Box
        sx={{
          top: 0,
          bottom: 0,
          left: 0,
          right: '50%',
          position: 'absolute',
          overflowY: 'auto',
        }}
      >
        <div>
          <TextField
            label="Search"
            variant="outlined"
            onChange={handleSetSearch}
          />
        </div>
        <h1>Products {filteredProductsList.length} products </h1>
        <div>
          <Link href="/products/new">New Product</Link>
        </div>
        <List>
          {filteredProductsList.map((product) => {
            return <ProductItem key={product.id} product={product} />;
          })}
        </List>
      </Box>
      <Box
        sx={{
          top: 0,
          bottom: 0,
          right: 0,
          left: '50%',
          position: 'absolute',
          backgroundRepeat: 'round',
          backgroundImage:
            "url('https://images.unsplash.com/photo-1624023749602-02bc0cda1278?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80')",
        }}
      />
    </Box>
  );
}

ProductsPage.getInitialProps = async () => {
  const products = await getProducts();
  return { props: { products } };
};

ProductsPage.getLayout = (page) => <Layout title="Products">{page}</Layout>;

export default ProductsPage;
