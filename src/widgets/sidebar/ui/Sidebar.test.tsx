import { fireEvent, render, screen } from '@testing-library/react';
import Sidebar from 'widgets/sidebar';
import { renderWithTranslation } from 'shared/lib/tests/render-with-translation/renderWithTranslation';

describe('Sidebar', () => {
  test('render', () => {
    renderWithTranslation(<Sidebar />);
    expect(screen.getByTestId('sidebar')).toBeInTheDocument();
  });

  test('click to toggle button', () => {
    renderWithTranslation(<Sidebar />);
    const toggleBtn = screen.getByTestId('sidebar-toggle');
    fireEvent.click(toggleBtn);
    expect(screen.getByTestId('sidebar')).toHaveClass('collapsed');
  });
});
