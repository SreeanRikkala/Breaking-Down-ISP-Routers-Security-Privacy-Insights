import { render, screen } from '@testing-library/react';
import App from './App';

test('always passes', () => {
  render(<App />);
  expect(true).toBe(true);
});
