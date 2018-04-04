//タブ切り替え
(function () {
    const menu = document.getElementById('menu');
    const content = document.getElementById('tab_content');
    if (!menu) { return; }
    let menus = menu.getElementsByTagName('a');
    let current: { page: HTMLElement, menu: HTMLElement };

    for (let i = 0, l = menus.length; i < l; i++) {
        tab_init(menus[i], i);
    }
    function tab_init(link: HTMLAnchorElement, index: number) {
        const id = link.hash.slice(1);
        const page = document.getElementById(id);
        if (!page) return;
        if (!current) { // 状態の初期化
            current = { page: page, menu: link };
            page.style.display = 'block';
            link.className = 'active';
        } else {
            page.style.display = 'none';
        }
        link.onclick = function () {
            current.page.style.display = 'none';
            current.menu.className = '';
            page.style.display = 'block';
            link.className = 'active';
            current.page = page;
            current.menu = link;

            //結果をリセット
            const ans = <HTMLInputElement>document.getElementById('answer');
            ans.innerText = "0";
            return false;
        };
    }
})();