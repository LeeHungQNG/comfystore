import { Hero, FeaturedProducts } from '../components';
import { customFetch } from '../utils';

const url = '/products?featured=true';

export const loader = async () => {
  const response = await customFetch(url);
  console.log('🚀 ~ loader ~ response:', response);
  const products = response.data.data;
  return { products };
};

const Landing = () => {
  return (
    <>
      <Hero />
      <FeaturedProducts />
    </>
  );
};
export default Landing;
