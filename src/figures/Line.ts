import { LineFunc, getLineFunction } from "../helpers";
import Figure from "./Figure";
import Point from "./Point";

export default class Line extends Figure {
  private lineFunc: LineFunc;

  constructor(private p1: Point, private p2: Point) {
    super(Infinity, "line");
    this.lineFunc = getLineFunction(p1, p2);
  }

  get point1() {
    return this.p1;
  }

  get point2() {
    return this.p2;
  }

  getLineFunc() {
    return this.lineFunc;
  }

  move() {}

  draw(ctx: CanvasRenderingContext2D) {
    ctx.beginPath();
    ctx.moveTo(this.p1.x, this.p1.y);
    ctx.lineTo(this.p2.x, this.p2.y);
    ctx.stroke();
  }

  intersect(objects: Figure[]): void {}
}
