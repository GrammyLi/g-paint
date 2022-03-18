class Circle extends G {
  constructor(p1, p2, ctx, fillColor, edgeColor, fill = false) {
    super();
    this.p1 = p1;
    this.p2 = p2;
    this.ctx = ctx;
    this.fill = fill;
    this.fillColor = fillColor || this.ctx.fillStyle
    this.edgeColor = edgeColor || this.ctx.strokeStyle
  }
  draw() {
    const { ctx, fill, p1, p2,  } = this;
    const [x1, y1] = p1;
    const [x2, y2] = p2;
    const r2 = Math.pow(x1 - x2, 2) + Math.pow(y1 - y2, 2);
    const r = int(Math.sqrt(r2));
    ctx.beginPath();
    ctx.fillStyle = this.fillColor
    ctx.strokeStyle = this.edgeColor
    ctx.arc(x1, y1, r, 0, 2 * Math.PI);
    if (fill) {
      ctx.fill();
    } else {
      ctx.stroke();
    }
  }
}