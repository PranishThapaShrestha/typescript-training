import{Shape} from './Shape';
import {Circle} from './Circle';
import { Rectangle } from './Rectangle';

let myCricle = new Circle(5,10,11);
let myRectangle = new Rectangle(0,2,3,4);


let theShapes: Shape[]= [];

theShapes.push(myCricle);
theShapes.push(myRectangle);


for(let tempShape of theShapes){
    console.log(tempShape.getInfo());
    console.log(tempShape.calculateArea());
    console.log();

}