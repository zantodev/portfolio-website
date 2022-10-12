const btn = document.getElementById('menu-btn')
const nav = document.getElementById('menu')
const moon = document.querySelector("#moon")
const body = document.querySelector("body")
const hLinks = document.querySelectorAll("#hLink")

btn.addEventListener('click', () => {
  btn.classList.toggle('open')
  nav.classList.toggle('hidden')
})

hLinks.forEach(link=>{
  link.addEventListener("click", ()=>{
    menu.classList.toggle("hidden")
    hamburger.classList.toggle("bg-white")
  })
})

moon.addEventListener("click", ()=>{
  body.classList.toggle("dark")
})