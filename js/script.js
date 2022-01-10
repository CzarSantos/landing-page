const $html = document.querySelector('html')
const $checkbox = document.querySelector('#checkbox')

$checkbox.addEventListener('change', function(){
  $html.classList.toggle('dark')
  
})


const btn = document.querySelector('#btn-menu')

function addMenu(){
  const nav = document.querySelector('.nav')
  nav.classList.toggle('active')
   
}

btn.addEventListener('click', addMenu)




