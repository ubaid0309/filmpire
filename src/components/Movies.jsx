import MoviesList from './MoviesList';
import { useGetMoviesQuery } from '../services/TMDB';
import Loading from './Loading';

function Movies() {
  const { data, isFetching } = useGetMoviesQuery();
  // console.log(data);
  if (isFetching) return <Loading />;

  return (
    <div className="text-white">
      <MoviesList movies={data?.results} />
    </div>
  );
}

export default Movies;
