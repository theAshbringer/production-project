import { LoginSchema } from 'features/AuthByUsername';
import { User } from 'entities/User/model/types/userSchema';
import axios from 'axios';
import { Dispatch } from '@reduxjs/toolkit';
import { userActions } from 'entities/User';
import { loginByUsername } from './loginByUsername';

jest.mock('axios');

const mockedAxios = jest.mocked(axios, true);

describe('test loginByUsername', () => {
  let dispatch: Dispatch;
  let getState: () => void;
  const login: LoginSchema = { username: 'login', password: 'password' };

  beforeEach(() => {
    dispatch = jest.fn();
    getState = jest.fn();
  });

  test('success login', async () => {
    const user: User = {
      id: '1',
      username: 'login',
    };
    mockedAxios.post.mockReturnValue(Promise.resolve({ data: user }));
    const action = loginByUsername(login);

    const result = await action(dispatch, getState, undefined);
    expect(dispatch).toBeCalledWith(userActions.setAuthData(user));
    expect(dispatch).toBeCalledTimes(3);
    expect(mockedAxios.post).toBeCalled();
    expect(result.meta.requestStatus).toBe('fulfilled');
    expect(result.payload).toEqual(user);
  });

  test('error login', async () => {
    mockedAxios.post.mockReturnValue(Promise.resolve({ status: 401 }));
    const action = loginByUsername(login);

    const result = await action(dispatch, getState, undefined);
    expect(dispatch).toBeCalledTimes(2);
    expect(mockedAxios.post).toBeCalled();
    expect(result.meta.requestStatus).toBe('rejected');
    expect(result.payload).toBe('error');
  });
});
