import { render, screen } from '@testing-library/react';
import App from './App';

test('renders home page welcome message', () => {
  render(<App />);
  const welcomeElement = screen.getByText(/welcome to the home page/i);
  expect(welcomeElement).toBeInTheDocument();
});
