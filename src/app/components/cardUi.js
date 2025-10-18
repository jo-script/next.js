import React from 'react'
import ButtonUi from './button'

function CardUi({title, text, back}) {
  return (
    <div className={`w-[200px] h-[250px] flex flex-col gap-3 items-center justify-center ${back} rounded-lg `}>
      <h1 className='font-bold text-2xl'>{title}</h1>
      <p className='text-center text-blue-50'>{text}</p>
      <ButtonUi text={'add'} background={'bg-blue-600'} />
    </div>
  )
}

export default CardUi
