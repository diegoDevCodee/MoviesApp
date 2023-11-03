import CardPage from '../components/card/CardPage';
import { getMovies } from '../data/httpClient';
import { useEffect, useState } from 'react';

const HeroPage = () => {
  const [movies, setMovies] = useState([]);
  // Aqui voy a generar un loading para que se muestre mientras se cargan las peliculas
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getMovies('/discover/movie').then((data) => {
      setMovies(data.results)
      setLoading(false);
    }, 3000);
    // Aqui voy a quitar el loading cuando se carguen las peliculas

  } , []);

  return (
    <div className="min-h-screen flex flex-wrap justify-center items-center gap-6">
      {loading ? (
        <span className="loading loading-spinner loading-lg"></span>
      ) : (
        movies.map((movie) => <CardPage key={movie.id} movie={movie} />)
      )}
    </div>
  );
};

export default HeroPage;
