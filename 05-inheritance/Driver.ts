import{Shape} from './Shape';
import {Circle} from './Circle';
import { Rectangle } from './Rectangle';

let myShape= new Shape(10,15);
console.log(myShape.getInfo());

let myCricle = new Circle(5,10,11);
console.log(myCricle.getInfo());

let myRectangle = new Rectangle(0,2,3,4);
console.log(myRectangle.getInfo());