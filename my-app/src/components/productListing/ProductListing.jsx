import React, { useEffect, useState } from 'react';
import { styled } from '@mui/material/styles';

import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';

import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { getProducts } from '../../services/products';
import './ProductListing.css';
import Layout from '../layout/Layout';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

function ProductListing() {
  const [products, setProducts] = useState([]);
  const [quantity, setQuantity] = useState();
  const [size, setSize] = useState();
  const handleChange = () => {};
  useEffect(() => {
    const fetchProducts = async () => {
      const products = await getProducts();
      if (products.length > 0) {
        setProducts(products);
      }
    };
    fetchProducts();
  }, []);
  return (
    <Layout>
      <Grid container spacing={2} className='productListing'>
        {products.map((product) => {
          return (
            <Grid item xs={12} sm={6} md={4} lg={3} key={product.id}>
              <Item className='productListing-item'>
                <img
                  className='productListing-item-image'
                  src={`${process.env.PUBLIC_URL}/products/${product.image}`}
                  alt=''
                />
                <div>{product.title}</div>
                <FormControl sx={{ m: 1, minWidth: 80 }} size='small'>
                  <InputLabel id='quantity-label'>QYT</InputLabel>
                  <Select
                    labelId='quantity-label'
                    id='quantity-select'
                    value={quantity}
                    label='QYT'
                    onChange={handleChange}
                  >
                    <MenuItem value={1}>1</MenuItem>
                    <MenuItem value={2}>2</MenuItem>
                    <MenuItem value={3}>3</MenuItem>
                    <MenuItem value={4}>4</MenuItem>
                    <MenuItem value={5}>5</MenuItem>
                  </Select>
                </FormControl>
                <FormControl sx={{ m: 1, minWidth: 80 }} size='small'>
                  <InputLabel id='size-label'>Size</InputLabel>
                  <Select
                    labelId='size-label'
                    id='size-select'
                    value={size}
                    label='Size'
                    onChange={handleChange}
                  >
                    <MenuItem value={'XS'}>XS</MenuItem>
                    <MenuItem value='S'>S</MenuItem>
                    <MenuItem value='M'>M</MenuItem>
                    <MenuItem value='L'>L</MenuItem>
                    <MenuItem value='XL'>XL</MenuItem>
                  </Select>
                </FormControl>
                <Grid xs={12}>
                  <Button variant='outlined'>Add to Cart</Button>
                </Grid>
              </Item>
            </Grid>
          );
        })}
      </Grid>
    </Layout>
  );
}

export default ProductListing;
