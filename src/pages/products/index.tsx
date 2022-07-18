import React, { useState, useEffect } from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import Box from '@mui/material/Box';
import { getProducts, getCategories } from 'src/frontend/utilities/fetchers';
import Layout from '../../frontend/components/layout/Layout';
import ProductItem from '../../frontend/components/pages/ProductItem';

export async function getServerSideProps(context) {
  console.log(context);
  const res = await fetch(`${URL}/products/1`);
  const data = await res.json();
  return { props: { name: data } };
}

const URL = 'http://localhost:3000/api';
type Product = {
  id?: number;
  name: string;
  sku: string;
  brand: string;
  price: number;
  category?: number;
};

const sendProduct = async (product: Product) => {
  return await fetch(`${URL}/products`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(product),
  });
};

// const getProducts = async () => {
//   const response = await fetch(`${URL}/products`);
//   const data = await response.json();
//   return data;
// };

const newProductInit = () => ({
  name: '',
  sku: '',
  brand: '',
  price: 0,
  category: 1,
});

function ProductsPage() {
  const [productsList, setProductsList] = useState([]);
  const [categoriesList, setCategoriesList] = useState([]);
  const [newProduct, setNewProduct] = useState(newProductInit());
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
    getProducts().then((data) => {
      setProductsList([...data]);
    });
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
    backgroundImage: "url('https://source.unsplash.com/random/?warehouse')",
  };

  return (
    <div>
      <Box sx={boxStyle} />
      <Box sx={{ ...boxAbsolute, left: 0, right: '50%' }}>
        <List>
          {productsList.map((product) => {
            return <ProductItem key={product.id} product={product} />;
          })}
        </List>
      </Box>
      <h1>Products</h1>
      <List>
        {/* {categoriesList.map((category) => {
          return (
            <ListItem key={category.id}>
              <span>{category.name}</span>
            </ListItem>
          );
        })} */}
        {/* {productsList.map((product) => {
          return <ProductItem key={product.id} product={product} />;
        })} */}
      </List>
      <button onClick={getProducts}>Get Product</button>
      <div>
        <TextField
          select
          value={newProduct.category}
          onChange={setProductCategory}
        >
          {categoriesList.map((category) => {
            return (
              <MenuItem key={category.id} value={category.id}>
                {category.name}
              </MenuItem>
            );
          })}
        </TextField>
        <TextField
          label="Name"
          value={newProduct.name}
          variant="standard"
          onChange={setProductName}
        />
        <TextField
          label="Sku"
          value={newProduct.sku}
          variant="standard"
          onChange={setProductSKU}
        />
        <TextField
          label="Brand"
          value={newProduct.brand}
          variant="standard"
          onChange={setProductBrand}
        />
        <TextField
          label="Price"
          value={newProduct.price}
          variant="standard"
          onChange={setProductPrice}
        />
      </div>
      {attributes.map((attr) => {
        return (
          <div key={attr.id}>
            <div>{attr.name}</div>
            <TextField select onChange={setProductCategory}>
              {attr.options.map((op) => {
                return (
                  <MenuItem key={op.id} value={op.value}>
                    {op.value}
                  </MenuItem>
                );
              })}
            </TextField>
          </div>
        );
      })}
      <button onClick={sendNewProduct}>Send Product</button>
    </div>
  );
}

ProductsPage.getLayout = (page) => <Layout>{page}</Layout>;

export default ProductsPage;
