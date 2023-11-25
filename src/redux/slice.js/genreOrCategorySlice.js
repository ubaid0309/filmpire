import { createSlice } from '@reduxjs/toolkit';

const genreOrCategorySlice = createSlice({
  name: 'genreOrCategory',
  initialState: {
    genreIdOrCategoryName: '',
    searchQuery: '',
  },

  reducers: {
    selectGenreIdOrCategoryName: (state, action) => {
      state.genreIdOrCategoryName = action.payload;
      state.searchQuery = '';
    },

    searchQuery: (state, action) => {
      state.searchQuery = action.payload;
    },
  },
});

export const { selectGenreIdOrCategoryName, searchQuery } = genreOrCategorySlice.actions;
export default genreOrCategorySlice.reducer;
