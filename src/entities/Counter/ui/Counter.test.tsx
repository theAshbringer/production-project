import { fireEvent, screen } from '@testing-library/react';
import { componentRender } from 'shared/lib/tests/componentRender';
import { Counter } from './Counter';

describe('Counter', () => {
  test('should equal value from state', () => {
    componentRender(<Counter />, {
      initialState: { counter: { value: 10 } },
    });
    expect(screen.getByTestId('value-holder')).toHaveTextContent('10');
  });
  test('increment counter', () => {
    componentRender(<Counter />, {
      initialState: { counter: { value: 10 } },
    });
    fireEvent.click(screen.getByText('Увеличить'));
    expect(screen.getByTestId('value-holder')).toHaveTextContent('11');
  });
  test('decrement counter', () => {
    componentRender(<Counter />, {
      initialState: { counter: { value: 10 } },
    });
    fireEvent.click(screen.getByText('Уменьшить'));
    expect(screen.getByTestId('value-holder')).toHaveTextContent('9');
  });
});
