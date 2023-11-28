import React from 'react';
import { useGetRecommendaionMoviesQuery } from '../services/TMDB';
import MovieCard from './MovieCard';

function MovieRecommendations({ movieId }) {
  const { data } = useGetRecommendaionMoviesQuery(movieId);
  return (
    <div>
      <div className="recommended-movies grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {data?.results.map((movie) => (
          <MovieCard movie={movie} key={movie.id} />
        ))}
      </div>
    </div>
  );
}

export default MovieRecommendations;
