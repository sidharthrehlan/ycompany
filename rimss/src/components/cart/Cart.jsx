import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';

import './Cart.css';
import Layout from '../layout/Layout';

import { useSelector, useDispatch } from 'react-redux';
import { removeProduct } from '../../store/cart/cartSlice';
import IconButton from '@mui/material/IconButton';
import Close from '@mui/icons-material/Close';
import { ProductPrice } from '../../uiComponents/ProductsUtitlity';

function Cart() {
  const products = useSelector((state) => state.cart.products);
  const totalPrice = useSelector((state) => state.cart.totalPrice);

  const dispatch = useDispatch();

  const removeItem = (id) => {
    dispatch(removeProduct(id));
  };

  return (
    <Layout>
      <div className='cart'>
        <h1>Cart</h1>
        {products.length > 0 ? (
          <Grid container spacing={3}>
            <Grid item xs={12} sm={12} md={7} lg={7}>
              <div className='cart-items'>
                {products.map(({ id, price, title, quantity, size, image }) => {
                  return (
                    <Paper key={id}>
                      <div className='cart-item'>
                        <div className='cart-product-image'>
                          <img
                            src={`${process.env.PUBLIC_URL}/products/${image}`}
                            alt={title}
                          />
                        </div>
                        <div className='cart-product-detail'>
                          <h3 className='cart-product-title'>{title}</h3>
                          <div className='cart-product-quanity'>
                            Quantity: {quantity}
                          </div>
                          <div className='cart-product-size'>Size: {size}</div>
                          <div className='cart-product-price'>
                            Price: {price}
                          </div>
                          <div className='cart-product-action'>
                            <IconButton
                              color='secondary'
                              onClick={() => removeItem(id)}
                              className='cart-product-action'
                            >
                              <Close></Close>
                            </IconButton>
                          </div>
                        </div>
                      </div>
                    </Paper>
                  );
                })}
              </div>
            </Grid>
            <Grid item xs={12} sm={12} md={5} lg={5}>
              <Paper className='cart-checkout-block'>
                <div className='cart-total-price'>
                  <div className='cart-total-price'>
                    Total Price:
                    <ProductPrice price={totalPrice} />
                  </div>
                </div>
                <div className='cart-checkout-button'>
                  <Button color='secondary' variant='contained'>
                    Checkout
                  </Button>
                </div>
              </Paper>
            </Grid>
          </Grid>
        ) : (
          <h3>Your Cart is empty!!</h3>
        )}
      </div>
    </Layout>
  );
}

export default Cart;
