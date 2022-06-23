import { type } from '@testing-library/user-event/dist/type'
import React from 'react'

type Titleprops ={
    title?:string
}

//? para deixar a props opcional

const Header = ({title}:Titleprops) => {
  return (
    <>
    <h1>{title}</h1>
    <hr></hr>
    </>
  )
}

export default Header