import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';
import { apiCountriesSlice } from '../api';
import { profilesKey, profilesReducer } from './profiles/slice.ts';

const rootReducer = combineReducers({
  [apiCountriesSlice.reducerPath]: apiCountriesSlice.reducer,
  [profilesKey]: profilesReducer,
});

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(apiCountriesSlice.middleware),
  });
};

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];

export const useAppDispatch: () => AppDispatch = useDispatch;
