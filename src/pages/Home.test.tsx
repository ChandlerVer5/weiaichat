import { screen } from '@testing-library/react';
import { render } from '@test-utils';
import Home from './Home';

it('displays welcome text', () => {
  render(<Home />);
  expect(screen.getByText('Welcome to Mantine!')).toBeInTheDocument();
});
