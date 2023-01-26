// import getData from "./functions.js";
import {getUnorderedData, getCard } from "./functions.js";

const $search = document.getElementById('search');
const $data = document.getElementById("data");

// const data = getData()
const data = getUnorderedData()

let html = ''

for (const i of data) html += getCard(i)

$data.innerHTML = html

$search.input.addEventListener('input', (event) => {
  const found = []
  html = ''

  data.filter(datum => {
    const lowerName = datum.name.toLowerCase()
    const lowerInput = event.target.value.toLowerCase()

    if (lowerName.includes(lowerInput)) found.push(datum)
  })

  for (const i of found) html += getCard(i)

  $data.innerHTML = html
  
})

$search.addEventListener('submit', (e) => e.preventDefault())