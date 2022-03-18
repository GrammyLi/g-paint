class CirclePen extends G {
  constructor(x, y, ctx, fillColor, edgeColor) {
    super();
    this.x = x
    this.y = y
    this.ctx = ctx;
    this.fillColor = fillColor || this.ctx.fillStyle
    this.edgeColor = edgeColor || this.ctx.strokeStyle
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
    const {x, y, ctx} = this
    const r = ctx.lineWidth
    this.updateContextStyle()
    ctx.beginPath();
    ctx.arc(x, y, r, 0, 2 * Math.PI);
    ctx.fill();
    this.resetContextStyle()
  }
}