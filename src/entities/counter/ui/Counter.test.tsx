import { fireEvent, screen } from '@testing-library/react';
import { ComponentRender } from 'shared/config/tests/component-render/ComponentRender';
import { Counter } from './Counter';

describe('Counter', () => {
  test('render', () => {
    ComponentRender(<Counter />, { initialState: { counter: { value: 10 } } });
    expect(screen.getByTestId('value-title')).toHaveTextContent('10');
  });

  test('click to increment button', () => {
    ComponentRender(<Counter />, { initialState: { counter: { value: 10 } } });
    const incrementBtn = screen.getByTestId('increment-button');
    fireEvent.click(incrementBtn);
    expect(screen.getByTestId('value-title')).toHaveTextContent('11');
  });

  test('click to decrement button', () => {
    ComponentRender(<Counter />, { initialState: { counter: { value: 10 } } });
    const incrementBtn = screen.getByTestId('decrement-button');
    fireEvent.click(incrementBtn);
    expect(screen.getByTestId('value-title')).toHaveTextContent('9');
  });
});
