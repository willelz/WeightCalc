interface Shape {
    calc(density: number): number;
}

class Cuboid implements Shape {
    public constructor(private vertical: number, private horizontal: number, private height: number) {
    }
    public calc(density: number) {
        return this.vertical * this.horizontal * this.height * density
    }
}

class Cylinder implements Shape {
    public constructor(private diameter: number, private height: number) {
    }
    public calc(density: number) {
        return this.diameter / 2 * this.height * density;
    }
}

const getValue = (searchID: string): number => {
    const element = <HTMLInputElement>document.getElementById(searchID);
    return Number(element.value);
}

enum ShapeType {
    cuboid,
    cylinder,
}

class ShapeFactory {
    private getShapeType(): ShapeType {
        const content = document.getElementById("tab_content");
        if (!content) throw Error;
        const shapes = content.getElementsByTagName("section");

        for (let i = 0; i < shapes.length; i++) {
            if (shapes[i].style.display === 'block') {
                switch (shapes[i].id) {
                    case 'cuboid':
                        return ShapeType.cuboid;
                    case 'cylinder':
                        return ShapeType.cylinder;
                }
            }
        }
        throw Error;
    }
    public create(): Shape {
        const shapeType = this.getShapeType();

        switch (shapeType) {
            case ShapeType.cuboid:
                const v = getValue('cuboid_vertical');
                const h = getValue('cuboid_horizontal');
                const he = getValue('cuboid_height');
                return new Cuboid(v, h, he);
            case ShapeType.cylinder:
                const di = getValue('cylinder_diameter');
                const ch = getValue('cylinder_height');
                return new Cylinder(di, ch);
        }
    }
}

//計算ボタンを押した時
function calc() {
    const shape = new ShapeFactory().create();;
    const d = getValue('blood');
    const ans = shape.calc(d);
    const ansel = <HTMLInputElement>document.getElementById('answer');
    ansel.innerText = String(ans);
}

//タブ切り替え
(function () {
    const menu = document.getElementById('menu');
    const content = document.getElementById('tab_content');
    if (!menu) {
        return;
    }
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
            return false;
        };
    }
})();