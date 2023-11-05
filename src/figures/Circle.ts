import {
  getIsPointBeetweenSection,
  getLineFunction,
  getLineIntersectionPoint,
} from "../helpers";
import Figure from "./Figure";
import Line from "./Line";
import Point from "./Point";

export default class Circle extends Figure {
  constructor(private p: Point, private h: number, mass: number) {
    super(mass, "circle");

  }

  move() {
    this.p.move(this.vector);
  }

  draw(ctx: CanvasRenderingContext2D) {
    ctx.beginPath();
    ctx.arc(this.p.x, this.p.y, this.h, 0, 2 * Math.PI);
    ctx.fillStyle = "orange";
    ctx.fill();
  }

  intersect(objects: Figure[]): void {
    objects.forEach((item) => {
      if (item === this) return;

      switch (item.figureType) {
        case "line":
          this.lineIntersection(item as Line);
      }
    });
  }

  lineIntersection = (line: Line) => {
    const P1 = this.p;
    const P2 = this.vector.getVectorPoint(P1);

    const vectorLine = new Line(P1, P2);
    const intersectionPoint = getLineIntersectionPoint(vectorLine, line);
    console.log(getIsPointBeetweenSection(P1, P2, intersectionPoint));

    
    if (getIsPointBeetweenSection(P1, P2, intersectionPoint)) {
      this.vector.reverse();
    }
  };
}
