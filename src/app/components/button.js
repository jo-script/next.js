import React from 'react'

function ButtonUi({text, background}) {
  return (
    <button className={`w-[150px] h-10 rounded-lg ${background} text-white `}>
        {text}
    </button>
  )
}

export default ButtonUi
