import { renderWithTheme } from '../renderWithTheme';
import { it, expect } from 'vitest';
import { App } from '../App';

it('renders', () => {
  const { container } = renderWithTheme(<App />);

  expect(container).toMatchSnapshot();
});
