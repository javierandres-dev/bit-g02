import React, { useState } from 'react';
import MemosHookChild from './MemosHookChild';

export const MemosHook = () => {
  const [contador, setContador] = useState(0);
  const [contadorChild, setContadorChild] = useState(0);

  console.log('MemosHook PADRE renderizado...');
  return (
    <>
      <div>MemosHook</div>
      <p>Contador: {contador}</p>
      <button onClick={() => setContador(contador + 1)}>Incrementar</button>
      <br />
      <MemosHookChild
        contadorChild={contadorChild}
        setContadorChild={setContadorChild}
      />
    </>
  );
};
