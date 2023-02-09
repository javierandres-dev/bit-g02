import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import { HomePage } from './HomePage';
import { ExercisesPage } from './ExercisesPage';

export const Navigation = () => {
  return (
    <BrowserRouter>
      <nav>
        <Link to='/'>Inicio</Link>
        <Link to='/ejercicios'>Ejercicios</Link>
      </nav>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/ejercicios' element={<ExercisesPage />} />
      </Routes>
    </BrowserRouter>
  );
};
