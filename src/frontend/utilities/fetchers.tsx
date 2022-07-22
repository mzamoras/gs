export const URL = 'http://localhost:3000/api';

export const getProducts = async (id = null) => {
  const response = await fetch(`${URL}/products${id ? `/${id}` : ''}`);
  const data = await response.json();
  return data;
};

export const getCategories = async () => {
  const response = await fetch(`${URL}/categories`);
  const data = await response.json();
  return data;
};
