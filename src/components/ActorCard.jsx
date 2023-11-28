import React from 'react';
import { Link } from 'react-router-dom';

function ActorCard({ actor, actorId }) {
  return (
    actor?.profile_path
    && (
      <Link to={`/actors/${actorId}`}>
        <div className="flex w-full flex-col gap-3 justify-center items-center">
          <img className="w-[80%] rounded-xl" src={`https://image.tmdb.org/t/p/w500/${actor?.profile_path}`} alt="" />
          <p>{actor?.name}</p>
          <p className="text-gray-500">{actor?.character}</p>
        </div>
      </Link>
    )
  );
}

export default ActorCard;
