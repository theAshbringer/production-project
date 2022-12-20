import { StateSchema } from 'app/providers/StoreProvider/config/StateSchema';
import { DeepPartial } from '@reduxjs/toolkit';
import { getLoginPassword } from './getLoginPassword';

describe('test getLoginPassword', () => {
  test('should return password', () => {
    const state: DeepPartial<StateSchema> = {
      login: {
        password: '123',
      },
    };
    expect(getLoginPassword(state as StateSchema)).toBe('123');
  });

  test('should work with empty state', () => {
    const state: DeepPartial<StateSchema> = { };
    expect(getLoginPassword(state as StateSchema)).toBe('');
  });
});
