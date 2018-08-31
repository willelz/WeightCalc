import "../node_modules/purecss/build/base-min.css";
import "../node_modules/purecss/build/forms-min.css";
import "../node_modules/purecss/build/buttons-min.css";
import "../css/style.css";

import { app } from "hyperapp";
import { state } from "./state";
import { actions } from "./actions";
import { view } from "./view";

app(state, actions, view, document.getElementById("app"));
