import React from 'react';
import { useSelector } from 'react-redux';
import MovieCard from './MovieCard';

function MoviesList({ movies }) {
  const { isVisible } = useSelector((state) => state.sidebar);
  return (
    <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 ${isVisible ? 'xl:grid-cols-4 2xl:grid-cols-5' : 'xl:grid-cols-5 2xl:grid-cols-6'} gap-4`}>
      {movies.map((movie, index) => (
        <MovieCard key={index} movie={movie} />
      ))}
    </div>
  );
}

export default MoviesList;
