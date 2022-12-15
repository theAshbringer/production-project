import { StateSchema } from 'app/providers/StoreProvider/config/StateSchema';
import { DeepPartial } from '@reduxjs/toolkit';
import { getLoginUsername } from './getLoginUsername';

describe('test getLoginUsername', () => {
  test('should return username', () => {
    const state: DeepPartial<StateSchema> = {
      login: {
        username: 'username',
      },
    };
    expect(getLoginUsername(state as StateSchema)).toBe('username');
  });

  test('should work with empty state', () => {
    const state: DeepPartial<StateSchema> = { };
    expect(getLoginUsername(state as StateSchema)).toBe('');
  });
});
