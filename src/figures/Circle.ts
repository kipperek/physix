import { getGravityAcc } from "../Forces/Gravity";
import {
  getIsPointBeetweenSection,
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

  intersect(objects: Figure[], dt: number): void {
    objects.forEach((item) => {
      if (item === this) return;

      switch (item.figureType) {
        case "line":
          this.lineIntersection(item as Line, dt);
      }
    });
  }

  lineIntersection = (line: Line, dt: number) => {
    const P1 = new Point(this.p.x, this.p.y + this.h);

    const P2 = this.vector.getVectorPoint(P1);

    const vectorLine = new Line(P1, P2);
    const intersectionPoint = getLineIntersectionPoint(vectorLine, line);

    if (getIsPointBeetweenSection(P1, P2, intersectionPoint)) {
      this.vector.reverse();

      const gravity = getGravityAcc(dt);
      if (this.vector.length < gravity) {
        //todo remove last added force before bouncing
        this.vector.stop();
      } else {
        this.vector.add(0, gravity);
      }
      //todo
    }
  };
}
