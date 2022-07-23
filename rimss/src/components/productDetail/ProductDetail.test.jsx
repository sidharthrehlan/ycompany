import { fireEvent, screen } from '@testing-library/react';
// We're using our own custom render function and not RTL's render.
import { renderWithProviders } from '../../utils/test-utils';
import ProductDetail from './ProductDetail';

describe('ProductDetail', () => {
  it('should render Product Detail Page', () => {
    const { container } = renderWithProviders(<ProductDetail />);
    expect(container.querySelector('header')).toBeVisible();
    expect(container.querySelector('footer')).toBeVisible();
  });
});
