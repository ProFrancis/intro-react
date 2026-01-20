import { Children, createContext, useEffect, useState } from "react";


// 
import axios from "axios";

// créeez un context
export const AuthContext = createContext();


export const AuthProvider = ({ children }) => {

  // Etat pour suivre l'authentification
  const [isLoading, setIsLoding] = useState(false)

  // Etat pour stocker les infos de l'user connecté
  const [auth, setAuth] = useState(null)

  const login = async () => {
    try {
      //
      console.log('LOGIN CONTEXT')
    } catch (error) {
      //
    }
  } 

  return(
    <AuthContext.Provider value={{ login, auth, isLoading }} >
      {children}      
    </AuthContext.Provider>
  )
}

