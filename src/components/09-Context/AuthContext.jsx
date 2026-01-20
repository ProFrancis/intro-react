import { Children, createContext, useEffect, useState } from "react";

import { URL } from "./Url";
import axios from "axios";

// créeez un context
export const AuthContext = createContext();


export const AuthProvider = ({ children }) => {

  // Etat pour suivre l'authentification
  const [isLoading, setIsLoading] = useState(false)

  // Etat pour stocker les infos de l'user connecté
  const [auth, setAuth] = useState(null)

  const login = async (dataForm) => {
    try {
      const { data } = axios.post(URL.SIGN, dataForm)
      console.log(data)
    } catch (error) {
      console.log(error.message);
    }
  } 

  return(
    <AuthContext.Provider value={{ login, auth, isLoading }} >
      {children}      
    </AuthContext.Provider>
  )
}

