import * as fs from 'fs';
import Pelouse from './src/Pelouse';
import Tondeuse from './src/Tondeuse';


const filename = process.argv[2] || 'instructions.txt';
const file = fs.readFileSync(filename,'utf8');

let instructions = file.split('\r\n');
let length = parseInt(instructions[0][0]);
let width = parseInt(instructions[0][1]);

let pelouse = new Pelouse(length, width);

let instructionsIter = instructions.slice(1, instructions.length).entries();
let iter = instructionsIter.next();

while (!iter.done) {

    let data = iter.value[1].split(' ');

    let x = parseInt(data[0][0]);
    let y = parseInt(data[0][1]);
    let direction = data[1];

    let tondeuse = new Tondeuse(x, y, direction, pelouse);

    let actions = instructionsIter.next().value[1];

    tondeuse.readInstructions(actions);

    console.log(`${tondeuse.position.x} ${tondeuse.position.y} ${tondeuse.direction}`);

    iter = instructionsIter.next();
}
