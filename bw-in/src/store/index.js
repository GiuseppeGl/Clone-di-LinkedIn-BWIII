import {configureStore} from '@reduxjs/toolkit'
import reducer from '../slice/deletePref'

export const store = configureStore({
    reducer : { experience : reducer }
})