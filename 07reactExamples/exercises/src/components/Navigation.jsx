import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import { HomePage } from './HomePage';
import { ExercisesPage } from './ExercisesPage';

export const Navigation = () => {
  return (
    <BrowserRouter>
      <nav className='py-4 text-center'>
        <Link className='mx-2' to='/'>
          Inicio
        </Link>
        <Link className='mx-2' to='/ejercicios'>
          Ejercicios
        </Link>
      </nav>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/ejercicios' element={<ExercisesPage />} />
      </Routes>
    </BrowserRouter>
  );
};
