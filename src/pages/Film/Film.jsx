import React, { useEffect, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { fetchOneFilm, fetchTrailer } from '../../store/slices/filmsSlice'
import './Film.css'


const Film = () => {
    const disaptch = useDispatch()
    const { oneFilm } = useSelector((state) => state.filmsData)

    const { id } = useParams()

    useEffect(() => {
        disaptch(fetchOneFilm(id))
    }, [id])

    const iframe = useRef(null)

    useEffect(() => {
        disaptch(fetchTrailer({ id, iframe }))
    }, [id])


    return (
        <div>
            <iframe ref={iframe} />
            <h1>{oneFilm?.title}</h1>
        </div>
    )
}

export default Film