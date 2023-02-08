import React, { useReducer } from 'react';

const initialState = {
  id: null,
  name: '',
  completed: false,
};

const reducer = (state, action) => {
  //console.log('state:', state);
  //console.log('action:', action);
  switch (action.type) {
    case 'SET_NAME':
      return { ...state, name: action.value };
    default:
      return state;
  }
};

export const ReducerHook = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('enviando datos... state:', state);
  };

  return (
    <>
      <div>ReducerHook</div>
      <form onSubmit={handleSubmit}>
        <label htmlFor='name'>Nombre de la tarea</label>
        <input
          type='text'
          name='name'
          id='name'
          value={state.name}
          onInput={(e) => dispatch({ type: 'SET_NAME', value: e.target.value })}
        />
        <button type='submit'>Agregar tarea</button>
      </form>
    </>
  );
};
