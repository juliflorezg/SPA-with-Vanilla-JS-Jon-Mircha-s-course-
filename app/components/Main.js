export function Main(){
  const $main = document.createElement("main")
  $main.id = "main"

  //agregar la clase 'grid-fluid' en todo caso diferente a cuando el hash tenga '#/search'
  if(!location.hash.includes("#/search")) $main.classList.add("grid-fluid")
  
  return $main
}