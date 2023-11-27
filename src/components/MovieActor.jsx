import React from 'react';
import { Link } from 'react-router-dom';

import { useGetActorsQuery } from '../services/TMDB';
import ActorCard from './ActorCard';

function MovieActor({ movieId }) {
  const { data } = useGetActorsQuery(movieId);
  // console.log(data);
  return (
    <div className="flex flex-col gap-2">
      <p className="text-3xl ">Top cast</p>
      <Link to={`/actors/${data?.id}`}>
        <div className="mt-4">
          <div className="grid grid-cols-1 md:grid-cols-2  lg:grid-cols-6 gap-4  p-4">
            {data?.cast
              .map((actor, index) => <ActorCard key={index} actor={actor} />)
              .slice(0, 6)}
          </div>
        </div>
      </Link>

    </div>

  );
}

export default MovieActor;
