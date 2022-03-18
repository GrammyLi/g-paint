class TrianglePen extends G {
  constructor(x, y, ctx, fillColor, edgeColor, penSize) {
    super();
    this.x = x;
    this.y = y;
    this.ctx = ctx;
    this.fillColor = fillColor || this.ctx.fillStyle;
    this.edgeColor = edgeColor || this.ctx.strokeStyle;
    this.penSize = penSize || this.ctx.lineWidth
  }
  updateContextStyle() {
    this._fillStyle = this.ctx.fillStyle
    this._strokeStyle = this.ctx.strokeStyle
    this._lineWidth = this.ctx.lineWidth
    this.ctx.fillStyle = this.fillColor
    this.ctx.strokeStyle = this.edgeColor
    this.ctx.lineWidth = this.penSize
  }
  resetContextStyle() {
    this.ctx.fillStyle = this._fillStyle
    this.ctx.strokeStyle = this._strokeStyle
    this.ctx.lineWidth = this._lineWidth
  }
  draw() {
    const { x, y, ctx, penSize } = this;
    let s = penSize / 2;
    let x1 = x - s / 2;
    let y1 = y - s;
    let x2 = x + s / 2;
    let y2 = y + s;
    this.updateContextStyle()
    ctx.beginPath();
    ctx.moveTo(x1, y1);
    ctx.lineTo(x1 + penSize, y1);
    ctx.lineTo(x2, y2);
    ctx.lineTo(x2 - penSize, y2);
    ctx.fill();
    this.resetContextStyle();
  }
}
