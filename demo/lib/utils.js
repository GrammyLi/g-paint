const e = (sel) => document.querySelector(sel);

const es = (sel) => document.querySelectorAll(sel);

const debug = true;
const log = debug
  ? console.log.bind(console, "***🍉 debug 🍉***",)
  : function () {};

const int = (number) => Math.abs(parseInt(number, 10));

const bindEvent = (el, name, cb) => {
  el.addEventListener(name, cb)
}

const loadImage = (src, cb) => {
  const img = new Image();
  img.src = src;
  bindEvent(img, 'load',  () => {
    cb(img);
  })
};

const randomBetween = (start, end) => {
  let n = Math.random() * (end - start + 1)
  return ~~(n + start)
}

const appendHtml = (element, html) => {
  element.insertAdjacentHTML("beforeend", html);
};

const copy = arr =>  JSON.parse(JSON.stringify(arr))