import api from "./helpers/wp_api.js"
import { ajax } from "./helpers/ajax.js"
import { Header } from "./components/Header.js"
import { Loader } from "./components/Loader.js"
import { Posts } from "./components/Posts.js"
import { PostCard } from "./components/PostCard.js"


export function App (){
  // document.getElementById("root").innerHTML = `<h1>Hola, bienvenidos a mi primer SPA con Vanilla JS</h1>`
  
  // console.log(api)

  // ajax({
  //   url: api.POSTS,
  //   options:{cache: "reload"},
  //   cbSuccess: (posts) => {
  //     console.log(posts)
  //   }
  // })

  // ajax({
  //   url: api.CATEGORIES,
  //   options:{cache: "reload"},
  //   cbSuccess: (categories) => {
  //     console.log(categories)
  //   }
  // })

  const d = document,
    $root = d.getElementById("root")

    $root.appendChild(Header())
    $root.appendChild(Posts())
    $root.appendChild(Loader())


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
        d.getElementById("posts").innerHTML = html
      }
    })
    
}
