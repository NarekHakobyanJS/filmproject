import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { fetchOneFilm } from '../../store/slices/filmsSlice'
import './Film.css'

const Film = () => {
    const { oneFilm } = useSelector((state) => state.filmsData)
    const disaptch = useDispatch()
    const { id } = useParams()

    useEffect(() => {
        disaptch(fetchOneFilm(id))
    }, [])
    return (
        <div>
            <h1>{oneFilm?.title}</h1>
        </div>
    )
}

export default Film