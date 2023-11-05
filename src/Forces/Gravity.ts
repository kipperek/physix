import Vector from "../figures/Vector";

// 1m === 1.5px;

export const getGravityAcc = (dt: number) => {
  const gravityAcc = 9.81 / 1.5; // 1/10 px / sec^2
  return (gravityAcc * dt) / 1000;
};
