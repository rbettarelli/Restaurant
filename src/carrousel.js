import {sleep} from './index'





let menuStat
const slideshowtog = () => {
    menuStat = !menuStat
    carrousel()
}


const carrousel = async function() {
   
        let element = document.querySelector('.imgBoxMenu')
        let i = 0;
        const backgrounds = [
            "url('./assets/acaraje.png')",
            "url('./assets/baiao.png')",
            "url('./assets/carangueijo.png')",
            "url('./assets/moqueca.png')",
            "url('./assets/sarapatel.png')",
            "url('./assets/tapioca.png')",
        ]

        while(menuStat) {
            await sleep(2000)
            element.style.opacity = 0;
            await sleep(1000)
            element.style.backgroundImage = backgrounds[i]
            console.log(backgrounds[i])
            await sleep(1000)
            element.style.opacity = 1;
            i++
            if (i === backgrounds.length) {
                i = 0
            }

        }
    



}

export{slideshowtog}