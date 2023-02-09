import React from 'react';
import axios from 'axios';

const API_URL = 'https://jsonplaceholder.typicode.com/users';

export const ApiCalls = () => {
  const getUsersFetch = () => {
    fetch(API_URL)
      .then((response) => response.json())
      .then((obj) => console.log(obj))
      .catch((error) => console.log(error));
  };

  const getUsersFetchAsyncFn = async () => {
    const response = await fetch(API_URL);
    const obj = await response.json();
    console.log(obj);
  };

  const getUsersAxios = async () => {
    const response = await axios.get(API_URL);
    console.log(response.data);
  };

  return (
    <>
      <h2>Api Calls</h2>
      <button type='button' onClick={getUsersFetch}>
        Obtener usuarios - Fetch
      </button>
      <button type='button' onClick={getUsersFetchAsyncFn}>
        Obtener usuarios - Fetch Async
      </button>
      <button type='button' onClick={getUsersAxios}>
        Obtener usuarios - Axios
      </button>
    </>
  );
};
