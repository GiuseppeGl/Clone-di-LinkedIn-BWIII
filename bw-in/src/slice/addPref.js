import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
    experience : [
        {"role": "CTO",
        "company": "Strive School",
        "startDate": "2019-06-16",
        "endDate": "2019-06-16", // could be null
        "description": "Doing stuff",
        "area": "Berlin",}


    ],
    loading: false,
    error: ""
}

export const getPref = createAsyncThunk(
  "experiences/delete",
  async ({ userId, expId }) => {
    try {
      const response = await axios.put(
        `https://striveschool-api.herokuapp.com/api/profile/6551ed5ac55e7e0018f83c0b/experiences`,
        {
          headers: {
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NWIyMjdlOTkxM2Y2NTAwMThkMDk1M2YiLCJpYXQiOjE3MDYxODMzNzMsImV4cCI6MTcwNzM5Mjk3M30.jlnbNCzWMI4-v24KVu6nH7wwIrEHBS8ld2efQrYXFUo",
          },
        }
      );

      const data = response.data;
      console.log("Esperienza cancellata con successo:", data);

      return data; // Ritorno i dati nel caso tu voglia gestirli nel tuo reducer
    } catch (error) {
      console.error("Errore durante la cancellazione dell'esperienza:", error);
      throw error;
    }
  }
);

  
  export const addExpSlice = createSlice(
    {
      name: 'addExperience',
      initialState: initialState,
  
      reducers: (create) => ({
        postExperience: create.reducer((state, action) => {
            console.log(state, action, "funziono post");
        /*   state.userlist.push(action.payload)  */
        }),
        deleteExperience: create.reducer((state, action) => {
          console.log(action, "non funziono");
          /* state.userlist =  state.filter(ele => ele !== action.payload) */
        })
      })
    }
  )

  console.log(initialState)

    const {actions, reducer} = addExpSlice;
    export const {postExperience, deleteExperience} = actions;

    export default reducer;