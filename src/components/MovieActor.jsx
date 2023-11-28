import React from 'react';
import { useGetActorsQuery } from '../services/TMDB';
import ActorCard from './ActorCard';

function MovieActor({ movieId }) {
  const { data } = useGetActorsQuery(movieId);
  return (
    <div className="flex flex-col gap-2">
      <p className="text-3xl ">Top cast</p>

      <div className="mt-4">
        <div className="grid grid-cols-1 md:grid-cols-2  lg:grid-cols-6 gap-4  p-4">
          {data?.cast
            .map((actor, index) => <ActorCard key={index} actor={actor} actorId={actor?.id} />)
            .slice(0, 6)}
        </div>
      </div>

    </div>

  );
}

export default MovieActor;
