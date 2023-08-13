import { useState, useEffect } from "react"
import "./App.css"
import searchIcon from "./search-cp.png"
import MovieCard from "./MovieCard"

const api_key = "http://www.omdbapi.com/?i=tt3896198&apikey=9ba955"

const App = () =>{

    const [movies, setMoviesFn] = useState([]);
    const [search_key, setSearchKey] = useState('');

    useEffect(()=>{
        searchMovie(search_key)
    },[search_key])

    const searchMovie = async (search_key) => {
        const response = await fetch(`${api_key}&s=${search_key}`)
        const data = await response.json();
        setMoviesFn (data?.Search);
    }


    return (
     <div >
       <center>
       <h1>Find your favourite movies here</h1>
        <div className="search"> 
            <input type="text" placeholder="What movie would you like to find" onChange={(e) => setSearchKey(e.target?.value)} />
            <img src={searchIcon} alt="search"/>
        </div>
       </center>

       <div className="container">
        {
        (search_key === "") ? 
        (<div className="container"></div>) :
        (movies?.length >= 0) ? 
        (
        <div className="container">
         {movies.map((movie)=>(
         <MovieCard movieResponse = {movie}/>))
         }
        </div>
        )
         :(
        <div className="empty">
            <h2>No movies were found</h2>
        </div>)
        }
       </div>
    </div>
    )
}

export default App;