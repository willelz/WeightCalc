import { Shape, Shapes } from "./shape";

export interface State {
  shape: Shape;
  edges: string[];
  weight: number;
  density: number;
}

export const state: State = {
  shape: Shapes.cuboid,
  edges: Shapes.cuboid.edges,
  weight: 0,
  density: 7.86
};
