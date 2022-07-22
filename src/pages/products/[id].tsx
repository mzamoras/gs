import React from 'react';
import { useRouter } from 'next/router';
import Layout from '@layoutComponents/Layout';
import { getCategories, getProducts } from '@utils/fetchers';
import { Product, Category } from '@globalTypes/global';
// export async function getStaticProps(context) {
//   console.log(context);
//   return { props: { name: 'John' } };
// }

type Props = {
  children?: React.ReactNode;
  props: {
    categories: Category[];
    product: Product;
  };
};

// type Props = {
//   categories: any;
//   product: any;
//   children: any;
// };

function ProductPage({ props }: Props) {
  const { categories, product } = props;
  return <div>{JSON.stringify(product)}</div>;
}

ProductPage.getInitialProps = async ({ query }) => {
  const categories = await getCategories();
  const [product = {}] = await getProducts(query.id);
  console.log(product);
  return { props: { categories, product } };
};

ProductPage.getLayout = (page) => <Layout title="New Product">{page}</Layout>;

export default ProductPage;
