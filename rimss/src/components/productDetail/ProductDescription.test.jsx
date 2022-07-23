import { screen } from '@testing-library/react';

import { renderWithProviders } from '../../utils/test-utils';
import ProductDescription from './ProductDescription';

describe('ProductDescription', () => {
  it('should render Product Description', () => {
    const product = {
      title: 'Levis',
      id: 1,
      description: 'foo',
      price: 200,
    };
    renderWithProviders(<ProductDescription product={product} />);
    expect(screen.queryByText('Levis')).toBeVisible();
    expect(screen.queryByText('#1')).toBeVisible();
    expect(screen.queryByText('foo')).toBeVisible();
    expect(screen.queryByText('200')).toBeVisible();
  });
});
