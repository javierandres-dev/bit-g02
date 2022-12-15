'use strict';
const userValid = {
  username: 'pepita',
  password: 'pérez',
};

const $message = document.getElementById('message');
const $loginForm = document.getElementById('loginForm');

$loginForm.addEventListener('submit', handleSumbit);

function handleSumbit(event) {
  event.preventDefault();
  const $username = document.getElementById('username');
  const $password = document.getElementById('password');
  const $tyc = document.getElementById('tyc');

  const username = $username.value;
  const password = $password.value;
  const tyc = $tyc.checked;

  if (
    username === userValid.username &&
    password === userValid.password &&
    tyc === true
  ) {
    console.log('permitir el acceso...');
  } else {
    console.log('denegar el acceso.');
  }
}
