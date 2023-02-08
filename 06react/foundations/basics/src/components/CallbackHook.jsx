import React, { useCallback, useState } from 'react';
import { CallbackHookChild } from './CallbackHookChild';

export const CallbackHook = () => {
  const [contador, setContador] = useState(0);
  const [mensaje, setMensaje] = useState('mensaje inicial...');

  //const getDoble = () => contador * 2;
  const getDoble = useCallback(() => contador * 2, [contador]);
  console.log('PADRE renderizado...');

  return (
    <>
      <div>CallbackHook</div>
      <p>Contador: {contador}</p>
      <button onClick={() => setContador(contador + 1)}>Incrementar</button>
      <CallbackHookChild getDoble={getDoble} />
      <p>{mensaje}</p>
      <input type='text' onInput={(e) => setMensaje(e.target.value)} />
    </>
  );
};
