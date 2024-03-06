import React from "react";
import { directors } from "../data";

function Directors() {
  console.log(directors);
  return (
    <div>
      {/*{code here}*/}
      <h1>Directors Page</h1>
      <div>
        {directors.map((director) => {
          return (
            <div key={director.name}>
              {director.name}
              <ul>
                {director.movies.map((m) => {
                  return <li key={m}>{m}</li>;
                })}
              </ul>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Directors;
