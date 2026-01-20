import React, { useState, useContext } from 'react'
import { AUTH_FIELD } from './ConfigForm'

// oN IMPORTE LE CONTETE D'AUTHENTIFICATION 
import { AuthContext } from './AuthContext'

const Sign = () => {
  const { login } = useContext(AuthContext)

  const [user, setUser] = useState({})

  const handleChange = (event) => {
    const { name, value } = event.target
    setUser(prevUser => ({...prevUser, [name]: value }))
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    login(user)
  }

  return (
    <div>
      <h1>Sign</h1>
      <form onSubmit={handleSubmit}>
        {AUTH_FIELD.map((field, index) => (
          <div key={index} >
            <label htmlFor={field.label}>{field.label} : </label>
            <input 
              type={field.type}
              name={field.name}
              placeholder={field.placeholder}
              onChange={handleChange}
            />
          </div>
        ))}
        <button>valider</button>
      </form>
    </div>
  )
}

export default Sign