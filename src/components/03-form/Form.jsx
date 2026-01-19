import React, { useState } from 'react'
import { USER_FIELDS } from './FormFields'


const Form = () => {

  const [user,setUser] = useState({
    prenom: '',
    password: ''
  })

  const [check,setCheck] = useState(false)

  const handleChange = (event) => { 
    const { name, value } = event.target
    setUser((prevUser) => ({...prevUser, [name]: value}))
  }

  const handleSubmit = (event) => {
    /* 
      C'est ici qu'on peut envoyer les informations pour la bdd, store, api, etc.
      On peut faire une ou des conditions pour vérifier par exemple si le mot de passe contient bien 9 caractères au minimum etc. 
    */
    event.preventDefault();
    if(user.prenom.length >= 3 && user.password.length >= 9)
    {
      console.log("succes")
      setCheck(true)
    }else{
      console.log("error")
      setCheck(false)
    }
  }

  return (
    <div>
      <p>
        {check && user.prenom}
      </p>
      <form onSubmit={handleSubmit} >
        {USER_FIELDS.map((fiels, index) => (
          <div key={index}>
            <label htmlFor={fiels.id}>{fiels.label} : </label>
            <input
              type={fiels.type}
              id={fiels.id}
              name={fiels.name}
              placeholder={fiels.placeholder}
              onChange={handleChange}
            />    
          </div>
        ))}
        <button>Valider</button>
      </form>
    </div>
  )
}

export default Form