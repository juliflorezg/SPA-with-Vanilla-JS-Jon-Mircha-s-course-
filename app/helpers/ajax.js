// import { Loader } from "../components/Loader.js"

export function ajax(props){

  let{url, options, cbSuccess} = props

  fetch(url,{options})
  .then(res => res.ok ? res.json() : Promise.reject(res))
  .then(json => cbSuccess(json))
  .catch(err => {
    console.error(err)

    let error = err.status || "",
      message = err.statusText || "Ocurrió un error al acceder a la API"
    
    document.getElementById("posts").innerHTML = `
    <div class="error">
      <p>Error ${error}: ${message}</p>
    </div>`

    document.querySelector(".loader").style.display = "none"
    
  })
}