import { configureStore } from '@reduxjs/toolkit';
import sideBarSlice from '../slice.js/sideBarSlice';
import { tmdbAPI } from '../../services/TMDB';
import genreOrCategorySlice from '../slice.js/genreOrCategorySlice';

const store = configureStore({
  reducer: {
    sidebar: sideBarSlice,
    [tmdbAPI.reducerPath]: tmdbAPI.reducer,
    genreOrCategory: genreOrCategorySlice,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(tmdbAPI.middleware),
});

export default store;
