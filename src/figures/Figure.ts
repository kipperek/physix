import Gravity from "../Forces/Gravity";
import Point from "./Point";
import Vector from "./Vector";

export default abstract class Figure {
  protected vector = new Vector(0, 0);

  constructor(protected mass: number, public figureType: string) {}

  abstract draw(ctx: CanvasRenderingContext2D): void;
  abstract move(): void;
  abstract intersect(objects: Figure[]): void;

  public forces(dt: number) {
    if (this.mass !== Infinity) {
      Gravity(this.vector, dt);
    }
  }
}
