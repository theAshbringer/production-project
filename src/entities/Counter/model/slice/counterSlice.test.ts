import { counterReducer } from 'entities/Counter';
import { CounterSchema } from '../types/counterSchema';
import { counterActions } from './counterSlice';

describe('counterSlice.test', () => {
  test('should increment by 1', () => {
    const state: CounterSchema = { value: 10 };
    expect(counterReducer(state, counterActions.increment())).toEqual({ value: 11 });
  });
  test('should decrement by 1', () => {
    const state: CounterSchema = { value: 10 };
    expect(counterReducer(state, counterActions.decrement())).toEqual({ value: 9 });
  });
  test('should work with empty state', () => {
    expect(counterReducer(undefined, counterActions.increment())).toEqual({ value: 1 });
  });
});
