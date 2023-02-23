import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';
import Movies from './Pages/Movies';
import Celebrity from './Pages/Celebrity';
import Notfound from './Pages/NotFound';
import Tv from './Pages/Tv';
import Header from './components/Header';
import MovieDetail from './Pages/MovieDetail';

function App() {
  return (
    <div>
      <div className="root-wrap">
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/movie" element={<Movies />} />
            <Route path="/movie/:title" element={<MovieDetail />} />
            <Route path="/tv" element={<Tv />} />
            <Route path="/person" element={<Celebrity />} />
            <Route path="/*" element={<Notfound />} />
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
