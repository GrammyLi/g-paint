class Scene extends G {
  constructor() {
    super();
    // 画布上的元素
    this.elements = [];
  }
  draw() {
    this.drawElements(this.elements);
  }
  drawElements(elements) {
    elements.forEach((ele) => {
      if (Array.isArray(ele)) {
        this.drawElements(ele)
      } else {
        ele.draw();
      }
    });
  }
  add(ele) {
    this.elements.push(ele);
  }
  remove(element) {
    this.elements = this.elements.filter((ele) => ele !== element);
  }
}
