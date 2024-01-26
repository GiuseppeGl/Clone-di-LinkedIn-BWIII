import {configureStore} from '@reduxjs/toolkit'
import experienceReducer from '../slice/deletePref'

export const store = configureStore({
    reducer : {
        experience : experienceReducer
    }
})