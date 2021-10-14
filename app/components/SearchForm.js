export function SearchForm(){
  const d = document,
    $form = d.createElement('form'),
    $input = d.createElement('input')

  $form.classList.add("search-form")
  $input.name = "search"  
  $input.type = "search"  
  $input.autocomplete = "off"
  $input.placeholder = "Busca un artículo"

  $form.appendChild($input);  

  //este condicional permite que al buscar algo con el input search, el valor se quede fijado en el input
  if(location.hash.includes("#/search")){
    $input.value = localStorage.getItem("wpSearch")
  }

  //este evento hace que cuando se clickee la 'x' del input search, también se elimine la variable 'wpSearch' del localStorage
  d.addEventListener("search", e=> {
    if(!e.target.matches("input[type='search']")) return false
    if(!e.target.value) localStorage.removeItem("wpSearch")
  })

  //este evento hace que cuando se haga submit con el input search, se guarde el valor del input en el localStorage en la variable wpSearch y también se guarda en el hash de location (para la url)
  d.addEventListener("submit", e=>{

    if(!e.target.matches(".search-form")) return false

    e.preventDefault()
    console.log(e.target.search.value)
    localStorage.setItem("wpSearch", e.target.search.value)
    location.hash = `#/search?search=${e.target.search.value}`
  })

  return $form
}