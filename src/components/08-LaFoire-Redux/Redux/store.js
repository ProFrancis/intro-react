// Import de la fonction configstore depuis reduxjs/toolkit pour créer le store
import { configureStore } from "@reduxjs/toolkit";

import ArticleReducer from "./reducers/ArticleSlice";


// Configuration et export du store Redux
export default configureStore({
  reducer: {
    articles: ArticleReducer,
  }
})