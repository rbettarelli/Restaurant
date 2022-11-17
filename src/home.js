import { $content, createHtmlElement } from "./index.js";
import { slideshowtog } from "./carrousel.js";

function homeRender() {
  const $main = document.createElement("main");
  $main.classList.add("main");

  
  const $title = createHtmlElement(
    "h1",
    null,
    ["mainTitle"],
    "Tradição que dá água na boca"
  );
  const $hr = createHtmlElement("hr", null, ["hrHome"], null);
  const $subtitle = createHtmlElement(
    "p",
    null,
    ["mainSubtitle"],
    ""
  );
  const $button = createHtmlElement("button", null, null, "Acesse o Menu");

  const $carrousel = document.createElement("div");
  $carrousel.classList.add("imgBoxMenu");
  const $titleBox = document.createElement("div");
  $titleBox.classList.add("titleBox");
  $titleBox.appendChild($title);
 
  $main.appendChild($titleBox);
  $main.appendChild($carrousel);

  $main.appendChild($hr);
  $main.appendChild($subtitle);

  $main.appendChild($button);
  $content.appendChild($main);
  slideshowtog();
}

export { homeRender };
