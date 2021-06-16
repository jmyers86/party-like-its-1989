import React from 'react'

export function Movie(props) {
  return (
    <div className="Movie">
      <h1>{props.title}</h1>
      <img src={`https://image.tmdb.org/t/p/w185${props.posterImage}`} />
      <h2>Plot Overview:</h2>
      <p>{props.overview}</p>
    </div>
  )
}
