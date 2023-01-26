import data from "../json/data.json" assert { type: "json" };

const getData = () => data

export const getCard = (obj) => {
  const {site, photo, name} = obj

  return `
  <figure class="card">
    <a href="${site}" target="_blank" rel="noopener noreferrer" class="card-link">
      <img src="${photo}" alt="Foto de ${name}" class="card-image">
      <figcaption class="card-text">${name}</figcaption>
    </a>
  </figure>
  `;
}

export function getUnorderedData() {
  const unordered = []
  while (unordered.length !== data.length) {
    const index = Math.floor(Math.random() * data.length)
    if (!unordered.includes(data[index])) unordered.push(data[index])
  }
  return unordered
}

export default getData;