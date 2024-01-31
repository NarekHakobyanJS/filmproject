import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { filmsAPI } from "../../api/api";

export const fetchGenres = createAsyncThunk(
    'fetchGenres',
    async () => {
        const resposne = await filmsAPI.getGenre();
        return resposne.data.genres
    }
)

export const fetchFilmGenre = createAsyncThunk(
    'fetchFilmGenre',
    async (id) => {
        let res = await filmsAPI.getGenreMovie(id)
        return res.data.results
    }
)
const genresSlice = createSlice({
    name: "genresSlice",
    initialState: {
        genres: [],
        gen : []
    },
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchGenres.fulfilled, (state, action) => {
            state.genres = action.payload
        })
        builder.addCase(fetchFilmGenre.fulfilled, (state, action) => {
            state.gen = action.payload
        })
    }
})

export default genresSlice.reducer