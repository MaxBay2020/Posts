import {createSlice} from '@reduxjs/toolkit'

const initialState = {
    maximumPostsPerPage: 5,
    currentPage: 1
}

export const pageSlice = createSlice({
    name: 'page',
    initialState,
    reducers: {
        gotoPage: (state, action) => {
            state.currentPage = action.payload
        }
    }
})

export default pageSlice.reducer
export const {
    gotoPage,

} = pageSlice.actions
