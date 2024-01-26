import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { filmsAPI } from "../../api/api";

export const fetchGenres = createAsyncThunk(
    'fetchGenres',
    async () => {
        const resposne = await filmsAPI.getGenre();
        return resposne.data.genres
    }
)
const genresSlice = createSlice({
    name: "genresSlice",
    initialState: {
        genres: []
    },
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchGenres.fulfilled, (state, action) => {
            state.genres = action.payload
        })
    }
})

export default genresSlice.reducer