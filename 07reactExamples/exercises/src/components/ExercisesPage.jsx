import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import { Ex01 } from './Ex01';
import { Ex02 } from './Ex02';

export const ExercisesPage = () => {
  const [exercise, setExercise] = useState(null);

  return (
    <section>
      <h1 className='text-center'>Ejercicios</h1>
      {!exercise ? (
        <ol>
          <li onClick={() => setExercise(<Ex01 />)}>Contador</li>
          <li onClick={() => setExercise(<Ex02 />)}>Ejercicio 2</li>
        </ol>
      ) : (
        <div className='text-center'>
          {exercise}
          <Button variant='link' onClick={() => setExercise(null)}>
            Regresar
          </Button>
        </div>
      )}
    </section>
  );
};
