import React from 'react'
import './GenresBTN.css'

const GenresBTN = ({genre}) => {
  return (
    
        <button className='btn'>{genre.name}</button>
  )
}

export default GenresBTN