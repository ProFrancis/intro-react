import React from 'react'

const Enfant = (props) => {

  console.log(props);
  
  return (
    <div>
      {/* Affiche la valeur de la props (users et personnage) */}
      Enfant

      <p>Personnage : {props.personnage}</p>

      {props.users.map((user, index) => (
        <p key={index}>
          Name : {user.name}
          <br/>
          Prenom : {user.prenom}
        </p>
      ))}

    </div>
  )
}

export default Enfant