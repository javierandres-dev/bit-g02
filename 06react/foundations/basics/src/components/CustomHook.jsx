// 1. Importaciones siempre en lo más alto del script
// 2. Solo llamar Hooks dentro de funciones (Componentes y Hooks)
import React from 'react';
import { useFetch } from '../hooks/useFetch';

export const CustomHook = () => {
  const users = useFetch('https://jsonplaceholder.typicode.com/users');
  console.log('CustomHook users:', users);
  const todos = useFetch('https://jsonplaceholder.typicode.com/todos');
  console.log('CustomHook todos:', todos);
  return <div>CustomHook</div>;
};
