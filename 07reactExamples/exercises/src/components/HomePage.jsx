import React from 'react';
import Figure from 'react-bootstrap/Figure';

export const HomePage = () => {
  return (
    <section className='d-flex flex-column justify-center'>
      <h1 className='text-center'>¡Bienvenidos!</h1>
      <Figure className='text-center'>
        <Figure.Image
          roundedCircle
          width={171}
          height={180}
          alt='171x180'
          src='https://xsgames.co/randomusers/assets/avatars/female/78.jpg'
        />
        <Figure.Caption>Pepita Pérez</Figure.Caption>
      </Figure>
    </section>
  );
};
