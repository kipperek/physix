import Circle from "./figures/Circle";
import Figure from "./figures/Figure";
import Line from "./figures/Line";
import Point from "./figures/Point";

let objects: Figure[] = [
  new Circle(new Point(100, 800), 50, 10),
  new Line(new Point(0, 1000), new Point(1700, 1000)),
];

const drawObjects = (ctx: CanvasRenderingContext2D) => {
  objects.forEach((object) => {
    object.draw(ctx);
  });
};

const moveObjects = (dt: number) => {
  objects.forEach((object) => {
    object.forces(dt);
    object.intersect(objects, dt);
    object.move();
  });
};

const main = (ctx: CanvasRenderingContext2D, canvas: HTMLCanvasElement) => {
  let lastUpdate = Date.now();

  setInterval(() => {
    let now = Date.now();
    let dt = now - lastUpdate;
    lastUpdate = now;

    moveObjects(dt);

    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawObjects(ctx);
  }, 10);
};

export default main;
