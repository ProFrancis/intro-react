import React, { useEffect, useState } from 'react'
import axios from 'axios'
// USE axios

const Home = () => {

  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const { data, status } = await axios.get('https://jsonplaceholder.typicode.com/users');
        setUsers(data)
      } catch (error) {
        console.log(error.message)
      }
    } 
    fetchUsers();
  },[])

  return (
    <div>
      Home
      {users.map(user => (
        <div key={user.id}>
          <p>{user.name} </p>
          <p>{user.email}</p>
          <p>{user.address.city}</p>
        </div>
      ))}
    </div>
  )
}

export default Home