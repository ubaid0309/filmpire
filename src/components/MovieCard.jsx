import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { IoIosStar, IoIosStarOutline } from 'react-icons/io';

function MovieCard({ movie }) {
  const isSideBarVisible = useSelector((state) => state.sidebar.isVisible);
  const [starRating, setStarRating] = useState(parseInt(movie?.vote_average / 2, 10));
  return (
    movie?.poster_path
    && (
    <Link to={`/movie/${movie?.id}`}>
      <div className="movie-card flex flex-col justify-center items-center gap-2">
        <img className={`movie-poster rounded-lg ${isSideBarVisible ? 'w-[90%]' : 'w-[80%]'} hover:scale-105 transition-all duration-300`} src={`https://image.tmdb.org/t/p/w500/${movie?.poster_path}`} alt="" />
        <p className="movie-title text-2xl">{movie?.title}</p>
        <div className="movie-rating flex gap-1">
          {[...Array(Math.round(starRating))].map((star, index) => <span className="rating-star" key={index}><IoIosStar className="text-staryellow text-xl" /></span>)}
          {[...Array(Math.round(5 - starRating))].map((star, index) => <span className="rating-star" key={index}><IoIosStarOutline className="text-gray-700 text-xl" /></span>)}

        </div>
      </div>
    </Link>
    )

  );
}

export default MovieCard;
