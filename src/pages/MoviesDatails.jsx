import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getMovies } from '../data/httpClient';

const MoviesDatails = () => {
  const { id } = useParams();

  const [movie, setMovie] = useState([]);
  const { title, overview, poster_path } = movie;
  const [generos, setGeneros] = useState([]);
  console.log(
    '🚀 ~ file: MoviesDatails.jsx:11 ~ MoviesDatails ~ generos:',
    movie
  );



  useEffect(() => {
    getMovies(`/movie/${id}`).then((data) => {
      setMovie(data);
      setGeneros(data.genres);

    });
  }, [id]);

  const imageUrl = 'https://image.tmdb.org/t/p/w300' + poster_path;

  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row">
        <img src={imageUrl} className="max-w-sm rounded-lg shadow-2xl" />
        <div>
          <h1 className="text-5xl font-bold">{title}</h1>
          <p className="py-6">{overview}</p>
          <div className="flex gap-2">
            {generos.map((genero) => (
              <div key={genero.id} className="badge badge-neutral">
                {genero.name}
              </div>
            ))}
          </div>
          {/* <div className="stats stats-vertical sm:stats-horizontal shadow">
            <div className="stat">
              <div className="stat-title">Downloads</div>
              <div className="stat-value">31K</div>
              <div className="stat-desc">Jan 1st - Feb 1st</div>
            </div>

            <div className="stat">
              <div className="stat-title">New Users</div>
              <div className="stat-value">4,200</div>
              <div className="stat-desc">↗︎ 400 (22%)</div>
            </div>

            <div className="stat">
              <div className="stat-title">New Registers</div>
              <div className="stat-value">1,200</div>
              <div className="stat-desc">↘︎ 90 (14%)</div>
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default MoviesDatails;
