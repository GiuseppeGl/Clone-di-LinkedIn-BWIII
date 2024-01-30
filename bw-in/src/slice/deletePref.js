import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
    experience : [],
    loading: false,
    error: ""
}

export const deletePref = createAsyncThunk(
  "experiences/delete",
  async ({ userId, expId }) => {
    try {
      const response = await axios.delete(
        `https://striveschool-api.herokuapp.com/api/profile/${userId}/experiences/${expId}`,
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

  
  export const deleteExpSlice = createSlice(
    {
      name: 'experience',
      initialState: initialState,
  
      reducers: (create) => ({
        addExperience: create.reducer((state, action) => {
          console.log(action, "funziono deleete addex");
          /* state.userlist.push(action.payload)  */
        }),
        deleteExperience: create.reducer((state, action) => {
          console.log(action, "funziono deleete");
          /* state.userlist =  state.filter(ele => ele !== action.payload) */
        })
      })
    }
  )

  console.log(initialState)

    const {actions, reducer} = deleteExpSlice;
    export const {addExperience, deleteExperience} = actions;

    export default reducer;