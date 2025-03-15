import { createSlice } from '@reduxjs/toolkit';
import { ProfileEntity } from '../../models';

const selectedPostsSlice = createSlice({
  name: 'profiles',
  initialState: [] as ProfileEntity[],
  reducers: {
    addProfile: (state, actions) => {
      return [actions.payload, ...state];
    },
  },
});

const {
  actions: profilesActions,
  reducer: profilesReducer,
  name: profilesKey,
} = selectedPostsSlice;

export { profilesReducer, profilesKey, profilesActions };
