import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchGenres } from './store/slices/genresSlice';
import { fetchFilmsByPage } from './store/slices/filmsSlice'
import { Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import Home from './pages/Home/Home';
import Film from './pages/Film/Film';
import Genre from './pages/Genre/Genre';

function App() {
  const { pageCount } = useSelector((state) => state.filmsData)
  const disaptch = useDispatch()

  useEffect(() => {
    disaptch(fetchGenres())
    disaptch(fetchFilmsByPage(pageCount))
  }, [pageCount])

  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/:id' element={<Film /> } />
        <Route path='/genres/:id' element={<Genre /> }/>
      </Routes>
    </div>
  );
}

export default App;
