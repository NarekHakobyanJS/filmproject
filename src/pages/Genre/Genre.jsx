import React from 'react'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'

const Genre = () => {
    const {gen} = useSelector((state) => state.genresData)
    const {id} = useParams()
  return (
    <div>
        {
            gen.map((ge) => {
                return <div>
                    <h1>{ge.title}</h1>
                    </div>
            })
        }
    </div>
  )
}

export default Genre