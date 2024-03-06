import React from "react";
import { movies } from "../data";

function Movies() {
  console.log(movies);

  //   const allMovies = movies.map((movie) => {
  //     return (
  //       <div>
  //         <p>{movie.title}</p>
  //         <p>{movie.time}</p>
  //         <ul>
  //           {movie.genres.map((genre) => {
  //             return <li>{genre}</li>;
  //           })}
  //         </ul>
  //       </div>
  //     );
  //   });
  return (
    <div>
      {/*{code here}*/}

      <h1>Movies Page</h1>
      {movies.map((movie) => {
        return (
          <div key={movie.title}>
            <p>{movie.title}</p>
            <p>{movie.time}</p>
            <ul>
              {movie.genres.map((genre) => {
                return <li key={genre}>{genre}</li>;
              })}
            </ul>
          </div>
        );
      })}
    </div>
  );
}

export default Movies;
