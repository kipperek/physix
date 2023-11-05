import Line from "./figures/Line";
import Point from "./figures/Point";

export type LineFunc = { a: number; b: number };

export const getLineFunction = (p1: Point, p2: Point) => {
  const a = p2.x - p1.x === 0 ? 0 : (p2.y - p1.y) / (p2.x - p1.x);
  const b = p2.x - p1.x === 0 ? 0 : (p2.x * p1.y - p1.x * p2.y) / (p2.x - p1.x);

  return { a, b };
};

export const getLineIntersectionPoint = (l1: Line, l2: Line) => {
  const l1f = l1.getLineFunc();
  const l2f = l2.getLineFunc();

  let x, y;
  if (l1f.a === 0 && l1f.b === 0) {
    x = l1.point1.x;
  } else {
    x = (l2f.b - l1f.b) / (l1f.a - l2f.a);
    y = (l1f.a * l2f.b - l1f.b * l2f.a) / (l1f.a - l2f.a);
  }

  y = l2.point2.y;
  
  return new Point(x, y);
};

export const getDistance = (p1: Point, p2: Point) => {
  return Math.sqrt(Math.pow(p1.x - p2.x, 2) + Math.pow(p1.y - p2.y, 2));
};

export const getIsPointBeetweenSection = (
  P1: Point,
  P2: Point,
  intersectionPoint: Point
) => {
  return (
    getDistance(P1, intersectionPoint) + getDistance(P2, intersectionPoint) ===
    getDistance(P1, P2)
  );
};
