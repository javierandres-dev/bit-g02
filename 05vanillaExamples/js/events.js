'use strict';
const $label = document.querySelector('label');
const $btns = document.querySelectorAll('button');

let number = $label.textContent;

$btns.forEach(($btn) => {
  $btn.addEventListener('click', () => {
    if ($btn.classList.contains('btn-dec')) {
      number--;
      $label.textContent = number;
    }
    if ($btn.classList.contains('btn-inc')) {
      number++;
      $label.textContent = number;
    }
  });
});
