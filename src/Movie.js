import React from "react";

function Movie({name, price}){
    return (
        <div>
          <h1>{name}</h1>  
          <p>{price}</p>
        </div>
      );
}
export default Movie;