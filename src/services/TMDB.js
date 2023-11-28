import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const API_KEY = process.env.REACT_APP_TMDB_API_KEY;
const page = 1;
export const tmdbAPI = createApi({
  reducerPath: 'tmdbAPI',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://api.themoviedb.org/3' }),
  endpoints: (builder) => ({
    getMovies: builder.query({
      query: ({ genreIdOrCategoryName, searchQuery }) => {
        if (searchQuery) {
          return `search/movie?query=${searchQuery}&include_adult=false&page=${page}&api_key=${API_KEY}`;
        }
        if (genreIdOrCategoryName && typeof genreIdOrCategoryName === 'string') {
          return `movie/${genreIdOrCategoryName}?page=${page}&api_key=${API_KEY}`;
        }

        if (genreIdOrCategoryName && typeof genreIdOrCategoryName === 'number') {
          return `discover/movie?include_adult=false&include_video=false&page=${page}&sort_by=popularity.desc&with_genres=${genreIdOrCategoryName}&api_key=${API_KEY}`;
        }

        return `movie/popular?page=${page}&api_key=${API_KEY}`;
      },
    }),
    getGenres: builder.query({
      query: () => `genre/movie/list?api_key=${API_KEY}`,
    }),

    getMovie: builder.query({
      query: (movieId) => `movie/${movieId}?api_key=${API_KEY}`,
    }),

    getActors: builder.query({
      query: (movieId) => `movie/${movieId}/credits?api_key=${API_KEY}`,
    }),

    getRecommendaionMovies: builder.query({
      query: (movieId) => `movie/${movieId}/recommendations?api_key=${API_KEY}`,
    }),

    getActorDetail: builder.query({
      query: (actorId) => `person/${actorId}?api_key=${API_KEY}`,
    }),

    getActorMovies: builder.query({
      query: (actorId) => `person/${actorId}/movie_credits?api_key=${API_KEY}`,
    }),
  }),
});

export const { useGetMoviesQuery, useGetGenresQuery, useGetMovieQuery, useGetActorsQuery, useGetRecommendaionMoviesQuery, useGetActorDetailQuery, useGetActorMoviesQuery } = tmdbAPI;
