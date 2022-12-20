import { StateSchema } from 'app/providers/StoreProvider/config/StateSchema';
import { DeepPartial } from '@reduxjs/toolkit';
import { getLoginIsLoading } from './getLoginIsLoading';

describe('test getLoginIsLoading', () => {
  test('should return isLoading', () => {
    const state: DeepPartial<StateSchema> = {
      login: {
        isLoading: true,
      },
    };
    expect(getLoginIsLoading(state as StateSchema)).toBe(true);
  });

  test('should work with empty state', () => {
    const state: DeepPartial<StateSchema> = { };
    expect(getLoginIsLoading(state as StateSchema)).toBe(undefined);
  });
});
