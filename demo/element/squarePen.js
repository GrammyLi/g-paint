class SquarePen extends G {
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
    // let s = this.penSize / 2;
    let x1 = x - s;
    let y1 = y - s;
   
    let x2 = x + s;
    let y2 = y + s;
   
    const w = x2 - x1;
    const h = y2 - y1;
     
      ctx.fillRect(x1, y1, w, h);
      ctx.fill();
   
    this.resetContextStyle()
  }
}