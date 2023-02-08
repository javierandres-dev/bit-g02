import React, { useEffect, useState } from 'react';

export const CallbackHookChild = ({ getDoble }) => {
  const [doble, setDoble] = useState(0);

  useEffect(() => {
    setDoble(getDoble());
    console.log('HIJO renderizado...');
  }, [getDoble]);

  return (
    <>
      <div>CallbackHookChild</div>
      <p>Doble: {doble}</p>
    </>
  );
};
