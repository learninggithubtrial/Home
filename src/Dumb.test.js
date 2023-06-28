import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom'
import Dumb from './Dumb';

it('renders the component with correct text', () => {
  const { getByText } = render(<Dumb />);
  const textElement = getByText(/Hello World/i);
  expect(textElement).toBeInTheDocument();
});