export type Product = {
  id: number;
  name: string;
  sku: string;
  price: number;
  brand: string;
  category: Category;
  attributes: Attribute[];
};

export type Category = {
  id: number;
  name: string;
  attributes: Attribute[];
};

export type Attribute = {
  id: number;
  name: string;
  options: Option[];
};

export type Option = {
  id: number;
  name: string;
  value: string;
};

export default Product;
