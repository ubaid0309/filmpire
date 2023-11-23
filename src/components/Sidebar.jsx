import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { categories, fetchFromAPI, generateIcons, options } from '../utils/constant';
import Loading from './Loading';
import Logo from '../assets/logo.png';

function Sidebar() {
  const [genresCategories, setGenresgenresCategories] = useState([]);
  const isSidebarVisible = useSelector((state) => state.sidebar.isVisible);
  useEffect(() => {
    fetchFromAPI('genre/movie/list?language=en', options).then(
      (res) => setGenresgenresCategories(res.genres),
    );
  }, []);

  if (!genresCategories) return <Loading />;

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
            >
              <span>{category.icon}</span>
              <span>{category?.name}</span>
            </button>
          ))}
        </div>

        <div className="generes flex flex-col gap-4 text-xl p-4">
          <span className="text-2xl font-semibold">Genres</span>
          {genresCategories.map((gen, index) => (
            <button
              type="button"
              key={gen?.id}
              className="flex items-center gap-3 hover:bg-[#252525] transition-all duration-200 p-2 rounded-md"
            >
              <span>{generateIcons[index]?.icon}</span>
              <span>{gen?.name}</span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
