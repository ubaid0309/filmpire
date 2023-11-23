import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

function MovieCard({ movie }) {
  const isSideBarVisible = useSelector((state) => state.sidebar.isVisible);

  return (
    <Link to={`/movie/${movie?.id}`}>
      <div className="movie-card flex flex-col justify-center items-center">
        <img className={`movie-poster rounded-lg ${isSideBarVisible ? 'w-[90%]' : 'w-[80%]'} hover:scale-105 transition-all duration-300`} src={`https://image.tmdb.org/t/p/w500/${movie?.poster_path}`} alt="" />
        <p className="movie-title">{movie?.title}</p>
      </div>
    </Link>

  );
}

export default MovieCard;
