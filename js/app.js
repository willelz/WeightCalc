"use strict";
//直方体
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
//円柱
var Cylinder = /** @class */ (function () {
    function Cylinder(diameter, height) {
        this.diameter = diameter;
        this.height = height;
    }
    Cylinder.prototype.calc = function (density) {
        var r = this.diameter / 2;
        return r * r * Math.PI * this.height * density;
    };
    return Cylinder;
}());
//H鋼
var HBeam = /** @class */ (function () {
    function HBeam(vertical, horizontal, verticalWidth, horizontalWidth, length) {
        this.vertical = vertical;
        this.horizontal = horizontal;
        this.verticalWidth = verticalWidth;
        this.horizontalWidth = horizontalWidth;
        this.length = length;
    }
    HBeam.prototype.calc = function (density) {
        var ll = (this.vertical * this.verticalWidth) * 2; //縦2つ
        var hh = (this.horizontal - this.verticalWidth * 2) * this.horizontalWidth; //横
        return (ll + hh) * this.length * density;
    };
    return HBeam;
}());
//パイプ形
var Pipe = /** @class */ (function () {
    function Pipe(diameter, height, thickness) {
        this.diameter = diameter;
        this.height = height;
        this.thickness = thickness;
    }
    Pipe.prototype.calc = function (density) {
        var r = this.diameter / 2;
        var ir = r - this.thickness;
        return (r * r - ir * ir) * Math.PI * this.height * density;
    };
    return Pipe;
}());
//HTMLInputElementのvalueを得る
var getValue = function (searchID) {
    var element = document.getElementById(searchID);
    return Number(element.value);
};
var ShapeType;
(function (ShapeType) {
    ShapeType[ShapeType["cuboid"] = 0] = "cuboid";
    ShapeType[ShapeType["cylinder"] = 1] = "cylinder";
    ShapeType[ShapeType["hbeam"] = 2] = "hbeam";
    ShapeType[ShapeType["pipe"] = 3] = "pipe";
})(ShapeType || (ShapeType = {}));
var ShapeFactory = /** @class */ (function () {
    function ShapeFactory() {
    }
    //今表示されているものを返す
    ShapeFactory.prototype.getShapeType = function () {
        var content = document.getElementById("tab_content");
        if (!content)
            throw new Error("No tab_content");
        var shapes = content.getElementsByTagName("section");
        for (var i = 0; i < shapes.length; i++) {
            if (shapes[i].style.display === 'block') {
                switch (shapes[i].id) {
                    case 'cuboid':
                        return ShapeType.cuboid;
                    case 'cylinder':
                        return ShapeType.cylinder;
                    case 'hbeam':
                        return ShapeType.hbeam;
                    case 'pipe':
                        return ShapeType.pipe;
                }
            }
        }
        throw new Error("No block element");
    };
    //今表示されている形の値をセットして作る
    ShapeFactory.prototype.create = function () {
        var shapeType = this.getShapeType();
        switch (shapeType) {
            case ShapeType.cuboid:
                var v = getValue('cuboid_vertical') / 1000; //mmを期待しているためMにする
                var h = getValue('cuboid_horizontal') / 1000;
                var he = getValue('cuboid_height') / 1000;
                return new Cuboid(v, h, he);
            case ShapeType.cylinder:
                var di = getValue('cylinder_diameter') / 1000;
                var ch = getValue('cylinder_height') / 1000;
                return new Cylinder(di, ch);
            case ShapeType.hbeam:
                var hv = getValue('hbeam_vertical') / 1000;
                var hh = getValue('hbeam_horizontal') / 1000;
                var t2 = getValue('hbeam_vertical_width') / 1000;
                var t1 = getValue('hbeam_horizontal_width') / 1000;
                var hl = getValue('hbeam_length') / 1000;
                return new HBeam(hv, hh, t2, t1, hl);
            case ShapeType.pipe:
                var pd = getValue('pipe_diameter') / 1000;
                var ph = getValue('pipe_height') / 1000;
                var pt = getValue('pipe_thickness') / 1000;
                return new Pipe(pd, ph, pt);
            default:
                throw new Error("shapeType Error");
        }
    };
    return ShapeFactory;
}());
//計算ボタンを押した時
function calc() {
    var shape = new ShapeFactory().create();
    ;
    var d = getValue('blood');
    var ans = shape.calc(d) * 1000; //トンが帰ってくるためkgにする
    var weight = document.getElementById('weight');
    weight.value = ans.toFixed(2); //小数点以下2桁までにする
}
//# sourceMappingURL=app.js.map