import data from "../json/data.json" assert { type: "json" };

const getData = () => data

export const getCard = (obj) => {
  const {site, photo, name} = obj

  return `
  <figure>
    <a href="${site}" target="_blank" rel="noopener noreferrer">
      <img src="${photo}" alt="Foto de ${name}">
      <figcaption>${name}</figcaption>
    </a>
  </figure>
  `;
}

export default getData;