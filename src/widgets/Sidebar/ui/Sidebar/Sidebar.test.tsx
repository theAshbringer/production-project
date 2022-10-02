import { fireEvent, screen } from '@testing-library/react';
import { renderWithTranslation } from 'shared/lib';
import { Sidebar } from './Sidebar';

describe('Sidebar', () => {
  test('render sidebar', () => {
    renderWithTranslation(<Sidebar />);
    expect(screen.getByTestId('sidebar')).toBeInTheDocument();
  });

  test('collapse sidebar', () => {
    renderWithTranslation(<Sidebar />);
    const toggleBtn = screen.getByTestId('sidebar-toggle');
    fireEvent.click(toggleBtn);
    expect(screen.getByTestId('sidebar')).toHaveClass('collapsed');
  });
});
