import { Route, Routes } from 'react-router-dom';
import ProductListing from './components/productListing/ProductListing';
import ProductDetail from './components/productDetail/ProductDetail';
import Cart from './components/cart/Cart';
import About from './components/About';

const SiteRoutes = () => {
  return (
    <Routes>
      <Route path='/' element={<ProductListing />} />
      <Route path='cart' element={<Cart />} />
      <Route path='products' element={<ProductListing />} />
      <Route path='products/:pid' element={<ProductDetail />} />
      <Route path='about' element={<About />} />
    </Routes>
  );
};

export default SiteRoutes;
