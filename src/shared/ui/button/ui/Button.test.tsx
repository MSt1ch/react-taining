/* eslint-disable i18next/no-literal-string */
import { render, screen } from '@testing-library/react';
import { Button, ThemeButton } from './Button';

describe('Button', () => {
  test('render', () => {
    render(<Button>toggle</Button>);
    expect(screen.getByText('toggle')).toBeInTheDocument();
  });

  test('render with class', () => {
    render(<Button className={ThemeButton.CLEAR}>test</Button>);
    expect(screen.getByText('test')).toHaveClass('clear');
  });
});
