import React from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { MdOutlineMovieCreation } from 'react-icons/md';
import { IoMdArrowRoundBack } from 'react-icons/io';
import { useGetActorDetailQuery } from '../services/TMDB';
import ActorMovies from './ActorMovies';

function Actors() {
  const { id: actorId } = useParams();
  const { data } = useGetActorDetailQuery(actorId);
  const navigate = useNavigate();

  return (
    <div>
      <div className="flex flex-col  lg:flex-row gap-6 p-4  ">
        <div className="actor-image w-[100%] lg:w-[40%]  ">
          <img className=" w-[70%] lg:w-[100%] rounded-xl shadow-xl justify-center items-center" src={`https://image.tmdb.org/t/p/w500/${data?.profile_path}`} alt="actor" />
        </div>

        <div className="actor-about w-[100%] px-2 flex flex-col gap-3">
          <p className="actor-full-name text-6xl ">{data?.name}</p>

          <p className="actor-date-of-birth text-2xl">Born : {data?.birthday}</p>

          <p className="about-actor text-justify text-sm">{data?.biography}</p>
          <div className="flex flex-col md:flex-row md:justify-around mt-2 items-center gap-4">
            <Link to={`https://www.imdb.com/name/${data?.imdb_id}`}>
              <button type="button" className="text-xl px-1 py-2 flex items-center gap-1 p-1 bg-blue-700 hover:bg-slate-700 transition-all rounded-md ">IMDB <MdOutlineMovieCreation /></button>
            </Link>
            <button onClick={() => navigate(-1)} type="button" className=" w-fit text-xl px-1 py-2 flex items-center gap-1 p-1 bg-blue-700 hover:bg-slate-700 transition-all rounded-md ">BACK <IoMdArrowRoundBack /></button>
          </div>

        </div>

      </div>
      <div className="actor-movies">
        <ActorMovies actorId={actorId} />
      </div>
    </div>
  );
}

export default Actors;
