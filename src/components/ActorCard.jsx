import React from 'react';

function ActorCard({ actor }) {
  return (
    <div className="flex flex-col gap-3">
      <img src={`https://image.tmdb.org/t/p/w500/${actor?.profile_path}`} alt="" />
      <p>{actor?.name}</p>
    </div>
  );
}

export default ActorCard;
