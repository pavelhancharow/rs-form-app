import { createSelector } from '@reduxjs/toolkit';
import { RootState } from '../store';

const profilesState = (state: RootState) => state.profiles;

export const getProfilesSelector = createSelector(
  profilesState,
  (profiles) => profiles
);
