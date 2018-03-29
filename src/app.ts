interface Shape {
    calc(density: number): number;
}

//直方体
class Cuboid implements Shape {
    public constructor(private vertical: number, private horizontal: number, private height: number) {
    }
    public calc(density: number) {
        return this.vertical * this.horizontal * this.height * density
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
        return ((this.vertical * this.horizontalWidth) * 2 + this.verticalWidth * this.horizontal) * this.length * density;
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
                const v = getValue('cuboid_vertical');
                const h = getValue('cuboid_horizontal');
                const he = getValue('cuboid_height');
                return new Cuboid(v, h, he);
            case ShapeType.cylinder:
                const di = getValue('cylinder_diameter');
                const ch = getValue('cylinder_height');
                return new Cylinder(di, ch);
            case ShapeType.hbeam:
                const hv = getValue('hbeam_vertical');
                const hh = getValue('hbeam_horizontal');
                const hvw = getValue('hbeam_vertical_width');
                const hhw = getValue('hbeam_horizontal_width');
                const hl = getValue('hbeam_length');
                return new HBeam(hv, hh, hvw, hhw, hl);
            default:
                throw new Error("shapeType Error");
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