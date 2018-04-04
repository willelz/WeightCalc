"use strict";
//タブ切り替え
(function () {
    var menu = document.getElementById('menu');
    var content = document.getElementById('tab_content');
    if (!menu) {
        return;
    }
    var menus = menu.getElementsByTagName('a');
    var current;
    for (var i = 0; i < menus.length; i++) {
        tab_init(menus[i]);
    }
    function tab_init(link) {
        var id = link.hash.slice(1);
        var page = document.getElementById(id);
        if (!page)
            throw new Error('menuのIDは存在しない');
        if (!current) {
            current = { page: page, menu: link };
            page.style.display = 'block';
            link.className = 'active';
        }
        else {
            page.style.display = 'none';
        }
        link.onclick = function () {
            //カレントを消す
            current.page.style.display = 'none';
            page.style.display = 'block';
            //カレントを自分にする
            current.page = page;
            current.menu = link;
            //ページ移動時計算結果をクリア
            var weight = document.getElementById('weight');
            weight.value = '';
            return false; //href属性無効
        };
    }
})();
//# sourceMappingURL=tab.js.map