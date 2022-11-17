import {footerRender} from './footer.js'
import { navRender } from './navbar.js';
import { homeRender } from './home.js';
import {aboutRender} from './about.js'
import { menuPage } from './menu.js';


const $content = document.getElementById("content");

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

function createHtmlElement(type, id, arrayClasses, content) {
    const element = document.createElement(type);
  
    if (id) element.id = id;
    if (arrayClasses)
      arrayClasses.forEach((myClass) => element.classList.add(myClass));
  
    if (content) element.innerText = content;
    return element;
  }

  function home () {
    $content.innerHTML ='' 
    navRender()
     homeRender();
    footerRender()
}

function about() {
    $content.innerHTML =''
    navRender()
    aboutRender()
    footerRender()
}


function menu() {
  $content.innerHTML =''
  navRender()
  menuPage()
  footerRender()
}

home()

document.addEventListener('click', (e) => {
    const target = e.target.innerText;
    if(target === 'HOME') home()
    if(target === 'ABOUT') about()
    if(target === 'MENU' || target === 'Acesse o Menu')  menu()
})



export {$content, createHtmlElement, sleep}




