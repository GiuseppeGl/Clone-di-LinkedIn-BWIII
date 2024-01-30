import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  experience: [
    {
      userId: '65b6dacd8277b800192c90ce',
      experienceData: {
        role: "CTO",
        company: "Strive School",
        startDate: "2019-06-16",
        endDate: null, // could be null
        description: "Doing stuff",
        area: "Berlin",
        image: 'https://cicemcto.com/wp-content/uploads/2022/06/MicrosoftTeams-image-40-copia-copia-150x150.png'
      }
    }
  ],
  loading: false,
  error: "",
};


export const getPref = createAsyncThunk(
  "experiences/get",
  async ({ userId }) => {
    try {
      const response = await axios.get(
        `https://striveschool-api.herokuapp.com/api/profile/${userId}/experiences`,
        {
          headers: {
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NWI2ZGFjZDgyNzdiODAwMTkyYzkwY2UiLCJpYXQiOjE3MDY0ODIzODEsImV4cCI6MTcwNzY5MTk4MX0.8oohtDRnu27ShzaAsm3TmrTH_wSc2Gsdmbi_uyCaIxo",
          },
        }
      );

      const data = response.data;
      console.log("Dati ottenuti con successo:", data);

      return data;
    } catch (error) {
      console.error("Errore durante l'ottenimento delle esperienze:", error);
      throw error;
    }
  }
);

// Faccio la chiamata post
export const postExperienceAsync = createAsyncThunk(
  "experiences/postExperience",
  async ({ userId, experienceData }) => {
    try {
      const response = await axios.post(
        `https://striveschool-api.herokuapp.com/api/profile/${userId}/experiences`,
        {
          ...experienceData,

        },
        {
          headers: {
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NWI2ZGFjZDgyNzdiODAwMTkyYzkwY2UiLCJpYXQiOjE3MDY0ODIzODEsImV4cCI6MTcwNzY5MTk4MX0.8oohtDRnu27ShzaAsm3TmrTH_wSc2Gsdmbi_uyCaIxo",
          },
        }
      );

      const data = response.data;
      console.log("Esperienza aggiunta con successo:", data);

      return data;
    } catch (error) {
      console.error("Errore durante l'aggiunta dell'esperienza:", error);
      throw error;
    }
  }
);


export const deleteExperienceAsync = createAsyncThunk(
  "experiences/deleteExperience",
  async ({ userId, expId }) => {
    try {
      const response = await axios.delete(
        `https://striveschool-api.herokuapp.com/api/profile/${userId}/experiences/${expId}`,
        {
          headers: {
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NWI2ZGFjZDgyNzdiODAwMTkyYzkwY2UiLCJpYXQiOjE3MDY0ODIzODEsImV4cCI6MTcwNzY5MTk4MX0.8oohtDRnu27ShzaAsm3TmrTH_wSc2Gsdmbi_uyCaIxo",
          }
        }
      );

      const data = response.data;
      console.log("Esperienza cancellata con successo:", data);

      return data;
    } catch (error) {
      console.error("Errore durante la cancellazione dell'esperienza:", error);
      throw error;
    }
  }
);

// Faccio la chiamata post per l'immagine experience
export const postImageExperienceAsync = createAsyncThunk(
  "experiences/postImage",
  async ({ userId, expId, imageUrl }) => {
    try {
      const response = await axios.post(
        `https://striveschool-api.herokuapp.com/api/profile/${userId}/experiences/${expId}/picture`,
        { imageUrl },
        {
          headers: {
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NWI2ZGFjZDgyNzdiODAwMTkyYzkwY2UiLCJpYXQiOjE3MDY0ODIzODEsImV4cCI6MTcwNzY5MTk4MX0.8oohtDRnu27ShzaAsm3TmrTH_wSc2Gsdmbi_uyCaIxo",
          },
        }
      );

      const data = response.data;
      console.log("Immagine aggiunta con successo:", data);

      return { expId, imageUrl };
    } catch (error) {
      console.error("Errore durante l'aggiunta dell'immagine:", error);
      throw error;
    }
  }
);

export const addExpSlice = createSlice({
  name: 'addExperience',
  initialState: initialState,

  reducers: {
    postExperience: (state, action) => {
      console.log(state, action, "funziono post");
      // Aggiungo le esperienze all'array delle esperienze
      state.experience.push(action.payload);
    },
    postImage: (state, action) => {
      console.log(state, action, "funziono postImage");
      // Modifico l'URL dell'immagine dell'esperienza 
      const { expId, imageUrl } = action.payload;
      const experience = state.experience.find(exp => exp._id === action.payload._id);
      if (experience) {
        experience.image = imageUrl;
      }
    },
    deleteExperience: (state, action) => {
      console.log(action, "funziono delete");
      // Rimuovo l'esperienza tramite l'id
      state.experience = state.experience.filter(exp => exp._id !== action.payload);
    },
  },

  extraReducers: (builder) => {
    builder
      .addCase(getPref.pending, (state) => {
        state.loading = true;
        state.error = "";
      })
      .addCase(getPref.fulfilled, (state, action) => {
        state.loading = false;
        state.error = "";
        state.experience = action.payload;
      })
      .addCase(getPref.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || "Error get experience";
      })
      .addCase(postExperienceAsync.pending, (state) => {
        state.loading = true;
        state.error = "";
      })
      .addCase(postExperienceAsync.fulfilled, (state, action) => {
        state.loading = false;
        state.error = "";
        state.experience = [state.experience, action.payload];
      })
      .addCase(postExperienceAsync.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || "Error get experience";
      })
      .addCase(deleteExperienceAsync.pending, (state) => {
        state.loading = true;
        state.error = "";
      })
      .addCase(deleteExperienceAsync.fulfilled, (state, action) => {
        state.loading = false;
        state.error = "";
        state.experience = state.experience.filter(exp => exp._id !== action.payload._id);
      })
      .addCase(deleteExperienceAsync.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || "Error get experience";
      })
  }
});

const { actions, reducer } = addExpSlice;
export const { postExperience, deleteExperience, postImage } = actions;
export default reducer;