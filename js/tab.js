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
    for (var i = 0, l = menus.length; i < l; i++) {
        tab_init(menus[i], i);
    }
    function tab_init(link, index) {
        var id = link.hash.slice(1);
        var page = document.getElementById(id);
        if (!page)
            return;
        if (!current) {
            current = { page: page, menu: link };
            page.style.display = 'block';
            link.className = 'active';
        }
        else {
            page.style.display = 'none';
        }
        link.onclick = function () {
            current.page.style.display = 'none';
            current.menu.className = '';
            page.style.display = 'block';
            link.className = 'active';
            current.page = page;
            current.menu = link;
            return false;
        };
    }
})();
//# sourceMappingURL=tab.js.map