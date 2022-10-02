import { screen } from '@testing-library/react';
import { renderWithTranslation } from 'shared/lib';
import { Sidebar } from './Sidebar';

describe('Sidebar', () => {
  test('simple button', () => {
    renderWithTranslation(<Sidebar />);
    expect(screen.getByTestId('sidebar')).toBeInTheDocument();
  });
});
