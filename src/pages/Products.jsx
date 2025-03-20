import { Filters, PaginationContainer, ProductsContainer } from '../components';
import { customFetch } from '../utils';

const url = '/products';

export const loader = async ({ request }) => {
  console.log('🚀 ~ loader ~ request:', request);

  const params = Object.fromEntries([...new URL(request.url).searchParams.entries()]);
  console.log('🚀 ~ loader ~ params:', params);

  const response = await customFetch(url, { params });
  console.log('🚀 ~ loader ~ response:', response);

  const products = response.data.data;
  const meta = response.data.meta;
  return { products, meta, params };
};

const Products = () => {
  return (
    <>
      <Filters />
      <ProductsContainer />
      <PaginationContainer />
    </>
  );
};
export default Products;
