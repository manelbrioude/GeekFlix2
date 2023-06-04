import React, { useEffect, useState } from 'react'
import axios from 'axios';
import "./Row.css"

function Row({title, fetchURL, isLargeRow=false}) {

const [movies,setMovies] =useState([]);
const [loaded,setLoaded] = useState(false)
const baseUrl="https://api.themoviedb.org/3"
const baseUrlImage="https://image.tmdb.org/t/p/original"

useEffect(() => {
        async function fetchData() {
            const request= await axios.get(baseUrl+fetchURL);
            setMovies(request.data.results);
        }
        fetchData()
},[])

useEffect(()=>{
  if(movies.length > 0 ) {
    setLoaded(true)
  }
},[movies])

  return (
    <div className='row'>
      {loaded && (<h2>{title}</h2>) }
        
        <div className='row_posters'>
        {movies.map(
            (movie) => 
            ((isLargeRow && movie.poster_path) ||
            (!isLargeRow && movie.backdrop_path)) && (
                <img className={`row_poster ${isLargeRow && "row_posterLarge"}`}
                key={movie.id}
                src={`${baseUrlImage}${isLargeRow ? movie.poster_path : movie.backdrop_path}`}
                alt={movie.name}
                />
            )
                
        )}
        </div>
    </div>
  )
}

export default Row