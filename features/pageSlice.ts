import {createSlice, PayloadAction} from '@reduxjs/toolkit'
import {pageLimit} from "../utils/consts";

type PageSliceStateType = {
    pageLimit: number,
    currentPage: number
}

const initialState :PageSliceStateType = {
    pageLimit,
    currentPage: 1
}

export const pageSlice = createSlice({
    name: 'page',
    initialState,
    reducers: {
        gotoPage: (state, action :PayloadAction<number>) => {
            state.currentPage = action.payload
        }
    }
})

export default pageSlice.reducer
export const {
    gotoPage,

} = pageSlice.actions
