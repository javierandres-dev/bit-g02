const $form = document.getElementById('form');
const $notify = document.getElementById('notify');

$form.addEventListener('submit', handleSubmit);

function handleSubmit(event) {
  event.preventDefault();

  if (!$form.name.value || !$form.email.value || !$form.message.value) {
    $notify.classList.add('warning');
  } else {
    const name = $form.name.value;
    const email = $form.email.value;
    const message = $form.message.value;

    localStorage.setItem('name', name);
    localStorage.setItem('email', email);
    localStorage.setItem('message', message);
    $form.reset();
  }
}
