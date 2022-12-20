import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Profile, ProfileSchema } from '../types/profileSchema';

const initialState: ProfileSchema = {
  isLoading: false,
  readonly: true,
  error: undefined,
  data: undefined,
};

export const profileSlice = createSlice({
  name: 'profile',
  initialState,
  reducers: { },
});

export const { actions: profileActions } = profileSlice;
export const { reducer: profileReducer } = profileSlice;

export default profileSlice.reducer;
