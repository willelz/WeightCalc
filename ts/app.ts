interface Shape {
    calc(density: number): number;
}

//直方体
class Cuboid implements Shape {
    public constructor(private vertical: number, private horizontal: number, private height: number) {
    }
    public calc(density: number) {
        return this.vertical * this.horizontal * this.height * density;
    }
}

//円柱
class Cylinder implements Shape {
    public constructor(private diameter: number, private height: number) {
    }
    public calc(density: number) {
        const r = this.diameter / 2;
        return r * r * Math.PI * this.height * density;
    }
}

//H鋼
class HBeam implements Shape {
    public constructor(private vertical: number, private horizontal: number, private verticalWidth: number, private horizontalWidth: number, private length: number) {
    }
    public calc(density: number) {
        const ll = (this.vertical * this.verticalWidth) * 2;  //縦2つ
        const hh = (this.horizontal - this.verticalWidth * 2) * this.horizontalWidth;  //横
        return (ll + hh) * this.length * density;
    }
}

//パイプ形
class Pipe implements Shape {
    public constructor(private diameter: number, private height: number, private thickness: number) {
    }
    calc(density: number) {
        const r = this.diameter / 2;
        const ir = r - this.thickness;
        return (r * r - ir * ir) * Math.PI * this.height * density;
    }
}

//HTMLInputElementのvalueを得る
const getValue = (searchID: string): number => {
    const element = <HTMLInputElement>document.getElementById(searchID);
    return Number(element.value);
}

enum ShapeType {
    cuboid,
    cylinder,
    hbeam,
    pipe,
}

class ShapeFactory {
    //今表示されているものを返す
    private getShapeType(): ShapeType {
        const content = document.getElementById("tab_content");
        if (!content) throw new Error("No tab_content");
        const shapes = content.getElementsByTagName("section");

        for (let i = 0; i < shapes.length; i++) {
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
    }
    //今表示されている形の値をセットして作る
    public create(): Shape {
        const shapeType = this.getShapeType();

        switch (shapeType) {
            case ShapeType.cuboid:
                const v = getValue('cuboid_vertical') / 1000;  //mmを期待しているためMにする
                const h = getValue('cuboid_horizontal') / 1000;
                const he = getValue('cuboid_height') / 1000;
                return new Cuboid(v, h, he);
            case ShapeType.cylinder:
                const di = getValue('cylinder_diameter') / 1000;
                const ch = getValue('cylinder_height') / 1000;
                return new Cylinder(di, ch);
            case ShapeType.hbeam:
                const hv = getValue('hbeam_vertical') / 1000;
                const hh = getValue('hbeam_horizontal') / 1000;
                const t2 = getValue('hbeam_vertical_width') / 1000;
                const t1 = getValue('hbeam_horizontal_width') / 1000;
                const hl = getValue('hbeam_length') / 1000;
                return new HBeam(hv, hh, t2, t1, hl);
            case ShapeType.pipe:
                const pd = getValue('pipe_diameter') / 1000;
                const ph = getValue('pipe_height') / 1000;
                const pt = getValue('pipe_thickness') / 1000;
                return new Pipe(pd, ph, pt);
            default:
                throw new Error("shapeType Error");
        }
    }
}

//計算ボタンを押した時
function calc() {
    const shape = new ShapeFactory().create();;
    const d = getValue('blood');
    const ans = shape.calc(d) * 1000; //トンが帰ってくるためkgにする
    const weight = <HTMLInputElement>document.getElementById('weight');
    weight.value = ans.toFixed(2); //小数点以下2桁までにする
}