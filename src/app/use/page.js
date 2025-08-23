'use client'
import { use, useEffect, useState } from 'react'
import Loader from '../components/loading'

function Use() {

  const [x, setX] = useState(0)
  const [y, setY] = useState(0)

  // useEffect(() => {
  //   console.log('welcome');
  // })


  // useEffect(() => {
  //   console.log('welcome');

  // }, [])


  // useEffect(() => {
  //   console.log('qwertyui');

  // }, [x])

  const [dataUser, setDataUser] = useState()

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(data => data.json())
      .then(user => {
        setDataUser(user);

      })
  }, [])

  if (!dataUser) return <div className='w-full h-svh flex justify-center items-center '>
    <Loader />
  </div>


  return (

    <div className='flex justify-start flex-wrap gap-3'>
      {
        dataUser.map((data, i) => (
          <div key={i} className='p-5 bg-green-400 text-white w-46 h-42 rounded-xl '>
            <h1>{data.name}</h1>
            <h1>{data.email}</h1>
            <h1>{data.phone}</h1>
          </div>
        ))
      }
    </div>
  )
}

export default Use



