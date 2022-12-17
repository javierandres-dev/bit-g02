'use strict';
// CONSTANTES Y VARIABLES
const $form = document.getElementById('form');
const $legend = document.getElementsByTagName('legend')[0];
const alertPlaceholder = document.getElementById('liveAlertPlaceholder');

// OBJECTOS
const formulario = {
  username: null,
  password: null,
  accept: null,
};

// FUNCIONES
const alert = (message, type) => {
  const wrapper = document.createElement('div');
  wrapper.innerHTML = [
    `<div class="alert alert-${type} alert-dismissible" role="alert">`,
    `   <div>${message}</div>`,
    '   <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>',
    '</div>',
  ].join('');
  alertPlaceholder.append(wrapper);
};

function checkFormulario() {
  if (formulario.username && formulario.password && formulario.accept)
    return true;
  else return false;
}

function checkPermitido(obj) {
  try {
    const permitido = {
      username: 'pepita',
      password: 123,
      accept: true,
    };
    if (
      obj.username === permitido.username &&
      parseInt(obj.password) === permitido.password &&
      obj.accept === permitido.accept
    ) {
      window.open('http://127.0.0.1:5500/05examples/exercises.html', '_self');
    } else {
      alert(
        'Acceso denegado, usuario no permitido, revisa tus credenciales.',
        'warning'
      );
    }
  } catch (error) {
    console.log('se produjo un error en la función checkPermitido:', error);
  }
  /* if (obj) {
    const permitido = {
      username: 'pepita',
      password: 123,
      accept: true,
    };
    if (
      obj.username === permitido.username &&
      parseInt(obj.password) === permitido.password &&
      obj.accept === permitido.accept
    ) {
      console.log('permitir acceso ...');
    } else {
      console.log('denegar acceso ...');
    }
  } else {
    console.log('falta el objecto');
  } */
}

// EVENTOS
$form.username.addEventListener('input', (e) => {
  formulario.username = e.target.value;
});

$form.password.addEventListener('input', (e) => {
  formulario.password = e.target.value;
});

$form.accept.addEventListener('change', (e) => {
  formulario.accept = e.target.checked;
});

$form.addEventListener('submit', (e) => {
  e.preventDefault();
  /* if (!formulario.username || !formulario.password || !formulario.accept) {
    $legend.classList.add('text-danger');
    console.log('error...');
  } */
  if (checkFormulario() === true) {
    checkPermitido(formulario);
  } else {
    $legend.classList.add('text-danger');
    alert('Todos los campos son obligatorios.', 'danger');
  }
});
