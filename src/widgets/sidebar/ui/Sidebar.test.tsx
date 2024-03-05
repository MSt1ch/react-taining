import { fireEvent, screen } from '@testing-library/react';
import Sidebar from 'widgets/sidebar';
import { ComponentRender } from 'shared/config/tests/component-render/ComponentRender';

describe('Sidebar', () => {
  test('render', () => {
    ComponentRender(<Sidebar />);
    expect(screen.getByTestId('sidebar')).toBeInTheDocument();
  });

  test('click to toggle button', () => {
    ComponentRender(<Sidebar />);
    const toggleBtn = screen.getByTestId('sidebar-toggle');
    fireEvent.click(toggleBtn);
    expect(screen.getByTestId('sidebar')).toHaveClass('collapsed');
  });
});
