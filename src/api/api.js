import axios from "axios";

const instance = axios.create({
    baseURL: 'https://api.themoviedb.org/3'
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
    }
}





