class Paint extends G {
  constructor({ selector, w, h }) {
    super();
    this.canvas = e(selector);
    this.canvas.width = w;
    this.canvas.height = h;
    this.w = w;
    this.h = h;
    this.setup();
    // this.insertButtons();
    this.bindEvents();
  }
  setup() {
    // 画布上的元素
    this.elements = []
  }
  add(element) {
    this.element.push(element)
  }
  remove(elment) {
    this.element = this.elements.filter(ele => ele !== this.element)
  }
  draw() {
    
  }
  bindEvents() {

  }
}