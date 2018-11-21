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

//hack for parcel-plugin-sw-cache
const swName = "service-worker.js";
if ("serviceWorker" in navigator) {
  navigator.serviceWorker
    .register(swName)
    .then(function(registration) {
      // 登録成功
      console.log(
        "ServiceWorker registration successful with scope: ",
        registration.scope
      );
    })
    .catch(function(err) {
      // 登録失敗 :(
      console.log("ServiceWorker registration failed: ", err);
    });
}
