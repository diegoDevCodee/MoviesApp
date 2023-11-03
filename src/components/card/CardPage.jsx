import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const CardPage = ({ movie }) => {
  const { id, title, poster_path, vote_average } = movie;
  console.log('🚀 ~ file: CardPage.jsx:3 ~ CardPage ~ movie:', movie);

  const imageUrl = 'https://image.tmdb.org/t/p/w300' + poster_path;

  // convertir un numero a string
  const average = vote_average.toString().replace('.', '');

  return (
    <div className="card w-72 bg-base-200 shadow-xl mt-10">
      <figure className='rounded-md'>
        <img className='object-cover' width={230} height={200} src={imageUrl} alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        {/* <div
          className="radial-progress text-primary"
          style={{ '--value': average, '--size': '2rem', "--thickness": "2px"}}
        > */}
        <div
          className="radial-progress"
          style={{ '--value': average, '--size': '2rem', '--thickness': '2px' }}
        >
          {vote_average}
        </div>
        <Link to={`/movie/${id}`}>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Overview</button>
          </div>
        </Link>
      </div>
    </div>
  );
};

CardPage.propTypes = {
  movie: PropTypes.shape({
    id: PropTypes.number,
    title: PropTypes.string,
    poster_path: PropTypes.string,
    vote_average: PropTypes.number,
  }),
};

export default CardPage;
