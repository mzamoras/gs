import React from 'react';
import { useRouter } from 'next/router';
// export async function getStaticProps(context) {
//   console.log(context);
//   return { props: { name: 'John' } };
// }

function ProductPage() {
  const router = useRouter();
  const { id } = router.query;
  return <div>ProductPage {id}</div>;
}

export default ProductPage;
