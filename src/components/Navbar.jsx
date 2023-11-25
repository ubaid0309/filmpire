import React, { useState } from 'react';
import { IoSearchOutline } from 'react-icons/io5';
import { RiUser3Fill } from 'react-icons/ri';
import { RxHamburgerMenu } from 'react-icons/rx';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import Logo from '../assets/logo.png';
import { toggleSidebar } from '../redux/slice.js/sideBarSlice';
import { searchQuery } from '../redux/slice.js/genreOrCategorySlice';

function Navbar() {
  const [searchValue, setSearchValue] = useState('');
  const dispatch = useDispatch();

  const submitHandler = (event) => {
    event.preventDefault();
    dispatch(searchQuery(searchValue));
  };
  return (
    <div className="navbar fixed bg-black w-full text-white flex justify-between items-center px-4 py-4">

      <div className="hidden md:block">
        <Link to="/"><img src={Logo} alt="filmpire-logo" /></Link>
      </div>

      <div className="flex items-center border rounded-lg gap-2 border-gray-700 p-2">
        <span>
          <IoSearchOutline className="text-lg" />
        </span>
        <form onSubmit={submitHandler}>
          <input
            type="text"
            placeholder="Search for movies"
            className="outline-none bg-black text-white border-none  md:w-full"
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
          />
        </form>

      </div>

      <div>
        <button
          className="flex items-center "
          type="button"
        >
          <span>
            <RiUser3Fill className=" rounded-full p-2 text-white" />
          </span>
          LOGIN
        </button>
      </div>

      <div className="hamburger">
        <button
          onClick={() => dispatch(toggleSidebar())}
          type="button"
        >
          <RxHamburgerMenu className="text-xl" />
        </button>
      </div>
    </div>
  );
}
export default Navbar;
