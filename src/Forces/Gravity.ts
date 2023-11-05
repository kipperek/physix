import Vector from "../figures/Vector";

// 1m === 1.5px;

export default (v: Vector, dt: number) => {
  const gravityAcc = 9.81 / 1.5; // 1/10 px / sec^2

  const currentAcc = (gravityAcc * dt) / 1000;
  v.add(0, currentAcc);
};
