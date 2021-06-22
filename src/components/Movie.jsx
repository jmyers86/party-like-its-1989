import React from 'react'

export function Movie(props) {
  return (
    <div className="Movie">
      <h1>{props.title}</h1>
      <img src={`https://image.tmdb.org/t/p/w185${props.posterImage}`} />
      <p>{props.overview}</p>
      <h2>----------------------------</h2>
    </div>
  )
}
