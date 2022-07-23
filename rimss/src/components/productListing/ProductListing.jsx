import React, { useEffect, useState } from 'react';
import Grid from '@mui/material/Grid';
import { getProducts } from '../../services/products';
import './ProductListing.css';
import Layout from '../layout/Layout';
import Product from './Product';
import ProductSearch from './ProductSearch';
import { searchProductBy } from '../../helper/helper';

function ProductListing() {
  const [products, setProducts] = useState([]);
  const [originalList, setOriginalList] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const products = await getProducts();
      if (products.length > 0) {
        setOriginalList(products);
        setProducts(products);
      }
    };
    fetchProducts();
  }, []);

  const onSearch = (searchKey) => {
    const searchProducts = searchProductBy(originalList, 'title', searchKey);
    setProducts(searchProducts);
  };

  return (
    <Layout>
      <ProductSearch onSearch={onSearch} />
      {products.length > 0 && (
        <Grid container spacing={2} className='productListing'>
          {products.map((product) => {
            return <Product key={product.id} product={product} />;
          })}
        </Grid>
      )}
      {products.length === 0 && (
        <div className='noRecord'> No Product Found</div>
      )}
    </Layout>
  );
}

export default ProductListing;
