import "../css/main.css"
import React from 'react'

const reglasObj = {
  color: "blue",
  fontSize: "20px"
}

export const Styles = () => {
  return (
    <>
      <h2>Estilos</h2>
      <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quam quas porro obcaecati ducimus officia necessitatibus soluta voluptate, nihil, non ipsum perspiciatis quos! Eligendi, dolorem eaque! Minus nihil inventore vero blanditiis?</p>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum dolorem veritatis praesentium commodi nisi quibusdam accusantium ipsa! Quisquam distinctio nulla, iusto minima sint aut, praesentium rerum obcaecati maiores, suscipit provident.</p>
      <p className="txt-danger">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam eligendi quas sint tempore sunt ipsa exercitationem esse delectus sit nobis odit placeat sed suscipit harum, officiis at repellat ullam error!</p>
      <p style={reglasObj}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste, labore hic reprehenderit distinctio nisi beatae necessitatibus corporis inventore impedit dolorem quod aliquid pariatur. Fugiat labore consequuntur dicta! Dolorum, ad repellat.</p>
    </>
  )
}
