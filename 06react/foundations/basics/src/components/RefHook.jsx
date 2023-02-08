import React, { useRef, useState } from 'react';

export const RefHook = () => {
  const [contador, setContador] = useState(0);

  const nombre = useRef('pepita');
  console.log(nombre);
  console.log(nombre.current);
  const $btnRef = useRef();
  console.log($btnRef);
  console.log($btnRef.current);

  const handleClick = () => {
    nombre.current = 'fulanita';
    $btnRef.current.textContent = 'Nombre cambiado!';
  };

  return (
    <>
      <div>RefHook</div>
      <p>Contador: {contador}</p>
      <button onClick={() => setContador(contador + 1)}>Incrementar</button>
      <p>Nombre: {nombre.current}</p>
      <button ref={$btnRef} onClick={handleClick}>
        Cambiar nombre
      </button>
    </>
  );
};
