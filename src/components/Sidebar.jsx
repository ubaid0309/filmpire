import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { categories, generateIcons } from '../utils/constant';
import Logo from '../assets/logo.png';
import { useGetGenresQuery } from '../services/TMDB';
import { selectGenreIdOrCategoryName } from '../redux/slice.js/genreOrCategorySlice';

function Sidebar() {
  const { genreIdOrCategoryName } = useSelector((state) => state.genreOrCategory);
  const { data } = useGetGenresQuery();
  const isSidebarVisible = useSelector((state) => state.sidebar.isVisible);
  const dispatch = useDispatch();

  if (!data) return null;

  return (
    <div
      className={`w-full lg:w-[25%] xl:w-[15%] overflow-scroll pt-[16%] md:pt-[14%] lg:pt-[12%] xl:pt-[5%] ${isSidebarVisible ? 'block' : 'hidden'
      } `}
    >
      <div className="flex flex-col gap-2">
        <div className="md:hidden">
          <Link to="/"><img src={Logo} alt="filmpire-logo" /></Link>
        </div>
        <div className="categories border-y border-gray-700 flex flex-col gap-4 text-xl  p-4">
          <span className="text-2xl font-semibold">Categories</span>
          {categories.map((category) => (
            <button
              type="button"
              key={category.value}
              className="flex items-center gap-3 hover:bg-[#252525] transition-all duration-200 p-2 rounded-md"
              onClick={() => dispatch(selectGenreIdOrCategoryName(category.value))}
            >
              <span>{category.icon}</span>
              <span>{category?.name}</span>
            </button>
          ))}
        </div>

        <div className="generes flex flex-col gap-4 text-xl p-4">
          <span className="text-2xl font-semibold">Genres</span>
          {data?.genres.map((gen) => (
            <button
              type="button"
              key={gen?.id}
              className="flex items-center gap-3 hover:bg-[#252525] transition-all duration-200 p-2 rounded-md"
              onClick={() => dispatch(selectGenreIdOrCategoryName(gen?.id))}
            >
              <span>{generateIcons[gen?.name.toLowerCase()]}</span>
              <span>{gen?.name}</span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
