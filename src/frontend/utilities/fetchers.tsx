export const URL = 'http://localhost:3000/api';

export const getProducts = async () => {
  const response = await fetch(`${URL}/products`);
  const data = await response.json();
  return data;
};

export const getCategories = async () => {
  const response = await fetch(`${URL}/categories`);
  const data = await response.json();
  return data;
};
