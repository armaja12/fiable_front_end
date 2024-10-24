import { render, screen } from '@testing-library/react';
import GridVisualizer from './GridVisualizer';

test('renders grid visualizer component', () => {
  render(<GridVisualizer input="2,3 NORTH" />);
  const element = screen.getByText(/N/i); 
  expect(element).toBeInTheDocument();
});
