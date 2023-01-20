import React, { useState } from 'react'

export const StateHook = () => {
const [contador, setContador] = useState(0)
  return (
    <>
      <h2>State Hook</h2>
      <p>{contador}</p>
      <button onClick={() => setContador(contador + 1)}>
        Clickeame
      </button>
    </>
  )
}
