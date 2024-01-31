import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { filmsAPI } from "../../api/api";

/// 1
export const fetchFilmsByPage = createAsyncThunk(
    'fetchFilmsByPage',
    async (pageCount) => {
        const res = await filmsAPI.getMovieByPage(pageCount);
        return res.data.results
    }
)

/// 2
export const fetchOneFilm = createAsyncThunk(
    // c1
    'fetchOneFilm',
    // c2
    async (id) => {
        const res = await filmsAPI.getOneMovie(id)
        return res.data
    }
)

///4
export const fetchSearchFilm = createAsyncThunk(
    // c1
    'fetchSearchFilm',
    // c2
    async (text) => {
        const res = await filmsAPI.getSerachFilm(text)
        return res.data.results
    }
)


///3
export const fetchTrailer = createAsyncThunk(
    'fetchTrailer',
    async ({ id, iframe }) => {
        const res = await filmsAPI.getTrailer(id)

        res.data.results.forEach((elm) => {
            if (elm.name === "Official Trailer") {
                iframe.current.setAttribute(
                    "src",
                    `https://www.youtube.com/embed/${elm.key}`
                );
            } else {
                iframe.current.setAttribute(
                    "src",
                    `https://www.youtube.com/embed/${elm.key}`
                );
            }
        })

    }
)



const filmsSlice = createSlice({
    name: "filmsSlice",
    initialState: {
        filmsByPage: [],
        pageCount: 1,
        isFethcing: false,
        oneFilm: {},
        text: '',
        serch: []
    },
    reducers: {
        incrementPage(state, action) {
            state.pageCount = state.pageCount + 1
        },
        cahngeText(state, action) {
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