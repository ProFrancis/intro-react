import { createSlice } from "@reduxjs/toolkit";

// Data: tableau vide qui contiendra nos articles
const initialState = {
  data: [],
  loading: null,
  error: false
}

export const Article = createSlice({
  name: 'Article', // Nom du slice
  initialState, // Etat initial défini plus haut
  reducers: {
    FETCH_ARTICLES_START: (store) => {
      store.loading = true; // On met le loading a true pendant le chargement
    },
    FETCH_ARTICLES_SUCCES: (store, actions) => {
      store.loading = false;
      store.data = actions.payload
    }
  }
})
export const { FETCH_ARTICLES_START, FETCH_ARTICLES_SUCCES } = Article.actions
export default Article.reducer


