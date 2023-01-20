const $div = document.getElementById('root');

document.addEventListener('DOMContentLoaded', () => {
  const $p = document.createElement('p');
  const $btn = document.createElement('button');

  let contador = 0

  $p.textContent = contador;
  $btn.textContent = "Clickeame";

  $div.appendChild($p)
  $div.appendChild($btn);

  $btn.addEventListener('click', ()=>{
    contador += 1
    $p.textContent = contador
  })
} )