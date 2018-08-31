import {h} from "hyperapp"
import {State} from "./state"
import {Actions} from "./actions"

const Column = ({title}) => (
  <div>
    <label for={title}>
      <img class="from_img" src={"img/out/cuboid_vertical.svg"} /> //Todo: 形状名も渡すようにする
    </label>

    <input type="number" id={title} required />

    <select id={ title + "_unit" } class="unit">
      <option value="mm">mm</option>
      <option value="M">M</option>
    </select>
  </div>
)

export const view = (state: State, actions: Actions) => (
  <div>
    <button onclick={actions.switchToCuboid}>直方体</button>
    <button onclick={actions.switchToCylinder}>AAA</button>
   { state.edges.map(t => (<Column title={t} />)) }

        <section class="pure-form">
          {/* <!-- 材質選択 --> */}
            <div class="control_group">
                <label for="blood">材質</label>
                <select id="blood">
                    <option value="7.86">鉄 7.86</option>
                    <option value="11.36">鉛 11.36</option>
                    <option value="8.93">銅 8.93</option>
                    <option value="2.7">アルミニウム 2.7</option>
                    <option value="4.51">チタン 4.51</option>
                </select>
                <span>g/cm3</span>
            </div>
            {/* <!-- 計算ボタン --> */}
            <div class="pure-controls calcbutton">
                <button id="calc_button" class="pure-button" onclick={actions.calc}>計算</button>
            </div>
            <section class "pure-form">
              {/* <!-- 計算結果表示 --> */}
                <div class="control_group">
                    <label for="weight">重量</label>
                    <input type="number" step="0.01" id="weight" value={state.weight}>
                    <span>kg</span>
                </div>
            </section>
          </section>
  </div>
)
