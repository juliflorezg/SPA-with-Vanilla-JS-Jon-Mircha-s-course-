import api from "../helpers/wp_api.js"
import { PostCard } from "./PostCard.js"
import { ajax } from "../helpers/ajax.js"
import { Post } from "./Post.js"
import { SearchCard } from "./SearchCard.js"

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
    // $main.innerHTML = `<h2>Sección de busqueda</h2>`
    // d.querySelector(".loader").style.display = "none"
    let query = localStorage.getItem("wpSearch")

    if(!query) {
      d.querySelector(".loader").style.display = "none"
      return false
    }

    await ajax({
      url: `${api.SEARCH}${query}`,
      options:{
        cache: "reload"
      },
      cbSuccess: (search) => {
        console.log(search)
        
        let html = ""

        if(search.length === 0) {
          html = `
          <p class="error">
          No existen resultados de busqueda para el término <mark>${query}</mark>
          </p>
          `
        } else{
          search.forEach(post => html += SearchCard(post));
          d.querySelector(".loader").style.display = "none"

        }
        $main.innerHTML = html
  
        // let html = ""
        // posts.forEach(post => html += PostCard(post));
        // d.querySelector(".loader").style.display = "none"
      }
    })


  } else if(hash === "#/contact"){
    $main.innerHTML = `<h2>Sección de contacto</h2>`
    // d.querySelector(".loader").style.display = "none"

  } else {
    // $main.innerHTML = `<h2>Aquí cargará el contenido del post</h2>`
    // d.querySelector(".loader").style.display = "none"

    await ajax({
      url: `${api.POST}?slug=${hash.slice(2)}`,
      options:{
        cache: "reload"
      },
      cbSuccess: (post) => {
        console.log(post)
        
        $main.innerHTML = Post(post)
  
        // let html = ""
        // posts.forEach(post => html += PostCard(post));
        // d.querySelector(".loader").style.display = "none"
      }
    })

    console.log(`${api.POST}?slug=${hash.slice(2)}`)

  }

  d.querySelector(".loader").style.display = "none"


}