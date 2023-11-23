import { MdOutlineMovieFilter, MdFamilyRestroom } from 'react-icons/md';
import { PiStarThin, PiMaskHappyLight, PiMaskSadLight, PiTelevisionSimple } from 'react-icons/pi';
import { GiTheater, GiPunchBlast, GiBloodySword, GiPistolGun, GiSpy, GiLovers, GiHalfDead, GiAxeSword, GiCactus } from 'react-icons/gi';

import { SiYourtraveldottv } from 'react-icons/si';
import { RiBearSmileLine } from 'react-icons/ri';

import { GoDeviceCameraVideo } from 'react-icons/go';
import { GrMagic } from 'react-icons/gr';
import { FaHourglassStart } from 'react-icons/fa6';
import { SlMusicTone } from 'react-icons/sl';
import { TbUfo } from 'react-icons/tb';

export const API_KEY = process.env.REACT_APP_TMDB_API_KEY;
const baseURL = 'https://api.themoviedb.org/3/';
export const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: API_KEY,
  },
};

export const categories = [
  {
    name: 'Popular',
    icon: <MdOutlineMovieFilter />,
    value: 'popular',
  },
  {
    name: 'Top Rated',
    icon: <PiStarThin />,
    value: 'top_rated',
  },
  {
    name: 'Upcoming',
    icon: <GiTheater />,
    value: 'upcoming',
  },

];

export const generateIcons = [
  { name: 'action', icon: <GiPunchBlast /> },
  { name: 'adventure', icon: <SiYourtraveldottv /> },
  { name: 'animation', icon: <RiBearSmileLine /> },
  { name: 'comedy', icon: <PiMaskHappyLight /> },
  { name: 'crime', icon: <GiPistolGun /> },
  { name: 'documentary', icon: <GoDeviceCameraVideo /> },
  { name: 'drama', icon: <PiMaskSadLight /> },
  { name: 'family', icon: <MdFamilyRestroom /> },
  { name: 'fantasy', icon: <GrMagic /> },
  { name: 'history', icon: <FaHourglassStart /> },
  { name: 'horror', icon: <GiBloodySword /> },
  { name: 'music', icon: <SlMusicTone /> },
  { name: 'mystery', icon: <GiSpy /> },
  { name: 'romance', icon: <GiLovers /> },
  { name: 'science fiction', icon: <TbUfo /> },
  { name: 'tv movie', icon: <PiTelevisionSimple /> },
  { name: 'thriller', icon: <GiHalfDead /> },
  { name: 'war', icon: <GiAxeSword /> },
  { name: 'western', icon: <GiCactus /> },
];

export async function fetchFromAPI(url) {
  try {
    const data = await fetch(`${baseURL + url}&api_key=${API_KEY}`);
    const jsonData = await data.json();
    return jsonData;
  } catch (err) {
    return null;
  }
}
