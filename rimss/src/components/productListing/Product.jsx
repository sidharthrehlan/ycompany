import { styled } from '@mui/material/styles';
import { Link } from 'react-router-dom';

import Paper from '@mui/material/Paper';

import Grid from '@mui/material/Grid';

import './ProductListing.css';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

function Product({ product }) {
  return (
    <Grid item xs={12} sm={6} md={4} lg={3} key={product.id}>
      <Item className='productListing-item'>
        <Link to={`/products/${product.id}`}>
          <img
            className='productListing-item-image'
            src={`${process.env.PUBLIC_URL}/products/${product.image}`}
            alt=''
          />
        </Link>
        <div>
          <Link
            to={`/products/${product.id}`}
            className='productListing-item-title'
          >
            {product.title}
          </Link>
          <div className='productListing-item-price'>
            &#8377;{product.price}
          </div>
        </div>
      </Item>
    </Grid>
  );
}

export default Product;
