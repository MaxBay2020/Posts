import {configureStore} from '@reduxjs/toolkit'
import pageReducer from '../features/pageSlice'

const store = configureStore({
    reducer: {
        page: pageReducer
    }
})

export default store
