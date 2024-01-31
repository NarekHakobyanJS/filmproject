import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { NavLink } from 'react-router-dom'
import { fetchSearchFilm, cahngeText } from '../../store/slices/filmsSlice'
import GenresBTN from './GenresBTN/GenresBTN'
import './Header.css'


const Header = () => {


  const [open, setOpen] = useState(false)
  const { genres } = useSelector((state) => state.genresData)
  const { text, serch } = useSelector((state) => state.filmsData)
  const dispatch = useDispatch()

  useEffect(() => {
    if (text.length > 3) {
      dispatch(fetchSearchFilm(text))
      setOpen(true)
    } else {
      setOpen(false)
    }

  }, [text])

  const openToClose  = () => {
    setOpen(false)
    dispatch(cahngeText(""))
  }
  return (
    <header>
      <div className='genresBlock'>
        {
          genres.map((genre) => {
            return <GenresBTN key={genre.id} genre={genre} />
          })
        }
      </div>
      <div className='a'>
        <input
          value={text}
          onChange={(e) => dispatch(cahngeText(e.target.value))}
        />
        {
          open && <div className='open'>
            {
              serch.map((el) => {
                return <NavLink
                  onClick={openToClose}
                  to={`/${el.id}`} className='el'>{el.title}</NavLink>
              })
            }
          </div>
        }

      </div>
    </header>
  )
}

export default Header