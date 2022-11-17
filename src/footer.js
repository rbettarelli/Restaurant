import {$content, createHtmlElement} from './index.js'


const footer = () => {

    const $footer = document.createElement('footer')
  $footer.innerHTML = `
  <p>
  Copyright ©
  <script>
    document.write(new Date().getFullYear());
  </script>
</p>
<a href="https://github.com/rbettarelli" target="_blank">
  rbettarelli
  <i class="fab fa-github"></i
></a>
  
  `

  $content.appendChild($footer)

}
export {footer as footerRender}