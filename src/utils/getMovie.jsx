
const getMovieImg = (path, width) => {
  return path ? `https://image.tmdb.org/t/p/w${width}${path}` : 'https://via.placeholder.com/300x450?text=Image+Not+Found'
}

export default getMovieImg