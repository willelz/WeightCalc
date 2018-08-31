import { ActionResult } from "hyperapp";
import { State } from "./state";
import { Shapes } from "./shape";

export type Act<Params = void> = (
  data?: Params
) =>
  | ((state: State, actions: Actions) => ActionResult<State>)
  | ActionResult<State>;

export interface Actions {
  calc: Act;
  switchToCuboid: Act;
  switchToCylinder: Act;
}

export const actions = {
  calc: () => (state: State) => {
    const kg = state.shape.calc(state.density) * 1000; //トンが帰ってくるためkgにする
    const weight = kg.toFixed(2); //小数点以下２桁までにする
    return { weight };
  },
  switchToCuboid: () => ({
    shape: Shapes.cuboid,
    edges: Shapes.cuboid.edges
  }),
  switchToCylinder: () => ({
    shape: Shapes.cylinder,
    edges: Shapes.cylinder.edges
  })
};
