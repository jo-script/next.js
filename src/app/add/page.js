'use client'
import { useRouter } from 'next/navigation'
import React, { useEffect } from 'react'
import ButtonUi from '../components/button'
import CardUi from '../components/cardUi'

function Page() {

  const router = useRouter()

  let x = 4
  
  useEffect(() => {
    if (!x == 0) router.push('/fff')
  }, [])

  return (
    <div>
      <ButtonUi text={'ADD'} background={'bg-purple-400'} />
    </div>
  )
}

export default Page
