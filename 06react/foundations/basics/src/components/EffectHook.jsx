import React, { useEffect, useState } from 'react';

export const EffectHook = () => {
  const [data, setData] = useState(0);

  useEffect(() => {
    console.log(
      'esto se ejecutará 1 sola vez en la etapa de montaje del componente'
    );
  }, []);

  useEffect(() => {
    console.log(
      'esto se ejecutará cada vez que la dependencia tenga cambios en la etapa de update del componente'
    );
  }, [data]);

  return <div>EffectHook</div>;
};
