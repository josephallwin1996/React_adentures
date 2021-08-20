import React,{useState, useEffect} from "react";
import Movie from "./Movie";

function MovieList(){
  const [movies, setMovies] = useState([
    {
      name: 'Harry potter',
      price: '18$',
      id: 22254
    },
    {
      name: 'Inception',
      price: '10$',
      id: 22354
    },
    {
      name: 'Race',
      price: '8$',
      id: 25413
    }    
  ]);
  return (
      <div>
        <h1>Movie List</h1>  
          Here are some movie lists
        {movies.map(movie => (
           <Movie name={movie.name} price={movie.price} key={movie.id}/>
        ))}
       
      </div>
  );
}
export default MovieList;