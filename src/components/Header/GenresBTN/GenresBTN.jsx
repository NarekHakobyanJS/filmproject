import React from 'react'
import { useDispatch } from 'react-redux'
import { NavLink } from 'react-router-dom'
import {fetchFilmGenre} from '../../../store/slices/genresSlice'
import './GenresBTN.css'

const GenresBTN = ({genre}) => {
  const disaptch = useDispatch()
  return (
    
        <button 
        onClick={() => 
        disaptch(fetchFilmGenre(genre.id))}
        className='btn'>
          <NavLink to={`genres/${genre.id}`}>{genre.name}</NavLink>
        </button>
  )
}

export default GenresBTN