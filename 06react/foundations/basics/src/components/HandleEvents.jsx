import React from 'react'

export const HandleEvents = () => {

  const handleChange = (event) => {
    console.log(event)
    console.log('manejador de cambio...');
    console.log(event.target.value)
  }

  const handleClick = () => {
    console.log('manejador de click...');
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('manejador de envio');
  }

  return (
    <>
      <h2>HandleEvents</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder='Entrada...' onChange={handleChange} />
        <button type='button' onClick={handleClick}>Otro botón</button>
        <button type='submit'>Enviar</button>
      </form>
    </>
  )
}
