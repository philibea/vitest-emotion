import { it, describe, expect } from 'vitest';
import { renderWithTheme } from '../renderWithTheme';
import { Badge } from './Badge';

describe('Badge', () => {
  it('renders ', () => {
    const { container } = renderWithTheme(<Badge>Badge </Badge>);

    expect(container).toMatchSnapshot();
  });
  it('renders disabled ', () => {
    const { container } = renderWithTheme(<Badge disabled>Badge </Badge>);

    expect(container).toMatchSnapshot();
  });
});
