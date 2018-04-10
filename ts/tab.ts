//タブ切り替え
export default function tab() {
    const menu = document.getElementById('menu');
    const content = document.getElementById('tab_content');
    if (!menu) { throw new Error('menu error'); }
    let menus = menu.getElementsByTagName('a');
    let current: { page: HTMLElement, menu: HTMLElement };

    for (let i = 0; i < menus.length; i++) {
        tab_init(menus[i]);
    }

    function tab_init(link: HTMLAnchorElement) {
        const id = link.hash.slice(1);
        const page = document.getElementById(id);
        if (!page) throw new Error(id + 'は存在しない');

        if (!current) { // 状態の初期化
            current = { page: page, menu: link };
            page.style.display = 'block';
            link.className = 'active';
        } else {
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
            const weight = <HTMLInputElement>document.getElementById('weight');
            weight.value = '';
            return false; //href属性無効
        };
    }
}