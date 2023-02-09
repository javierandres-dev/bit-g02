import React from 'react';
import { createPortal } from 'react-dom';

export const Portal = () => {
  return createPortal(<h2>Portal</h2>, document.getElementById('portal'));
};
