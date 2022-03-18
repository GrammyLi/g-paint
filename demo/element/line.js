class Line extends G {
  constructor(p1, p2, ctx ) {
    super();
    this.p1 = p1;
    this.p2 = p2;
    this.ctx = ctx;
  }
  draw() {
    const { ctx, p1, p2 } = this;
    const [x1, y1] = p1;
    const [x2, y2] = p2;
    ctx.beginPath();
    ctx.moveTo(x1, y1);
    ctx.lineTo(x2, y2);
    ctx.stroke();
  }
}