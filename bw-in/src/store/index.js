import {configureStore} from '@reduxjs/toolkit'
import reducer from '../slice/addPref'

export const store = configureStore({
    reducer : { /* experience : reducer, */
                addExperience : reducer }
})