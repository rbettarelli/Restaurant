import { $content } from "./index.js";


const createMenu = () => {
    const $menu = document.createElement('main')
    $menu.classList.add('mainMenu')

    $menu.appendChild(createMenuItem(
        './assets/menu-images/arrumadinho.jpeg',
        'Arrumadinho',
        'Arroz | Feijão de corda | Vinagrete | Farofa'

    ))
    $menu.appendChild(createMenuItem(
        './assets/menu-images/baiao.jpg',
        'Baiao de Dois',
        'Mistura de Arroz | Feojao Verde | Carne Seca | Bacon e Calabresa'

    ))
    $menu.appendChild(createMenuItem(
        './assets/menu-images/mariabonita.jpg',
        'Maria Bonita',
        'Jabá na chapa acebolado com mandioca |  Feijao fradinho e arroz'

    ))
    $menu.appendChild(createMenuItem(
        './assets/menu-images/favada.jpg',
        'Favada',
        'Acompanha Arroz | Vinagrete | Farofa'

    ))
    $menu.appendChild(createMenuItem(
        './assets/menu-images/mocoto.jpg',
        'Mocotó',
        'Acompanha Arroz | Feijao | Salada de alface, tomate e cebola '

    ))
    $menu.appendChild(createMenuItem(
        './assets/menu-images/rabada.jpg',
        'Rabada',
        'Acompanha Arroz | Feijao | Salada '

    ))
    
    return $menu
}

const createMenuItem = (img, name, description) => {
    
    const $menuItem = document.createElement('div')
    $menuItem.classList.add('menuItem')


    const $menuImage = document.createElement('img')
    $menuImage.classList.add('menuImage')
    $menuImage.src = img

    const $menuName = document.createElement('h2')
    $menuName.classList.add('menuName')
    $menuName.innerHTML = name
    

    const $menuDescription = document.createElement('p')
    $menuDescription.classList.add('menuDescription')
    $menuDescription.innerHTML = description

    $menuItem.appendChild($menuImage)
    $menuItem.appendChild($menuName)
    $menuItem.appendChild($menuDescription)

    return $menuItem


}

const loadMenu = () =>{

    

    
    $content.appendChild(createMenu())

}


export {loadMenu as menuPage}
