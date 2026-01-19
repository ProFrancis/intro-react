import React, { useState } from 'react'
import Enfant from './Enfant';

const Parent = () => {

  const [users, setUsers] = useState([
    {
      name: "Muna",
      prenom: 'Francis'
    },
    {
      name: "Drake",
      prenom: 'Icho'
    },
    {
      name: 'PSG',
      prenom: "BBS"
    }
  ]);

  const [personnage, setPersonnage] = useState('Francis')

  return (
    <div>
      <h1>Parent</h1>
      <Enfant 
        users={users}
        personnage={personnage}
      />
    </div>
  )
}

export default Parent