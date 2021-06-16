import React, { useState, useEffect } from 'react'
import { Movie } from './components/Movie.jsx'

export function App() {
  const [movies, setMovies] = useState([])

  async function getMovies() {
    let response = await fetch(
      'https://api.themoviedb.org/3/discover/movie?primary_release_year=1989&sort_by=popularity.desc&api_key=c81bcee441910bc32f34743a600ddfe2'
    )
    let movies = await response.json()
    // console.log(movies)
    console.log(movies.results)
    setMovies(movies.results)
  }
  useEffect(() => {
    getMovies()
  }, [])

  return (
    <>
      <header>
        <h1>Joe's "Good Movie" Database</h1>
      </header>
      <main>
        <ul>
          {movies.map(function (movie) {
            return <Movie title={movie.title} posterImage={movie.poster_path} />
          })}
        </ul>
      </main>
    </>
  )
}
