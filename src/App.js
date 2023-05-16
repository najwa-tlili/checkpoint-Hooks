import React, { useState } from 'react';
import MovieList from './components/MovieList';
import AddMovie from './components/AddMovie';
import Filter from './components/Filter';
import "./App.css";
import {Data} from "./Data";

function App() {

  const [movies, setMovies] = useState(Data);
  const [title, setTitle] = useState('');
  const [rating, setRating] = useState(0);

  const addMovie = (newMovie) => {
    console.log(newMovie);
    setMovies([...movies, newMovie]);
  };

  return (
    
    <div className="row">
    <div className="col-md-6 offset-md-3">
      <AddMovie addMovie={addMovie} />
      <Filter setTitle={setTitle} title={title} rating={rating} setRating={setRating} />
      <MovieList movies={movies} title={title} rating={rating} />
      </div>
    </div>
   
  );
}

export default App;