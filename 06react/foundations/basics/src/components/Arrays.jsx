import React from 'react'

export const Arrays = () => {
  const arr = ['elemento1', 'elemento2', 'elemento3', 'elemento2']
  const items = arr.map((item, i) => <li key={i}>{item}</li>)

  const arrObjs = [{id: 1, name: 'A'}, {id: 2, name: 'B'}, {id: 3, name: 'C'}]
  const objs = arrObjs.map(obj => <li key={obj.id}>{obj.name}</li>)

  return (
    <>
      <h2>Arreglos</h2>
      <ol>{items}</ol>
      <ul>{objs}</ul>
    </>
  )
}
