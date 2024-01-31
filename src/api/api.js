import axios from "axios";



const instance = axios.create({
    baseURL: 'https://api.themoviedb.org/3',
    headers: {
        Authorization: "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjNGM4NjNiZjI5MWY1NjUxOTAyYmIzYWY4MjI1NmUwMiIsInN1YiI6IjYxNTYyZWY2ZTE4Yjk3MDA2MjkyODgzMiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.h_pBSpt1JQsgAdYyYZbt6dHDzEmGljF11e4m1MO-CHg",
    },
})

const apiKey = "f36f23edf6e10fd2ddcf939916b1f67a"

export const filmsAPI = {
    getGenre() {
        return instance.get(`/genre/movie/list?api_key=${apiKey}&language=en-US`)
    },
    getMovieByPage(pageCount) {
        return instance.get(`discover/movie?api_key=${apiKey}&language=en-US&page=${pageCount}`)
    },
    getOneMovie(id) {
        return instance.get(`/movie/${id}?api_key=${apiKey}&language=en-US`)
    },
    getSerachFilm(text) {
        return instance.get(`/search/movie?api_key=${apiKey}&query=${text}`)
    },
    getGenreMovie(genreId){
        return instance.get(`/discover/movie?api_key=${apiKey}&language=en-US&with_genres=${genreId}&page=${1}`)
    },
    getTrailer(id){
        return instance.get(`/movie/${id}/videos?language=en-US`)
    }
}





