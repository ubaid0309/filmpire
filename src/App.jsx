import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import MovieInfo from './components/MovieInfo';
import Actors from './components/Actors';
import Profile from './components/Profile';
import Movies from './components/Movies';
import Sidebar from './components/Sidebar';

function App() {
  return (
    <div className="App font-roboto text-white h-screen w-screen overflow-x-hidden overflow-y-scroll">
      <Navbar />
      <main className="flex gap-4">
        <Sidebar />
        <div className="w-[100%] bg-black my-[10%]">
          <Routes>
            <Route path="/" element={<Movies />} />
            <Route path="/movie/:id" element={<MovieInfo />} />
            <Route path="/actors/:id" element={<Actors />} />
            <Route path="/profile/:id" element={<Profile />} />
          </Routes>
        </div>
      </main>
    </div>
  );
}

export default App;
