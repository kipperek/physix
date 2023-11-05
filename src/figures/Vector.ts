import Point from "./Point";

export default class Vector {
  constructor(public deltaX: number, public deltaY: number) {}

  public add(x: number, y: number) {
    this.deltaX += x;
    this.deltaY += y;
  }

  public getVectorPoint(p: Point) {
    return new Point(p.x + this.deltaX, p.y + this.deltaY);
  }

  public stop() {
    this.deltaX = 0;
    this.deltaY = 0;
  }

  public reverse() {
    this.deltaX = -this.deltaX;
    this.deltaY = -this.deltaY;
  }
}
