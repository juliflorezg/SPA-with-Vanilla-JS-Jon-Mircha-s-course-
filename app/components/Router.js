import api from "../helpers/wp_api.js"
import { PostCard } from "./PostCard.js"
import { ajax } from "../helpers/ajax.js"

export function Router (){

  const d = document,
    w = window,
    $posts = d.getElementById("posts")
    
  let { hash } = location 

  console.log(hash)

  if(!hash || hash === "#/"){
    ajax({
      url: api.POSTS,
      options:{
        cache: "reload"
      },
      cbSuccess: (posts) => {
        console.log(posts)
  
        let html = ""
        posts.forEach(post => html += PostCard(post));
        d.querySelector(".loader").style.display = "none"
        $posts.innerHTML = html
      }
    })
  } else if(hash.includes("#/search")){
    $posts.innerHTML = `<h2>Sección de busqueda</h2>`
  } else if(hash === "#/contact"){
    $posts.innerHTML = `<h2>Sección de contacto</h2>`
  } else {
    $posts.innerHTML = `<h2>Aquí cargará el contenido del post</h2>`
  }

}