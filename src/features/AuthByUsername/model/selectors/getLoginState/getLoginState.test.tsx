import { DeepPartial } from '@reduxjs/toolkit';
import { StateSchema } from 'app/providers/StoreProvider';
import { getLoginState } from './getLoginState';

describe('getLoginState', () => {
  test('should return login state', () => {
    const state: DeepPartial<StateSchema> = {
      login: {
        username: 'username',
        password: 'password',
      },
    };
    expect(getLoginState(state as StateSchema)).toEqual({
      username: 'username',
      password: 'password',
    });
  });
});
