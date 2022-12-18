import { LoginSchema } from 'features/AuthByUsername';
import { User } from 'entities/User/model/types/userSchema';
import axios from 'axios';
import { userActions } from 'entities/User';
import { TestAsyncThunk } from 'shared/lib/tests/TestAsyncThunk/TestAsyncThunk';
import { loginByUsername } from './loginByUsername';

jest.mock('axios');

const mockedAxios = jest.mocked(axios, true);

describe('test loginByUsername', () => {
  const login: LoginSchema = { username: 'login', password: 'password' };

  test('success login', async () => {
    const user: User = { id: '1', username: 'login' };
    mockedAxios.post.mockReturnValue(Promise.resolve({ data: user }));

    const thunk = new TestAsyncThunk(loginByUsername);
    const result = await thunk.callThunk(login);

    expect(thunk.dispatch).toBeCalledWith(userActions.setAuthData(user));
    expect(thunk.dispatch).toBeCalledTimes(3);
    expect(mockedAxios.post).toBeCalled();
    expect(result.meta.requestStatus).toBe('fulfilled');
    expect(result.payload).toEqual(user);
  });

  test('error login', async () => {
    mockedAxios.post.mockReturnValue(Promise.resolve({ status: 401 }));

    const thunk = new TestAsyncThunk(loginByUsername);
    const result = await thunk.callThunk(login);

    expect(thunk.dispatch).toBeCalledTimes(2);
    expect(mockedAxios.post).toBeCalled();
    expect(result.meta.requestStatus).toBe('rejected');
    expect(result.payload).toBe('error');
  });
});
