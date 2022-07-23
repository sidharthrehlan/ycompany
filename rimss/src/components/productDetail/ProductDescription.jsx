import React from 'react';
import styled from 'styled-components';
const ProductTitle = styled.h2`
  text-transform: uppercase;
  text-align: center;
`;

function ProductDescription({ product }) {
  const { title, id, description, price } = product;
  return (
    <div className='productDesciption'>
      <ProductTitle>{title}</ProductTitle>
      <p> #{id}</p>
      <h3>Description: </h3>
      <p>{description}</p>
      <p>
        Price: <strong>{price}</strong>
      </p>
    </div>
  );
}

export default ProductDescription;
