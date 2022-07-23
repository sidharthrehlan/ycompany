import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { styled } from '@mui/material/styles';

import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import { getProduct } from '../../services/products';
import SelectList from '../../uiComponents/SelectList';
import { optionMapper } from '../../helper/helper';
import ProductDescription from './ProductDescription';
import './productDetail.css';

import Layout from '../layout/Layout';
import { useDispatch } from 'react-redux';
import { addProduct } from '../../store/cart/cartSlice';

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

  const dispatch = useDispatch();

  const addToCartHandler = () => {
    if (quantity && size) {
      dispatch(
        addProduct({
          quantity,
          size,
          id: product.id,
          image: product.image,
          description: product.description,
          price: product.price,
          title: product.title,
        })
      );
    }
  };

  const changeSelector = (e) => {
    if (e.target.name === 'quantity') {
      setQuantity(e.target.value);
    } else if (e.target.name === 'size') {
      setSize(e.target.value);
    }
  };

  useEffect(() => {
    const fetchProduct = async (pid) => {
      const response = await getProduct(pid);
      if (Object.keys(response).length > 0) {
        setProduct(response);
      }
    };
    fetchProduct(pid);
  }, [pid]);

  const quantityOptions = optionMapper([1, 2, 3, 4, 5]);

  const sizeOptions = optionMapper(['XS', 'S', 'M', 'L', 'XL']);

  return (
    <Layout>
      {Object.keys(product).length > 0 && (
        <Grid container spacing={3} className='productDetail'>
          <Grid item xs={12} sm={12} md={7} lg={7}>
            <Item className='productDetail-item'>
              <img
                className='productDetail-image'
                src={`${process.env.PUBLIC_URL}/products/${product.image}`}
                alt='{product.title}'
              />
              <Grid item xs={12}>
                <SelectList
                  required={true}
                  options={quantityOptions}
                  label='QTY'
                  changeHandler={changeSelector}
                  value={quantity}
                  classLabel='quantity'
                />
                <SelectList
                  options={sizeOptions}
                  label='Size'
                  changeHandler={changeSelector}
                  value={size}
                  classLabel='size'
                  required={true}
                />
              </Grid>
              <Grid item xs={12}>
                <Button
                  onClick={addToCartHandler}
                  disabled={!quantity || !size}
                  variant='outlined'
                  color='secondary'
                >
                  Add to Cart
                </Button>
              </Grid>
            </Item>
          </Grid>
          <Grid item xs={12} sm={12} md={5} lg={5}>
            <Item className='productDetail-item'>
              <ProductDescription product={product} />
            </Item>
          </Grid>
        </Grid>
      )}
    </Layout>
  );
}

export default ProductDetail;
