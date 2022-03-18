class MoPen extends G {
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
    const { x, y, ctx, penSize, fillColor, edgeColor,  } = this;
    this.updateContextStyle()
    let pi = Math.PI;
    let pointNum = 10;
    let R = penSize * 15;
    let cs = []
    for (let i = 0; i < pointNum; i++) {
      let r = randomBetween(0, R);
      let t = randomBetween(0, 2 * pi);
      let x1 = r * Math.sin(t);
      let y1 = r * Math.cos(t);
      let c = CirclePen.new(x1 + x, y1 + y, ctx, fillColor, edgeColor, penSize)
      cs.push(c)
      c.draw()
    }
    this.resetContextStyle();
  }
}
