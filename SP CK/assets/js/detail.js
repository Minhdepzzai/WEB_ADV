const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwNjczZTg0NDk3NDQzODBjY2RkNTBlMGJiOTZlZjZlYyIsInN1YiI6IjY1NzNkZTdmY2FkYjZiMDBjNjhjZDA1MSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.-kb1M5ZtK3AFYRLz2jD_IALZ4lLhfV6hih4qnyN3Ujo'
    }
  };
  
  fetch('https://api.themoviedb.org/3/movie/popular?language=vi-VN&page=1&region=VNM', options)
    .then(response => response.json())
    .then(response => console.log(response))
    .catch(err => console.error(err));