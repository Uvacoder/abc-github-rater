import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Dispatch } from 'react';
import { UserRating } from '../algorithms';
import { GetUserData } from '../api';
import { Repository, ResultObject, User, UserState } from '../types';

export const initialState: UserState = {
  user: null,
  repos: null,
  rating: null,
  error: null,
  starred: false,
  loading: false,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setData: (state, { payload }: PayloadAction<any>) => {
      state.user = payload.user;
      state.repos = payload.repos;
      state.starred = payload.isStarred;
      state.loading = false;
      state.error = null;
    },
    setRating: (state, { payload }: PayloadAction<ResultObject[]>) => {
      state.rating = payload;
    },
    setLoading: (state) => {
      state.loading = true;
    },
    setError: (state, { payload }: PayloadAction<string>) => {
      state.user = null;
      state.repos = null;
      state.rating = null;
      state.loading = false;
      state.error = payload;
    },
  },
});

const { setData, setRating, setLoading, setError } = userSlice.actions;
export default userSlice.reducer;

interface UserData {
  user: User;
  repos: Repository[];
  isStarred: Boolean;
}

export const getUser = (userName: string) => async (dispatch: Dispatch<any>) => {
  try {
    dispatch(setLoading());
    const data: UserData | undefined = await GetUserData(userName);

    if (data.user) {
      const result = new UserRating(data.user, data.repos, data.isStarred).getResult();

      dispatch(setRating(result));
      dispatch(setData(data));
    }
  } catch (err) {
    dispatch(setError(err.response?.data.message || err.message || 'User Not Found'));
  }
};