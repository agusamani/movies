export function addMovieFavorite(payload) {
  return { 
    type: "ADD_MOVIE_FAVORITE", 
    payload 
  };
}

export function removeMovieFavorite(payload) {
  return {
    type: 'REMOVE_MOVIE_FAVORITE',
    payload
  }
}

export function getMovies(titulo) {
  return function(dispatch) {
    return fetch(`http://www.omdbapi.com/?apikey=${process.env.REACT_APP_API_KEY}&s=${titulo}`)
      .then(response => response.json())
      .then(peliculas => dispatch({ type: "GET_MOVIES", payload: peliculas }));
  };
}

export function getMovieDetail(id) {
  return function(dispatch) {
    return fetch(`http://www.omdbapi.com/?apikey=${process.env.REACT_APP_API_KEY}&i=${id}`)
            .then(res => res.json())
            .then(pelicula => dispatch({type: 'GET_MOVIE_DETAIL', payload: pelicula}))
  }
}