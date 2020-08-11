import {string} from "./css.js";

let text = document.querySelector("#text");
let style = document.querySelector("#style");
let buttonPause = document.querySelector("#pause");
let buttonPlay = document.querySelector("#play");
let buttonNormal = document.querySelector("#normal");
let buttonFast = document.querySelector("#fast");

const run = () => {
  n += 1;
  if (n > string.length) {
    window.clearInterval(id);
    return;
  }
  text.innerText = string.substr(0, n);
  style.innerHTML = string.substr(0, n);
  text.scrollTop = text.scrollHeight;
};

let n = 1;
let timeout = 50;
let id = setInterval(run, timeout);

buttonPause.onclick = () => {
  window.clearInterval(id);
};

buttonPlay.onclick = () => {
  timeout = 50;
  id = setInterval(run, timeout);
};

buttonNormal.onclick = () => {
  window.clearInterval(id);
  timeout = 50;
  id = setInterval(run, timeout);
};

buttonFast.onclick = () => {
  window.clearInterval(id);
  timeout = 0;
  id = setInterval(run, timeout);
};
