import React from 'react'

export const ConditionalComponent = () => {
  let output = null;
  if (true) {
    output = <p>Se cumplió la condición.</p>
  } else {
    output = <p>No cumplió la condición.</p>
  }
  return (
    <>
      <h2>Componente condicional</h2>
      <div>{output}</div>
    </>
  )
}
