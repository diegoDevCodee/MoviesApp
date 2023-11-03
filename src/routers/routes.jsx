import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HeroPage from '../pages/HeroPage';
import MoviesDatails from '../pages/MoviesDatails';

const MyRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<HeroPage />} />
        <Route exact path="/movie/:id" element={<MoviesDatails />} /> 
      </Routes>
    </Router>
  );
};

export default MyRoutes;
