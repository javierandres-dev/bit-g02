import React from 'react';
import { ContextChild } from './ContextChild';

export const ContextParent = () => {
  return (
    <>
      <div>ContextParent</div>
      <ContextChild />
    </>
  );
};
