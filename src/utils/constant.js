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

export const generateIcons = {
  action: <GiPunchBlast />,
  adventure: <SiYourtraveldottv />,
  animation: <RiBearSmileLine />,
  comedy: <PiMaskHappyLight />,
  crime: <GiPistolGun />,
  documentary: <GoDeviceCameraVideo />,
  drama: <PiMaskSadLight />,
  family: <MdFamilyRestroom />,
  fantasy: <GrMagic />,
  history: <FaHourglassStart />,
  horror: <GiBloodySword />,
  music: <SlMusicTone />,
  mystery: <GiSpy />,
  romance: <GiLovers />,
  'science fiction': <TbUfo />,
  'tv movie': <PiTelevisionSimple />,
  thriller: <GiHalfDead />,
  war: <GiAxeSword />,
  western: <GiCactus />,
};
export async function fetchFromAPI(url) {
  try {
    const data = await fetch(`${baseURL + url}&api_key=${API_KEY}`);
    const jsonData = await data.json();
    return jsonData;
  } catch (err) {
    return null;
  }
}
