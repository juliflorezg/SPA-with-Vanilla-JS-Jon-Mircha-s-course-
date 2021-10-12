import api from "../helpers/wp_api.js"

export function Title(){
  //crear un elemento h1, rellenarlo con sontenido html y retornar ese elemento
  
  const $h1 = document.createElement("h1")
  $h1.innerHTML = `
  <a href="${api.DOMAIN}" target="_blank" rel="noopener">${api.NAME.toUpperCase()}</a>`

  return $h1
}