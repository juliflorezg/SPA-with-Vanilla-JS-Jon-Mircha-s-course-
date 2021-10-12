import api from "./helpers/wp_api.js"
import { ajax } from "./helpers/ajax.js"
import { Title } from "./components/Title.js"
import { Loader } from "./components/Loader.js"


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

    $root.appendChild(Title())
    $root.appendChild(Loader())

    // ajax({
    //   url: "non-valid",
    //   cbSuccess: (err) => {}
    // })
    
}
