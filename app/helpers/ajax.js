export function ajax(props){

  let{url, options, cbSuccess} = props

  fetch(url,{options})
  .then(res => res.ok ? res.json() : Promise.reject(res))
  .then(json => cbSuccess(json))
  .catch(err => {

    let error = err.status || "",
      message = err.statusText || "Ocurrió un error al acceder a la API"
    
    document.getElementById("root").innerHTML = `
    <div class="error">
      <p>Error ${error}: ${message}</p>
    </div>`
  })
}