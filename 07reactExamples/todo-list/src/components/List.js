import React from 'react'

export const List = ({ list, setList }) => {
  const handleClick = (i) => {
    const arr = [...list];
    arr.splice(i, 1);
    setList(arr)
  }

  const items = list.map((item, i) => <li key={i}>{item} <span onClick={()=> handleClick(i)}>Completado</span></li>)

  /* function handleClick() {
    console.log('completado...')
  } */

  return (
    <ol>{items}</ol>
  )
}
