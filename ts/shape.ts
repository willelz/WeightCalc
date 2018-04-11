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

//チャンネル
class Channel implements Shape {
    public constructor(private vertical: number, private horizontal: number, private length: number, private t1: number, private t2: number) {
    }
    calc(density: number) {
        const ll = ((this.vertical - this.t1) * this.t2) * 2;
        const hh = this.horizontal * this.t1;
        return (ll + hh) * this.length * density;
    }
}

//アングル
class Angle implements Shape {
    public constructor(private vertical: number, private horizontal: number, private length: number, private tv: number, private th: number) {
    }
    calc(density: number) {
        const v = (this.vertical - this.th) * this.tv;
        const h = this.th * (this.horizontal - this.tv);
        const o = this.th * this.tv;
        return (v + h + o) * this.length * density;
    }
}

enum ShapeType {
    cuboid,
    cylinder,
    hbeam,
    pipe,
    channel,
    angle,
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
                    case 'channel':
                        return ShapeType.channel;
                    case 'angle':
                        return ShapeType.angle;
                }
            }
        }
        throw new Error("No block element");
    }
    //今表示されている形の値をセットして作る
    public create(): Shape {
        const shapeType = this.getShapeType();

        //入力からmmを得る
        const getMeter = (searchID: string): number => {
            const element = <HTMLInputElement>document.getElementById(searchID);
            const box = Number(element.value);
            const unit = <HTMLInputElement>document.getElementById(searchID + '_unit');

            switch (unit.value) {
                case 'mm':
                    return box / 1000;
                case 'M':
                    return box;
                default:
                    throw new Error('unit error');
            }
        }

        switch (shapeType) {
            case ShapeType.cuboid:
                const v = getMeter('cuboid_vertical');  //mmを期待しているためMにする
                const h = getMeter('cuboid_horizontal');
                const he = getMeter('cuboid_height');
                return new Cuboid(v, h, he);
            case ShapeType.cylinder:
                const di = getMeter('cylinder_diameter');
                const ch = getMeter('cylinder_height');
                return new Cylinder(di, ch);
            case ShapeType.hbeam:
                const hv = getMeter('hbeam_vertical');
                const hh = getMeter('hbeam_horizontal');
                const t2 = getMeter('hbeam_vertical_width');
                const t1 = getMeter('hbeam_horizontal_width');
                const hl = getMeter('hbeam_length');
                return new HBeam(hv, hh, t2, t1, hl);
            case ShapeType.pipe:
                const pd = getMeter('pipe_diameter');
                const ph = getMeter('pipe_height');
                const pt = getMeter('pipe_thickness');
                return new Pipe(pd, ph, pt);
            case ShapeType.channel:
                const cv = getMeter('channel_vertical');
                const chh = getMeter('channel_horizontal');
                const cl = getMeter('channel_length');
                const ct1 = getMeter('channel_t1');
                const ct2 = getMeter('channel_t2');
                return new Channel(cv, chh, cl, ct1, ct2);
            case ShapeType.angle:
                const av = getMeter('angle_vertical');
                const ah = getMeter('angle_horizontal');
                const al = getMeter('angle_length');
                const atv = getMeter('angle_tv');
                const ath = getMeter('angle_th');
                return new Angle(av, ah, al, atv, ath);
            default:
                throw new Error("shapeType Error");
        }
    }
}

//計算ボタンを押した時
export function calc() {
    const shape = new ShapeFactory().create();;
    const d = Number((<HTMLInputElement>document.getElementById('blood')).value);
    const ans = shape.calc(d) * 1000; //トンが帰ってくるためkgにする
    const weight = <HTMLInputElement>document.getElementById('weight');
    weight.value = ans.toFixed(2); //小数点以下2桁までにする
}