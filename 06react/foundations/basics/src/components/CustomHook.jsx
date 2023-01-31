// 1. Importaciones siempre en lo más alto del script
// 2. Solo llamar Hooks dentro de funciones (Componentes y Hooks)
import React from 'react'
import { useFetch } from '../hooks/useFetch'

export const CustomHook = () => {
  const res = useFetch('https://jsonplaceholder.typicode.com/users')
  //console.log(res);
  return (
    <div>CustomHook</div>
  )
}
