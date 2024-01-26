import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { filmsAPI } from "../../api/api";

export const fetchFilmsByPage = createAsyncThunk(
    'fetchFilmsByPage',
    async (pageCount) => {
        const res = await filmsAPI.getMovieByPage(pageCount);
        return res.data.results
    }
)

export const fetchOneFilm = createAsyncThunk(
    'fetchOneFilm',
    async (id) => {
        const res = await filmsAPI.getOneMovie(id)
        return res.data
    }
)

export const fetchSearchFilm = createAsyncThunk(
    'fetchSearchFilm',
    async (text) => {
       const res = await filmsAPI.getSerachFilm(text)
        //asa
       return res.data.results
    }
)

const filmsSlice = createSlice({
    name: "filmsSlice",
    initialState: {
        filmsByPage: [],
        pageCount: 1,
        isFethcing: false,
        oneFilm : {},
        text : '',
        serch : []
    },
    reducers: {
        incrementPage(state, action) {
            state.pageCount = state.pageCount + 1
        },
        cahngeText(state, action){
            state.text = action.payload
        }
    },
    extraReducers: (builder) => {
        builder.addCase(fetchFilmsByPage.pending, (state, action) => {
            state.isFethcing = true
        })
        builder.addCase(fetchFilmsByPage.fulfilled, (state, action) => {
            state.filmsByPage = action.payload
            state.isFethcing = false
        })
        builder.addCase(fetchOneFilm.fulfilled, (state, action) => {
            state.oneFilm = action.payload
        })
        builder.addCase(fetchSearchFilm.fulfilled, (state, action) => {
            state.serch = action.payload
        })
    }
})
export const { incrementPage, cahngeText } = filmsSlice.actions
export default filmsSlice.reducer