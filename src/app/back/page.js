'use client'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { MdDeleteOutline } from "react-icons/md";




function Page() {

  const [users, setUsers] = useState()

  const [name, setName] = useState()
  const [email, setEmail] = useState()
  const [password, setPassword] = useState()

  useEffect(() => {
    const users = async () => {
      await axios.get('http://localhost:5000/getAllUsers')
        .then((obj) => setUsers(obj.data)
        )
        .catch((error) => console.log(error)
        )
    }
    users()
  }, [])

  const addNewUser = async () => {
    try {
      await axios.post('http://localhost:5000/addUser', {
        name,
        email,
        password,
      })
        .then((data) => console.log(data.data))
        .catch((error) => console.log(error))

      setName('')
      setEmail('')
      setPassword('')

      alert('done')
    } catch (error) {
      console.log(error);
    }
  }

  const deleteUser = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/deleteUser/${id}`)
      alert('deleted')
    } catch (error) {
      console.log(error);
    }
  }

  if (!users) return <h1>Loading....</h1>

  return (
    <div>
      <div className='flex items-center justify-center gap-4 flex-wrap'>
        {
          users.map((user, i) => (
            <div key={i} className='w-[200px] p-3 rounded-lg text-white bg-purple-600 m-4 cursor-pointer flex-wrap'>
              <h1>{user.name}</h1>
              <h1>{user.email}</h1>
              <h1>{user.password}</h1>
              <MdDeleteOutline size={30} color='red' onClick={() => deleteUser(user._id)} />
            </div>
          ))
        }
      </div>


      <form>
        <input type="text" placeholder='name' value={name} onChange={(e) => setName(e.target.value)} />
        <input type="email" placeholder='email' value={email} onChange={(e) => setEmail(e.target.value)} />
        <input type="password" placeholder='password' value={password} onChange={(e) => setPassword(e.target.value)} />
      </form>

      <button onClick={addNewUser} className='w-[120px] h-10 bg-purple-600 text-white font-bold px-4'>Add User</button>
    </div>
  )
}

export default Page
