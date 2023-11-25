import React, { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { IoIosStar, IoIosStarOutline } from 'react-icons/io';
import { useDispatch } from 'react-redux';
import { useGetMovieQuery } from '../services/TMDB';
import Loading from './Loading';
import { generateIcons } from '../utils/constant';
import { selectGenreIdOrCategoryName } from '../redux/slice.js/genreOrCategorySlice';

function MovieInfo() {
  const { id: movieId } = useParams();
  const { data, isFetching, error } = useGetMovieQuery(movieId);
  const dispatch = useDispatch();
  console.log(data);

  if (isFetching) {
    return <Loading />;
  }
  return (
    <div className="movie-details flex flex-col lg:flex-row gap-4 justify-center">
      <div className="movie-card w-[40%] mx-auto">
        <img
          className="w-[90%] rounded-lg shadow-2xl hover:scale-105 transition-all duration-300"
          src={`https://image.tmdb.org/t/p/w500${data?.poster_path}`}
          alt=""
        />
      </div>

      <div className="movie-info w-[90%]">
        <div className="movie-content flex flex-col text-xl gap-2">
          <p className="movie-title text-3xl">
            {data?.original_title} ({data?.release_date.split('-')[0]})
          </p>

          <p>{data?.tagline}</p>

          <div className="flex justify-between flex-wrap">
            <div className="flex gap-1">
              {Array(Math.round(parseInt(data?.vote_average / 2, 10)))
                .fill(0)
                .map((rating, index) => (
                  <span key={index}>
                    <IoIosStar className="text-staryellow text-xl" />
                  </span>
                ))}
              {Array(Math.round(5 - parseInt(data?.vote_average / 2, 10)))
                .fill(0)
                .map((rating, index) => (
                  <span key={index + 1}>
                    <IoIosStarOutline className="text-gray-700 text-xl" />
                  </span>
                ))}

              <span>{data?.vote_average.toFixed(2)} / 10</span>
            </div>

            <div>
              <span>
                {data?.runtime > 60
                  ? `${Math.round(data?.runtime / 60)}hrs`
                  : `${data?.runtime} min`}{' '}
                /{' '}
              </span>
              <span> {data?.spoken_languages[0].name}</span>
            </div>
          </div>

          <div className="flex gap-2 justify-between">
            {data?.genres.map((genre, index) => (
              <Link to="/">
                <button
                  className="flex text-xl items-center gap-1"
                  type="button"
                  key={genre.id}
                  onClick={() => dispatch(selectGenreIdOrCategoryName(genre?.id))}
                >
                  <span>{generateIcons[genre?.name.toLowerCase()]}</span>
                  <span>{genre.name}</span>
                </button>
              </Link>

            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default MovieInfo;
