import Figure from "./Figure";
import Vector from "./Vector";

export default class Point {
  constructor(public x: number, public y: number) {}

  move(v: Vector) {
    this.x += v.deltaX;
    this.y += v.deltaY;
  }
}
