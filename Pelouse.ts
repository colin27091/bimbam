class Pelouse {

    length: number;
    width: number;

    constructor(length: number, width: number) {
        this.length = length;
        this.width = width;
    }

    isInside(position : {x : number, y : number}): boolean {
        return position.x <= this.length && position.y <= this.width && position.x >= 0 && position.y >= 0;
    }
}

export default Pelouse;
