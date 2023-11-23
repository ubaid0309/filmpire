import { configureStore } from '@reduxjs/toolkit';
import sideBarSlice from '../slice.js/sideBarSlice';
import { tmdbAPI } from '../../services/TMDB';

const store = configureStore({
  reducer: {
    sidebar: sideBarSlice,
    [tmdbAPI.reducerPath]: tmdbAPI.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(tmdbAPI.middleware),
});

export default store;
