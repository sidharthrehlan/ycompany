import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { styled } from '@mui/material/styles';

import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';

import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { getProduct } from '../../services/products';
import SelectList from '../../uiComponents/SelectList';
import { optionMapper } from '../../helper/helper';

import Layout from '../layout/Layout';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

function ProductDetail() {
  let { pid } = useParams();
  const [product, setProduct] = useState({});
  const [quantity, setQuantity] = useState();
  const [size, setSize] = useState();
  const handleChange = () => {};

  useEffect(() => {
    const fetchProduct = async (pid) => {
      const response = await getProduct(pid);
      if (Object.keys(response).length > 0) {
        setProduct(response);
      }
    };
    fetchProduct(pid);
  }, []);

  const quantityOptions = optionMapper([1, 2, 3, 4, 5]);

  const sizeOptions = optionMapper(['XS', 'S', 'M', 'L', 'XL']);

  return (
    <Layout>
      {Object.keys(product).length > 0 && (
        <Grid item xs={12} sm={6} md={4} lg={3} key={product.id}>
          <Item className='productListing-item'>
            <img
              className='productListing-item-image'
              src={`${process.env.PUBLIC_URL}/products/${product.image}`}
              alt=''
            />
            <div>{product.title}</div>
            <SelectList
              options={quantityOptions}
              label='QTY'
              changeHandler={handleChange}
              value={quantity}
              classLabel='quantity'
            />
            <SelectList
              options={sizeOptions}
              label='Size'
              changeHandler={handleChange}
              value={size}
              classLabel='size'
            />
            <Grid xs={12}>
              <Button variant='outlined'>Add to Cart</Button>
            </Grid>
          </Item>
        </Grid>
      )}
    </Layout>
  );
}

export default ProductDetail;
