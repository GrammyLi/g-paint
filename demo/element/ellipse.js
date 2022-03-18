class Ellipse extends G {
  constructor(p1, p2, ctx, fillColor, edgeColor, fill = false) {
    super();
    this.p1 = p1;
    this.p2 = p2;
    this.ctx = ctx;
    this.fill = fill;
    this.fillColor = fillColor || this.ctx.fillStyle;
    this.edgeColor = edgeColor || this.ctx.strokeStyle;
  }
  updateContextStyle() {
    this._fillStyle = this.ctx.fillStyle
    this._strokeStyle = this.ctx.strokeStyle
    this.ctx.fillStyle = this.fillColor
    this.ctx.strokeStyle = this.edgeColor
  }
  resetContextStyle() {
    this.ctx.fillStyle = this._fillStyle
    this.ctx.strokeStyle = this._strokeStyle
  }
  draw() {
    const { ctx, fill, p1, p2 } = this;
    const [x1, y1] = p1;
    const [x2, y2] = p2;
    const angle = 0;
    ctx.beginPath();
    this.updateContextStyle()
    const x = (x1 + x2) / 2;
    const y = (y1 + y2) / 2;
    const w = x2 - x1;
    const h = y2 - y1;
    ctx.ellipse(x, y, int(w), int(h), (angle * Math.PI) / 180, 0, 2 * Math.PI);
    if (fill) {
      ctx.fill();
    } else {
      ctx.stroke();
    }
    this.resetContextStyle()
  }
}
