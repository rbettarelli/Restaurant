import { $content, createHtmlElement } from "./index.js";

function about() {
  const $about = document.createElement("main");
  $about.classList.add("main");
  $about.innerHTML = `
<div class='headerAbout'>
<h1>Sobre nós</h1>
<p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum deserunt voluptatibus voluptatem unde, corporis, tenetur nemo voluptas officiis provident dolor vel ipsam optio recusandae natus quas illo cupiditate nesciunt. Esse.</p>
</div>
<div class ="mapAdress">
  <div class='map'>
  <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3657.0754267452385!2d-46.65342658452595!3d-23.565734367640022!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce59c8da0aa315%3A0xd59f9431f2c9776a!2sAv.%20Paulista%20-%20Bela%20Vista%2C%20S%C3%A3o%20Paulo%20-%20SP!5e0!3m2!1spt-BR!2sbr!4v1668627919419!5m2!1spt-BR!2sbr" width="400" height="300" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
 </div>
  <div class="adressContainer">
  <p>
  <i class="fi-xnsuxl-map-marker-solid"><svg class="fi-padding" role="img" xmlns="http://www.w3.org/2000/svg" width="1000mm" height="1000mm" viewBox="0 0 1000 1000" style="width:1.33em; height:1.33em;vertical-align: middle;"><path id="path" fill="currentColor" d=" M 500 88C 564 88 628 108 680 144C 794 222 843 379 794 507C 744 612 693 716 643 821C 617 870 601 930 548 957C 494 988 426 956 398 904C 340 788 285 670 228 553C 187 480 176 390 201 309C 237 182 362 88 494 88C 496 88 498 88 500 88C 500 88 500 88 500 88M 387 400C 387 462 438 512 500 512C 562 512 613 462 613 400C 613 338 562 287 500 287C 438 287 387 338 387 400C 387 400 387 400 387 400" transform=""></path></svg></i>
  Avenida Paulista Bela Vista São Paulo Brazil
 </p>
 <p>
 <i class="fi-xnsrxl-phone-solid"><svg class="fi-padding" role="img" xmlns="http://www.w3.org/2000/svg" width="1000mm" height="1000mm" viewBox="0 0 1000 1000" style="width:1.33em; height:1.33em;vertical-align: middle;"><path id="path" fill="currentColor" d=" M 640 179C 640 179 640 179 640 179C 662 156 692 140 724 139C 763 140 796 169 823 195C 853 222 865 262 859 301C 847 538 676 751 455 830C 391 851 323 870 254 861C 206 844 160 809 137 763C 129 729 145 692 169 668C 210 642 258 633 303 617C 355 600 404 631 446 658C 481 651 512 619 541 595C 590 550 632 495 657 431C 623 412 587 373 597 334C 605 281 614 226 640 179" transform="rotate(90, 500, 500) "></path></svg></i>
 +55 11 26430050
 </p>
 <div class='contactForm'>
 <form onsubmit ='return false'>
 <h3><i class="fi-xwsuxl-envelope-solid"><svg class="fi-padding" role="img" xmlns="http://www.w3.org/2000/svg" width="1000mm" height="1000mm" viewBox="0 0 1000 1000" style="width:1.33em; height:1.33em;vertical-align: middle;"><path id="path" fill="currentColor" d=" M 900 163C 934 163 962 191 962 225C 962 225 962 305 962 305C 962 305 579 569 579 569C 545 592 521 600 500 600C 479 600 455 592 421 569C 421 569 38 305 38 305C 38 305 38 225 38 225C 38 191 66 163 100 163C 100 163 900 163 900 163M 379 631C 379 631 379 631 379 631C 420 658 459 675 500 675C 541 675 580 658 621 631C 621 631 621 631 621 631C 621 631 962 396 962 396C 962 396 962 800 962 800C 962 834 934 862 900 862C 900 862 100 862 100 862C 66 862 38 834 38 800C 38 800 38 396 38 396C 38 396 379 631 379 631" transform=""></path></svg></i>
 Envie uma Mensagem </h3>
 <div class="inputBox">
            <span>Full Name</span>
            <input type="text" required />
            </div>
          <div class="inputBox">
          <span>Email</span>
            <input type="text" required />
           
          </div>
          <div class="inputBox">
          <span>Type your message...</span>
          <textarea required maxlength="350"></textarea>
           
 </form>

 </div>
 </div>

  

`;

  $content.appendChild($about);
}

export { about as aboutRender };
