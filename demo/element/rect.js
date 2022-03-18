class Rect extends G {
  constructor(p1, p2, ctx, fill = false) {
    super();
    this.p1 = p1;
    this.p2 = p2;
    this.ctx = ctx;
    this.fill = fill;
  }
  draw() {
    const { ctx, fill, p1, p2,} = this;
    const [x1, y1] = p1;
    const [x2, y2] = p2;
    const w = x2 - x1;
    const h = y2 - y1;
    if (fill) {
      ctx.fillRect(x1, y1, w, h);
      ctx.fill();
    } else {
      ctx.strokeRect(x1, y1, w, h);
    }
  }
}