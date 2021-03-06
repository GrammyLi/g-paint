class CirclePen extends G {
  constructor(x, y, ctx, fillColor, edgeColor, penSize) {
    super();
    this.x = x
    this.y = y
    this.ctx = ctx;
    this.fillColor = fillColor || this.ctx.fillStyle
    this.edgeColor = edgeColor || this.ctx.strokeStyle
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
    const {x, y, ctx} = this
    const r = this.penSize
    this.updateContextStyle()
    ctx.beginPath();
    ctx.arc(x, y, r, 0, 2 * Math.PI);
    ctx.fill();
    this.resetContextStyle()
  }
}