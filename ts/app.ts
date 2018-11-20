import "../node_modules/purecss/build/base-min.css";
import "../node_modules/purecss/build/forms-min.css";
import "../node_modules/purecss/build/buttons-min.css";
import "../css/style.css";

import { calc } from "./shape";
import tab from "./tab";
tab();

//計算登録
const btn = document.getElementById("calc_button");
if (btn) btn.onclick = calc;
