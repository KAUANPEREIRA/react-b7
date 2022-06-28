import React from 'react'
type Props={
    text:string
}
export const Botao = ({text}:Props) => {
  return (
    <button>{text}</button>
  )
}
