
//DarkMode--------------------------------------------------


const $html = document.querySelector('html')
const $checkbox = document.querySelector('#checkbox')

$checkbox.addEventListener('change', function(){
  $html.classList.toggle('dark')
  
})


//MENU-------------------------------------------------

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




    /* EVENTO SCROLL --------------------------------------- */

    const item = document.querySelectorAll('[data-anime]');

    const animeScroll = () => {

      //top da pagina
      const windowTop = window.pageYOffset + window.innerHeight * 0.75
      
      item.forEach(element => {
        //se distancia da tela para o topo for maior que a distancia do meu elemento para o topo
        if(windowTop > element.offsetTop){
          element.classList.add('animate')
        }else{
          element.classList.remove('animate')
        }
      })

      
    

    }

    //execução
    animeScroll()

    window.addEventListener('scroll', ()=>{
      animeScroll()
    })