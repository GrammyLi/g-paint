class Paint extends Scene {
  constructor({ selector, w, h }) {
    super();
    this.canvas = e(selector);
    this.canvas.width = w;
    this.canvas.height = h;
    this.w = w;
    this.h = h;

    // 鼠标在画板上移动事件
    this.moveEvent = MoveEvent.new({ ele: this.canvas });
    // 当前选择的类型
    this.type = "circlePen";
    
    this.ctx = this.canvas.getContext("2d");
    // 初始化
    this.setup();
    // 绑定事件
    this.bindEvents();
  }
  setup() {
    // 默认 “第一次点击”
    this.p1 = [];
    this.p2 = [];
    this.ctx.lineWidth = 5
    this.painting = false
    this.positions = []
  }
  line(x, y) {
    const { p1, p2, ctx} = this;
    // 已经点击第一次
    if (p1.length > 0) {
      // 如果移动，则需要，先撤销当前先画的元素，然后再画新元素
      p2.length && this.elements.pop();
      this.p2 = [x, y];
      let ele = Line.new(p1, p2, ctx);
      this.add(ele);
      this.clear();
      this.draw();
    }
  }
  rect(x, y) {
    const { p1, p2, ctx} = this;
    // 已经点击第一次
    if (p1.length > 0) {
      // 如果移动，则需要，先撤销当前先画的元素，然后再画新元素
      p2.length && this.elements.pop();
      this.p2 = [x, y];
      let ele = Rect.new(p1, p2, ctx);
      this.add(ele);
      this.clear();
      this.draw();
    }
  }
  circle(x, y) {
    const { p1, p2, ctx} = this;
    // 已经点击第一次
    if (p1.length > 0) {
      // 如果移动，则需要，先撤销当前先画的元素，然后再画新元素
      p2.length && this.elements.pop();
      this.p2 = [x, y];
      let ele = Circle.new(p1, p2, ctx);
      this.add(ele);
      this.clear();
      this.draw();
    }
  }
  ellipse(x, y) {
    const { p1, p2, ctx} = this;
    // 已经点击第一次
    if (p1.length > 0) {
      // 如果移动，则需要，先撤销当前先画的元素，然后再画新元素
      p2.length && this.elements.pop();
      this.p2 = [x, y];
      let ele = Ellipse.new(p1, p2, ctx);
      this.add(ele);
      this.clear();
      this.draw();
    }
  }
  circlePen(x, y, isMove = false) {
    // 存位置
    this.positions.push([x, y])
    log('elements', this.elements)
    // this.p2.length && this.elements.pop();
    if (isMove) {
      this.p2 = [x, y];
    }  
   
    // this.elements.pop();
    // 添加元素
    const ps = copy(this.positions)
    const eles = ps.map(p => {
      const [x, y] = p
      log('this.ctx', this.ctx.strokeStyle)
      const ele = CirclePen.new(x, y, this.ctx)
      return ele
    });

    if (isMove) {
      // 如果移动的时候
      const l = this.elements.length
      log('l', l)
      const index = l === 0 ? 0 : l -1
      this.elements[index] = eles
    } else {
      // 如果是第一次点击
      this.add(eles)
    }
    
    this.clear()
    this.draw()
  }
  bindEventMove() {
    const { ctx, moveEvent } = this;
    const m = moveEvent;
    m.move((event) => {
      const x = event.offsetX;
      const y = event.offsetY;
      if (this.type === 'circlePen') {
         this.painting && this[this.type](x, y, true)
      } else {
        this[this.type](x, y);
      }
    });
    m.down((event) => {
      const x = event.offsetX;
      const y = event.offsetY;
      this.p1 = [x, y];
      if (this.type === 'circlePen') {
        this.circlePen(x, y)
        this.painting = true
      }
    });
    m.up((event) => {
      // 重置数据
      this.setup();
    });
  }
  bindEventControl() {
    bindEvent(e('.controls__btns'), 'click', event => {
      let target = event.target
      if (target.classList.contains('control__btn')) {
        let type = target.dataset.type;
        if (type === 'reset') {
          this.elements.pop()
          this.clear()
          this.draw()
        }
      }
    })
  }
  bindEventPenColor() {
    bindEvent(e(".controls__colors"), "click", (event) => {
      const target = event.target;
      const color = target.style.backgroundColor;
      log('更新', color)
      this.ctx.strokeStyle = color
      this.ctx.fillStyle = color
    });
  }
  bindEvents() {
    this.bindEventMove();
    this.bindEventControl();
    this.bindEventPenColor()
  }
  clear() {
    this.ctx.clearRect(0, 0, this.w, this.h);
  }
  save() {
    this.pixels = this.ctx.getImageData(0, 0, this.w, this.h);
  }
  set() {
    this.ctx.putImageData(this.pixels, 0, 0);
  }
}

const __main = () => {
  const [w, h] = [700, 700];
  const selector = ".g-canvas";
  Paint.new({ selector, w, h });
};

__main();
