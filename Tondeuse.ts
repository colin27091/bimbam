import Pelouse from "./Pelouse";

class Tondeuse {

    position: {
        x: number,
        y: number
    } 
    direction: string;
    pelouse: Pelouse;


    constructor(x: number, y: number, direction : string, pelouse: Pelouse) {
        this.direction = direction;
        this.position = {
            x : x,
            y : y
        }
        this.pelouse = pelouse;
    }

    readInstructions(instructions : string) {
        for(let instruction of instructions) {
            this.readInstruction(instruction);
        }
    }

    readInstruction(instruction: string) {
        switch(instruction) {
            case 'L':
                this.turnLeft();
                break;
            case 'R':
                this.turnRight();
                break;
            case 'F':
                this.moveForward();
                break;
            default:
                console.log("Unknown instruction " + instruction);
                break;
        }
    }

    moveForward(): void {

        //Creation d'un deep clone pour tester la prochaine position
        let newDirection = JSON.parse(JSON.stringify(this.position));

        switch(this.direction) {
            case 'N':
                newDirection.y ++;
                if(this.pelouse.isInside(newDirection)) { this.position.y ++; }
                break;
            case 'E':
                newDirection.x ++;
                if(this.pelouse.isInside(newDirection)) { this.position.x ++; }
                break;
            case 'S':
                newDirection.y --;
                if(this.pelouse.isInside(newDirection)) { this.position.y --; }
                break;
            case 'W':
                newDirection.x --;
                if(this.pelouse.isInside(newDirection)) { this.position.x --; }
                break;
            default:
                console.warn('Unknown direction');
        }
    } 

    turnRight() {
        switch(this.direction) {
            case 'N':
                this.direction = 'E';
                break;
            case 'E':
                this.direction = 'S';
                break;
            case 'S':
                this.direction = 'W';
                break;
            case 'W':
                this.direction = 'N';
                break;
        }
    }

    turnLeft() {
        switch(this.direction) {
            case 'N':
                this.direction = 'W';
                break;
            case 'W':
                this.direction = 'S';
                break;
            case 'S':
                this.direction = 'E';
                break;
            case 'E':
                this.direction = 'N';
                break;
        }
    }
}

export default Tondeuse;
