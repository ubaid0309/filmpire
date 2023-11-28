import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { IoIosStar, IoIosStarOutline, IoMdArrowRoundBack } from 'react-icons/io';
import { useDispatch } from 'react-redux';
import { CiGlobe } from 'react-icons/ci';
import { MdOutlineMovieCreation, MdLocalMovies } from 'react-icons/md';
import { FaHeart } from 'react-icons/fa6';
import { useGetMovieQuery } from '../services/TMDB';
import Loading from './Loading';
import { generateIcons } from '../utils/constant';
import { selectGenreIdOrCategoryName } from '../redux/slice.js/genreOrCategorySlice';

import MovieActor from './MovieActor';
import MovieRecommendations from './MovieRecommendations';

function MovieInfo() {
  const { id: movieId } = useParams();
  const { data, isFetching, error } = useGetMovieQuery(movieId);
  const dispatch = useDispatch();

  if (isFetching) {
    return <Loading />;
  }

  if (error) { return <div className="text-3xl text-red-600"> Oops {error.message} !</div>; }

  return (
    <div className="movie-details flex flex-col  gap-12 justify-center">
      <div className="flex flex-col lg:flex-row gap-4 justify-center">
        <div className="movie-card w-[40%] mx-auto">
          <img
            className="w-[90%] rounded-lg shadow-2xl hover:scale-105 transition-all duration-300"
            src={`https://image.tmdb.org/t/p/w500${data?.poster_path}`}
            alt=""
          />
        </div>

        <div className="movie-info w-[90%]">
          <div className="movie-content flex flex-col max-w-2xl mx-auto text-xl gap-2">
            <p className="movie-title text-3xl text-center">
              {data?.original_title} ({data?.release_date.split('-')[0]})
            </p>

            <p className="text-center">{data?.tagline}</p>

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

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2 justify-between">
              {data?.genres.map((genre) => (
                <Link to="/">
                  <button
                    className="flex text-xl items-center gap-1"
                    type="button"
                    key={genre?.id}
                    onClick={() => dispatch(selectGenreIdOrCategoryName(genre?.id))}
                  >
                    <span>{generateIcons[genre?.name.toLowerCase()]}</span>
                    <span>{genre.name}</span>
                  </button>
                </Link>
              ))}
            </div>
          </div>

          <div>
            <p className="text-3xl">Overview</p>

            <p>{data?.overview}</p>
          </div>

          <MovieActor movieId={movieId} />

          <div className="movie-info-buttons w-full flex flex-col md:flex-row justify-between items-center md:w-[80%] mx-auto text-blue-400 ">
            <div className=" flex border border-blue-400 p-2 rounded-md">
              <Link to={data?.homepage}><button type="button" className="text-xl flex items-center gap-1 p-1 hover:bg-slate-700 transition-all rounded-md ">WEBSITE <CiGlobe /></button></Link>
              <Link to={`https://www.imdb.com/title/${data?.imdb_id}`}><button type="button" className="text-xl flex items-center gap-1 p-1 hover:bg-slate-700 transition-all rounded-md ">IMDB <MdOutlineMovieCreation /></button></Link>
              <button type="button" className="text-xl flex items-center gap-1 p-1 hover:bg-slate-700 transition-all rounded-md">TRAILER <MdLocalMovies /></button>
            </div>
            <div className=" flex border border-blue-400 p-2 rounded-md">
              <button type="button" className="text-xl flex items-center gap-1 p-1 hover:bg-slate-700 transition-all rounded-md  ">LIKE <FaHeart className="text-slate-700" /></button>
              <button type="button" className="text-xl flex items-center gap-1 p-1 hover:bg-slate-700 transition-all rounded-md ">WATCHLIST +1</button>
              <button type="button" className="text-xl flex items-center gap-1 p-1 hover:bg-slate-700 transition-all rounded-md ">BACK <IoMdArrowRoundBack /></button>
            </div>
          </div>
        </div>
      </div>

      <div className="movie-suggestion">
        <p className="text-2xl md:text-5xl text-center">You might also like</p>

        <MovieRecommendations movieId={movieId} />
      </div>
    </div>
  );
}

export default MovieInfo;
