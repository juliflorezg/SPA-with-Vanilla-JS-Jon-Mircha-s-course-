import { Header } from "./components/Header.js"
import { Loader } from "./components/Loader.js"
import { Main } from "./components/Main.js"
import { Router } from "./components/Router.js"


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

  const $root = document.getElementById("root")

    console.log($root)

    $root.innerHTML = null  // Esta linea permite que no se vuelvan a crear los elementos del header, post y loader cuando se cambia de vista gracias al envento hashchange
    $root.appendChild(Header())
    $root.appendChild(Main())
    $root.appendChild(Loader())

    Router()
    
    
}
