'use strict';
/* fetch('https://jsonplaceholder.typicode.com/users')
  .then((data) => {
    return data.json();
  })
  .then((json) => {
    console.log(json);
  })
  .catch(() => {
    console.log('oops!, algo salió mal, no se resolvió la promesa');
  }); */

/* async function getUsers() {
  let res = await fetch('https://jsonplaceholder.typicode.com/users');
  res = await res.json();
  console.log(res);
}
getUsers(); */

const $usersList = document.getElementById('usersList');

async function getUsers() {
  try {
    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    const users = await res.json();
    let html = '';
    for (const i of users) {
      html += `<li>${i.name}</li>`;
    }
    $usersList.innerHTML = html;
  } catch (error) {
    console.log('catch, error:', error);
  }
}
getUsers();
