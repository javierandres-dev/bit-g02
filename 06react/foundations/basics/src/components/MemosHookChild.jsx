import React from 'react';

function MemosHookChild({ contadorChild, setContadorChild }) {
  console.log('MemosHook HIJO renderizado...');
  return (
    <>
      <div>MemosHookChild</div>
      <p>Contador hijo: {contadorChild}</p>
      <button onClick={() => setContadorChild(contadorChild + 1)}>
        Incrementar contador hijo
      </button>
    </>
  );
}
export default React.memo(MemosHookChild);
