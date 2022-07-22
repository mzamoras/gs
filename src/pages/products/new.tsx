import React, { useState } from 'react';
import Layout from '@layoutComponents/Layout';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import { getCategories } from '@utils/fetchers';
import { Category, Product } from '@globalTypes/global';

const URL = 'http://localhost:3000/api';

type Props = {
  props: {
    categories: Category[];
  };
};

type NewProduct = {
  name: Product['name'];
  sku: Product['sku'];
  brand: Product['brand'];
  price: Product['price'];
  category?: number;
  attributes?: {
    [key: string]: string;
  };
};

const newProductInit = (): NewProduct => ({
  name: '',
  sku: '',
  brand: '',
  price: 0,
  category: null,
});

const sendProduct = async (product) => {
  return await fetch(`${URL}/products`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(product),
  });
};

function newProductPage({ props }: Props) {
  const { categories } = props;
  const [newProduct, setNewProduct] = useState(newProductInit());
  const currentCatAttributes = categories.findIndex(
    (c) => c.id === newProduct.category,
  );
  const { attributes = [] } = categories[currentCatAttributes] || {};

  const setProductName = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setNewProduct({ ...newProduct, name: value });
  };
  const setProductSKU = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setNewProduct({ ...newProduct, sku: value });
  };
  const setProductBrand = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setNewProduct({ ...newProduct, brand: value });
  };
  const setProductPrice = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value }: { value: unknown } = e.target;
    setNewProduct({ ...newProduct, price: value as number });
  };
  const setProductCategory = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value }: { value: unknown } = e.target;
    setNewProduct({ ...newProduct, category: value as number });
  };

  const setProductAttribute = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value }: { value: unknown } = e.target;
    const { name } = e.target;
    setNewProduct({
      ...newProduct,
      attributes: { ...newProduct.attributes, [name]: value as string },
    });
  };

  const sendNewProduct = () => {
    sendProduct(newProduct)
      .then((response) => {
        console.log(response);
        sendProduct(newProductInit());
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div>
      <h1>New Product</h1>
      <div>
        <TextField
          select
          value={newProduct.category}
          onChange={setProductCategory}
        >
          {categories.map((category) => {
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
      <div>
        {attributes.map((attr) => {
          return (
            <div key={attr.id}>
              {attr.options.length > 0 && (
                <TextField
                  select
                  name={attr.id.toString()}
                  label={attr.name}
                  onChange={setProductAttribute}
                >
                  {attr.options.map((op) => {
                    return (
                      <MenuItem key={op.id} value={op.value}>
                        {op.value}
                      </MenuItem>
                    );
                  })}
                </TextField>
              )}
              {!attr.options.length && (
                <TextField
                  variant="standard"
                  label={attr.name}
                  name={attr.id.toString()}
                  onChange={setProductAttribute}
                />
              )}
            </div>
          );
        })}
      </div>
      <button onClick={sendNewProduct}>Send Product</button>
      {/* {categories.map((category) => {
        return (
          <div key={category.id}>
            <div>{category.name}</div>
            {category.attributes.map((attribute) => {
              return (
                <div key={attribute.id}>
                  <div>{attribute.name}</div>
                  {attribute.options.map((option) => {
                    return (
                      <div key={option.id}>
                        <div>{option.value}</div>
                      </div>
                    );
                  })}
                </div>
              );
            })}
          </div>
        );
      })} */}
    </div>
  );
}
newProductPage.getInitialProps = async () => {
  const categories = await getCategories();
  return { props: { categories } };
};

newProductPage.getLayout = (page) => (
  <Layout title="New Product">{page}</Layout>
);

export default newProductPage;
