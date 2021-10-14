import api from "../helpers/wp_api.js"
import { PostCard } from "./PostCard.js"
import { ajax } from "../helpers/ajax.js"

//declarar la función Router como async para que espere la llegada del recurso json, una vez llegue ya puede seguir con la ejecución normal del programa, que es el ocultar el loader con display: none
export async function Router (){

  const d = document,
    w = window,
    $main = d.getElementById("main")
    
  let { hash } = location 

  console.log(hash)

  if(!hash || hash === "#/"){
    await ajax({
      url: api.POSTS,
      options:{
        cache: "reload"
      },
      cbSuccess: (posts) => {
        console.log(posts)
  
        let html = ""
        posts.forEach(post => html += PostCard(post));
        // d.querySelector(".loader").style.display = "none"
        $main.innerHTML = html
      }
    })
  } else if(hash.includes("#/search")){
    $main.innerHTML = `<h2>Sección de busqueda</h2>`
    // d.querySelector(".loader").style.display = "none"

  } else if(hash === "#/contact"){
    $main.innerHTML = `<h2>Sección de contacto</h2>`
    // d.querySelector(".loader").style.display = "none"

  } else {
    $main.innerHTML = `<h2>Aquí cargará el contenido del post</h2>`
    // d.querySelector(".loader").style.display = "none"

  }

  d.querySelector(".loader").style.display = "none"


}