
//MENU
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



//Type---------------------------------------------------

    //Pega o proprio elemento 
    function typeWriter(elemento) {
      //Array para pegar o texto/letras
      //metodo 'split()' divide texto em diferentes partes
      const textoArray = elemento.innerHTML.split('');
      elemento.innerHTML = '' //limpa html

      //acessar cada letra do array
      //'i' - index
      textoArray.forEach((letra, i) => {
        //animar com o tempo
        setTimeout(() =>
          elemento.innerHTML += letra, 100 * i)
        //adiciona uma letra seguida da outra
        // vezes o index
      });


    }

    setInterval(() => { typeWriter(titulo) }, 7000);



    const titulo = document.querySelector('#titulo-type')
    typeWriter(titulo)//elemento titulo



//Scroll

const target = document.querySelectorAll('[data-anime]')
const animationClass = 'animate'; 

//debounce

const debounce = function(func, wait, immediate) {
  let timeout;
  return function(...args) {
    const context = this;
    const later = function () {
      timeout = null;
      if (!immediate) func.apply(context, args);
    };
    const callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) func.apply(context, args);
  };
};

//function
function animeScroll(){
  //istancoia da barra de scroll ao topo do site
  const windowTop = window.pageYOffset + ((window.innerHeight * 3)/4);
  //Falar com cada elemento em relação ao topo
  target.forEach(function(element){
    //comparar se altura da janela é maior q a do elemento
    if((windowTop)> element.offsetTop){
      element.classList.add(animationClass)
    }else{
      //remover
      element.classList.remove(animationClass)
    }
  })
}

//ativar quando o site é acessado
animeScroll();


//se igual a '0'(false) não executa | verifica quantidade de elemento   
if(target.length){
//window : objeto geral
window.addEventListener('scroll',debounce(function(){
animeScroll();
},150))
}
//diminuir quantidade de ativação com 'debounce',200(time)

