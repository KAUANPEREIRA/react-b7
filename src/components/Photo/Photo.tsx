import React from 'react'
//criação de uma props
type PropsImg ={
    url?:string,
    legend?:string
}

export const Photo = ({url,legend}:PropsImg) => {
  return (
    <>
        <img src={url}/>
        <p>{legend}</p>
        
    </>
  )
}
