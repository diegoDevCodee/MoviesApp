import axios from 'axios';

export async function getMovies(path) {
  const API = 'https://api.themoviedb.org/3';
  const AUTH =
    ' eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzNTZmM2Y1MjI3MmMwYjRjOTgxNjM2MGY4ZTUzMzJmZiIsInN1YiI6IjY1NDMwZGJhMGJjNTI5MDBhZWU4ZTIwMiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.85bZfEqvxSUTy_Arzywvo1JZZ-F3gwSALh_9UeqenKI';
  return axios.get(`${API}${path}`, {
    headers: {
      Authorization: `Bearer ${AUTH}`,
      'Content-Type': 'application/json;charset=utf-8',
    },
  }).then((response) => response.data);
}
