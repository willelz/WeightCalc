"use strict";
var Cuboid = /** @class */ (function () {
    function Cuboid(vertical, horizontal, height) {
        this.vertical = vertical;
        this.horizontal = horizontal;
        this.height = height;
    }
    Cuboid.prototype.calc = function (density) {
        return this.vertical * this.horizontal * this.height * density;
    };
    return Cuboid;
}());
var Cylinder = /** @class */ (function () {
    function Cylinder(diameter, height) {
        this.diameter = diameter;
        this.height = height;
    }
    Cylinder.prototype.calc = function (density) {
        return this.diameter / 2 * this.height * density;
    };
    return Cylinder;
}());
var getValue = function (searchID) {
    var element = document.getElementById(searchID);
    return Number(element.value);
};
var ShapeType;
(function (ShapeType) {
    ShapeType[ShapeType["cuboid"] = 0] = "cuboid";
    ShapeType[ShapeType["cylinder"] = 1] = "cylinder";
})(ShapeType || (ShapeType = {}));
var ShapeFactory = /** @class */ (function () {
    function ShapeFactory() {
    }
    ShapeFactory.prototype.getShapeType = function () {
        var content = document.getElementById("tab_content");
        if (!content)
            throw Error;
        var shapes = content.getElementsByTagName("section");
        for (var i = 0; i < shapes.length; i++) {
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
    };
    ShapeFactory.prototype.create = function () {
        var shapeType = this.getShapeType();
        switch (shapeType) {
            case ShapeType.cuboid:
                var v = getValue('cuboid_vertical');
                var h = getValue('cuboid_horizontal');
                var he = getValue('cuboid_height');
                return new Cuboid(v, h, he);
            case ShapeType.cylinder:
                var di = getValue('cylinder_diameter');
                var ch = getValue('cylinder_height');
                return new Cylinder(di, ch);
        }
    };
    return ShapeFactory;
}());
//計算ボタンを押した時
function calc() {
    var shape = new ShapeFactory().create();
    ;
    var d = getValue('blood');
    var ans = shape.calc(d);
    var ansel = document.getElementById('answer');
    ansel.innerText = String(ans);
}
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
//# sourceMappingURL=app.js.map