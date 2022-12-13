'use strict';
const $sum = document.getElementById('sum');
const $form1 = document.getElementById('form1');

$form1.addEventListener('submit', (event) => {
  event.preventDefault();
  const num1 = parseInt($form1.num1.value);
  const num2 = parseInt($form1.num2.value);

  $sum.textContent = num1 + num2;
});
