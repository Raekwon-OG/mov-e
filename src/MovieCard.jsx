import React from "react";


const MovieCard = ({movieResponse}) =>{

    return(
        <div className="movie">
            <div>
                <p> {movieResponse.Year}</p>
            </div>

            <div>
                <img src={movieResponse.Poster !== 'N/A' ? movieResponse.Poster : 'https://via.placeholder.com/400'} alt="movie-cover" />
            </div>

            <div>
                <span>{movieResponse.Type}</span>
                <h3>{movieResponse.Title}</h3>
            </div>
        </div>
    )

}

export default MovieCard;