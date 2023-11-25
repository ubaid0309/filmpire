import { useSelector } from 'react-redux';
import MoviesList from './MoviesList';
import { useGetMoviesQuery } from '../services/TMDB';
import Loading from './Loading';

function Movies() {
  const { genreIdOrCategoryName, searchQuery } = useSelector((state) => state.genreOrCategory);
  const { data, isFetching } = useGetMoviesQuery({ genreIdOrCategoryName, searchQuery });

  if (data?.results.length <= 0) return <div className="text-5xl font-semibold">No moives found ! <span className="text-red-600"> related to yourt search</span></div>;

  return (
    <div className="text-white">
      {isFetching ? <Loading /> : <MoviesList movies={data?.results} /> }
    </div>
  );
}

export default Movies;
