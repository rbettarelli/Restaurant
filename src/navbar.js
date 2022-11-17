import {$content, createHtmlElement} from './index.js'


function navBar() {

    //const $slider = document.createElement('div')
    //$slider.classList.add('imgBoxMenu')
    const name = createHtmlElement('h2', null, ['navName'],'Cantinho do Nordeste' )
    const navItems = ['HOME', 'MENU', 'ABOUT']
    const $ul = document.createElement('ul')


    navItems.forEach((item) => $ul.appendChild(createHtmlElement('li', null, null, item)));

    const $nav = document.createElement('nav')
    
    $nav.appendChild(name)
    $nav.appendChild($ul)
    $content.appendChild($nav)
}

export {navBar as navRender}


