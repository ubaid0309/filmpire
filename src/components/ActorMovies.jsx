import React from 'react';
import { useGetActorMoviesQuery } from '../services/TMDB';
import MovieCard from './MovieCard';

function ActorMovies({ actorId }) {
  const { data } = useGetActorMoviesQuery(actorId);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 p-4">
      {data?.cast.map((movie) => (
        <MovieCard movie={movie} key={movie?.id} />
      ))}
    </div>
  );
}

export default ActorMovies;
